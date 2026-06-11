import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL('https://thar.digital'),
  title: {
    default: 'Thar Digital Services | Bank-Grade Fintech Infrastructure',
    template: '%s | Thar Digital Services',
  },
  description: 'Thar Digital Services is a fintech infrastructure partner building white-label payment ecosystems and eBill integrations that pass Swiss bank security audits — on EBICS, QR-bill, and ISO 20022 standards.',
  keywords: [
    'fintech infrastructure',
    'white-label banking',
    'eBill integration',
    'EBICS integration',
    'Swiss QR-bill',
    'ISO 20022',
    'payment microservices',
    'bank-grade security',
  ],
  authors: [{ name: 'Thar Digital Services' }],
  creator: 'Thar Digital Services',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thar.digital',
    siteName: 'Thar Digital Services',
    title: 'Thar Digital Services | Bank-Grade Fintech Infrastructure',
    description: 'White-label payment ecosystems and eBill integrations that pass Swiss bank security audits.',
    images: [
      {
        url: 'https://thar.digital/images/logos/logo-dark.png',
        width: 1200,
        height: 630,
        alt: 'Thar Digital Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thar Digital Services | Bank-Grade Fintech Infrastructure',
    description: 'White-label payment ecosystems and eBill integrations that pass Swiss bank security audits.',
    creator: '@thardigitalsvcs',
    site: '@thardigitalsvcs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logos/logo-red.png',
    apple: '/images/logos/logo-red.png',
    shortcut: '/images/logos/logo-red.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F2F0E9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logos/logo-dark.png`,
    description: SITE_CONFIG.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: SITE_CONFIG.email,
      areaServed: ['CH', 'EU', 'Worldwide'],
      availableLanguage: 'English',
    },
    sameAs: [
      SITE_CONFIG.linkedin,
      'https://x.com/thardigitalsvcs',
      'https://www.instagram.com/thar.digital/',
      'https://www.youtube.com/@TharDigitalServices',
      'https://github.com/Thar-Digital-Services',
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Archivo+Expanded:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
