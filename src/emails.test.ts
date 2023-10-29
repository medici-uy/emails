import { test } from 'node:test';
import assert from 'node:assert/strict';

import { getEmails } from './emails.js';

test('getEmails reads the emails', async () => {
  const emails = await getEmails();

  assert(emails.length >= 1);
});
