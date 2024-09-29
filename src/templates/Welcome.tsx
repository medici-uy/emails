import { Heading } from '../components/Heading.js';
import { Layout } from '../components/Layout.js';

export function Template() {
  return (
    <Layout preview={subject}>
      <Heading as="h1">{'{{first_name}}'}, ¡bienvenido a medici!</Heading>
    </Layout>
  );
}

export const name = 'welcome';
export const subject = '¡Bienvenido a medici!';

export default Template;
