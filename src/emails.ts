import fs from 'node:fs/promises';
import { Dirent } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import mjml2html from 'mjml';

import { debug } from './helpers.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export type Email = {
  name: string;
  subject: string;
  body: string;
};

const subjects = {
  welcome: 'Bienvenido a medici',
} as const;

export async function getEmails(): Promise<Email[]> {
  const emails: Email[] = [];
  const templatesDir = await fs.opendir(path.join(__dirname, 'templates'));
  debug(`__dirname: ${__dirname}, templatesDir: ${templatesDir.path}`);

  for await (const dirent of templatesDir) {
    emails.push(await emailFromDirent(dirent));
  }

  return emails;
}

function compileTemplate(template: string): string {
  return mjml2html(template, { validationLevel: 'strict' }).html;
}

async function emailFromDirent(dirent: Dirent): Promise<Email> {
  const name = path.basename(
    dirent.name,
    path.extname(dirent.name),
  ) as keyof typeof subjects;
  debug(`reading ${name} from ${dirent.path}`);
  const template = await fs.readFile(dirent.path, { encoding: 'utf-8' });
  debug(`successfully read from ${dirent.path}`);

  return {
    name,
    subject: subjects[name],
    body: compileTemplate(template),
  };
}
