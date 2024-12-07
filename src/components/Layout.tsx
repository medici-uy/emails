import {
  Html,
  Body,
  Container,
  Head,
  Preview,
  Section,
  Img,
  Tailwind,
  Link,
  Font,
} from '@react-email/components';
import React from 'react';
import { primaryColorHex, appDisplayName } from '@medici-uy/ui';

import { Divider } from './Divider.tsx';
import { Text } from './Text.tsx';

export type LayoutProps = React.PropsWithChildren<{
  preview?: string;
}>;

export function Layout(props: LayoutProps) {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Head>
        <Font fontFamily="Arial" fallbackFontFamily="sans-serif" />
      </Head>
      {props.preview && <Preview>{props.preview}</Preview>}
      <Tailwind
        config={{
          theme: {
            extend: {
              textColor: {
                primary: '#0f0f0f',
                secondary: '#4d4d4d',
                tertiary: '#747474',
              },
              colors: {
                primary: primaryColorHex.light,
              },
            },
          },
        }}
      >
        <Body className="text-primary">
          <Container className="max-w-md text-center">
            <Section className="my-8">
              <Link href="https://medici.uy" target="_blank" rel="noopener">
                <Img
                  height={40}
                  src="https://raw.githubusercontent.com/medici-uy/identity/main/assets/logo-name-light.png"
                  className="mx-auto"
                  alt="Logo de medici."
                />
              </Link>
            </Section>
            <Divider />
            <div className="py-4">{props.children}</div>
            <Divider />
            <Text className="text-tertiary text-center text-sm">
              © {currentYear} {appDisplayName}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
