import { render } from '@react-email/render';

import * as templates from './templates/index.js';

export type Email = {
  name: string;
  subject: string;
  body: string;
};

export async function getEmails(): Promise<Email[]> {
  const emails = await Promise.all(
    Object.values(templates).map(async (template) => ({
      name: template.name,
      subject: template.subject,
      body: await render(<template.Template />),
    })),
  );

  return emails;
}
