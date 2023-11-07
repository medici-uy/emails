import fs from 'node:fs/promises';
import { Dirent, Dir } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import mjml2html from 'mjml';
import { registerComponent } from 'mjml-core';

import { debug } from './helpers.js';
import { MjLayout } from './components/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export type Email = {
  name: string;
  subject: string;
  body: string;
};

const subjects = {
  welcome: 'Bienvenido a medici',
} as const;

debug('registering MJML components');
for (const component of [MjLayout]) {
  registerComponent(component);
  debug(`${component.getTagName()} registered`);
}
debug('MJML components registered');

export async function getEmails(): Promise<Email[]> {
  const emails: Email[] = [];
  const templatesDir = await fs.opendir(path.join(__dirname, 'templates'));
  debug(`__dirname: ${__dirname}, templatesDir: ${templatesDir.path}`);

  for await (const dirent of templatesDir) {
    if (dirent.isFile()) {
      emails.push(await emailFromDirent(dirent, templatesDir));
    }
  }

  return emails;
}

function compileTemplate(template: string): string {
  return mjml2html(template, { validationLevel: 'strict' }).html;
}

async function emailFromDirent(
  dirent: Dirent,
  templatesDir: Dir,
): Promise<Email> {
  const name = path.basename(
    dirent.name,
    path.extname(dirent.name),
  ) as keyof typeof subjects;

  const templatePath = path.resolve(templatesDir.path, dirent.name);

  debug(`reading ${name} from ${templatePath}`);
  const template = await fs.readFile(templatePath, { encoding: 'utf-8' });
  debug(`successfully read from ${templatePath}`);

  return {
    name,
    subject: subjects[name],
    body: compileTemplate(template),
  };
}
