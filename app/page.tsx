import { Metadata } from 'next';
import Script from 'next/script';
import Hero from '@/components/sections/Hero';
import FintechStack from '@/components/sections/FintechStack';
import ArchitectureDiagram from '@/components/sections/ArchitectureDiagram';
import ServicesSection from '@/components/sections/ServicesSection';
import TrustCompliance from '@/components/sections/TrustCompliance';
import WhyThar from '@/components/sections/WhyThar';
import EngagementModels from '@/components/sections/EngagementModels';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Bank-Grade Fintech Infrastructure',
  description: 'Thar Digital Services builds white-label payment ecosystems and eBill integrations that pass Swiss bank security audits — on EBICS, QR-bill, and ISO 20022 standards.',
  alternates: {
    canonical: 'https://thardigital.in',
  },
};

export default function HomePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://thardigital.in',
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
      <Hero />
      <FintechStack />
      <ArchitectureDiagram />
      <ServicesSection />
      <TrustCompliance />
      <WhyThar />
      <EngagementModels />
      <CTA />
    </>
  );
}
