import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edvenswa',
  description: 'Edvenswa - Enterprise solutions and services',
  icons: {
    icon: [
      { url: '/edvenswa-logo-150x150.png', sizes: '150x150', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: { url: '/edvenswa-logo-150x150.png', sizes: '150x150' }
  },
};

export default function Head() {
  return (
    <>
      <link rel="icon" href="/edvenswa-logo-150x150.png" sizes="any" />
      <link rel="apple-touch-icon" href="/edvenswa-logo-150x150.png" />
    </>
  );
}
