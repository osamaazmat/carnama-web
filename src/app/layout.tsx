import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Carnama',
  description:
    'Carnama is an app for vehicle owners and workshops in Pakistan. Log work, verify it at a shop, and pass the vehicle on without losing the file.',
  icons: {
    icon: [
      {
        url: '/images/carnama-favicon-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/carnama-favicon-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [
      {
        url: '/images/carnama-favicon-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/carnama-favicon-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-text antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
