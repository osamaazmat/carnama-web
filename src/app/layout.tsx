import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Carnama',
  description:
    'Carnama is an app for vehicle owners and workshops in Pakistan. Log work, verify it at a shop, and pass the vehicle on without losing the file.',
  icons: {
    icon: '/images/carnama-favicon-light.png',
    apple: '/images/carnama-favicon-light.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <body className="font-sans bg-background text-text antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
