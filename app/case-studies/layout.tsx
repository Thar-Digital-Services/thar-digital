import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Anonymized technical teardowns of the fintech infrastructure we have shipped — eBill integrations, white-label billing platforms, and cloud-native payment microservices.',
  alternates: {
    canonical: 'https://thardigital.in/case-studies',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
