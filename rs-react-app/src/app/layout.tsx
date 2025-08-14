import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import Header from '../components/layout/Header';

export const metadata: Metadata = {
  title: 'Find Pokemon App',
  description: 'A simple app to find and view details about Pokemon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className="min-h-screen pb-40 sm:pb-20 px-4 max-w-7xl mx-auto prose bg-white text-black dark:bg-gray-900 dark:text-white"
          id="root"
        >
          <Providers>
            <Header />
            <main>{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  );
}
