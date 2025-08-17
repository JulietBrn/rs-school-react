import { Providers } from './providers';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Header from '../../components/layout/Header';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <div
            className="min-h-screen pb-40 sm:pb-20 px-4 max-w-7xl mx-auto prose bg-white text-black dark:bg-gray-900 dark:text-white"
            id="root"
          >
            <Providers>
              <Header />
              <main>{children}</main>
            </Providers>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
