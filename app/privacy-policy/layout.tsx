import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Thar Digital Services — a fintech infrastructure partner building white-label payment ecosystems and eBill integrations to European banking standards.',
  alternates: {
    canonical: 'https://thar.digital/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
