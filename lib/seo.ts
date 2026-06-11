/**
 * SEO configuration helpers
 * Note: In Next.js App Router, we use the Metadata API instead of next-seo
 * This file contains helper functions and constants for SEO
 */

export const siteConfig = {
  name: 'Thar Digital Services',
  url: 'https://thar.digital',
  description: 'Thar Digital Services is a fintech infrastructure partner building white-label payment ecosystems and eBill integrations that pass Swiss bank security audits — on EBICS, QR-bill, and ISO 20022 standards.',
  ogImage: 'https://thar.digital/images/logos/logo-dark.png',
  twitterHandle: '@thardigital', // TODO: Add actual Twitter handle
} as const;

/**
 * Generate page metadata
 */
export function generateMetadata({
  title,
  description,
  path = '',
}: {
  title: string;
  description?: string;
  path?: string;
}) {
  const fullTitle = title.includes('|') ? title : `${title} | Thar Digital Services`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: description || siteConfig.description,
    openGraph: {
      title: fullTitle,
      description: description || siteConfig.description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description || siteConfig.description,
    },
  };
}
