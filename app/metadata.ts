import type { Metadata } from 'next';

// Define default metadata for the entire site
export const defaultMetadata: Metadata = {
  title: 'Edvenswa',
  description: 'Edvenswa - Enterprise solutions and services',
  icons: {
    icon: [
      { url: '/edvenswa-logo-150x150.png', sizes: '150x150', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: { url: '/edvenswa-logo-150x150.png', sizes: '150x150' }
  },
  openGraph: {
    title: 'Edvenswa',
    description: 'Edvenswa - Enterprise solutions and services',
    images: [{ url: '/edvenswa-logo-150x150.png' }]
  },
  twitter: {
    title: 'Edvenswa',
    description: 'Edvenswa - Enterprise solutions and services',
    images: [{ url: '/edvenswa-logo-150x150.png' }]
  }
};
