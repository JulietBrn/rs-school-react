import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Find Pokemon App',
  description: 'A simple app to find and view details about Pokemon',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
