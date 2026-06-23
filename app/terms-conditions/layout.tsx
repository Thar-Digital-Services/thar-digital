import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions for Thar Digital Services — a fintech infrastructure partner building white-label payment ecosystems and eBill integrations to European banking standards.',
  alternates: {
    canonical: 'https://thar.digital/terms-conditions',
  },
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
