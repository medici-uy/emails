import { Text } from '#components/Text.tsx';
import { Heading } from '#components/Heading.tsx';
import { Layout } from '#components/Layout.tsx';
import { Button } from '#components/Button.tsx';
import { OrderLine } from '#components/OrderLine.tsx';
import { SignOff } from '#components/SignOff.tsx';

export function Template() {
  return (
    <Layout preview={subject}>
      <Heading as="h1">Gracias por tu compra 🛍️</Heading>
      <OrderLine label="Producto" value="{{purchasable_name}}" />
      <OrderLine
        label="Pagaste"
        value="{{final_price_in_uyu}} pesos uruguayos"
      />
      <Text>¡Espero que lo disfrutes!</Text>
      <Button href="https://medici.uy">Ir a medici</Button>
      <SignOff />
    </Layout>
  );
}

export const name = 'order_approved';
export const subject = 'Compraste {{purchasable_name}}';

export default Template;
