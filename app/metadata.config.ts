import type { Metadata } from 'next';

// Define metadata for the app
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
