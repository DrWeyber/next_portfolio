import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import { Providers } from '@/app/[locale]/providers';
import { Container, Footer, Header } from '@/app/[locale]/components';
import CssBaseLine from '@/styles/CssBaseLine';
import '@styles/theme.css';

const inter = Inter({ subsets: ['latin'] });
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: 'Portfolio next',
  alternates: {
    languages: {
      'en-EN': `${baseUrl}/en`
    }
  }
};

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            <Providers>
              <CssBaseLine />
              <Header />
              <Container>
                {children}
                <Footer />
              </Container>
            </Providers>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
