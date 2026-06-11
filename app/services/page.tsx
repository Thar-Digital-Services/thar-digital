import { Metadata } from 'next';
import Script from 'next/script';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive engineering services: Dedicated teams, backend development, cloud & DevOps, frontend, system architecture, data engineering, and security.',
  alternates: {
    canonical: 'https://thar.digital/services',
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://thar.digital',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://thar.digital/services',
      },
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesContent />
    </>
  );
}
