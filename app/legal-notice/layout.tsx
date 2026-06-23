import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Legal notice for Thar Digital Services — a fintech infrastructure partner building white-label payment ecosystems and eBill integrations to European banking standards.',
  alternates: {
    canonical: 'https://thar.digital/legal-notice',
  },
};

export default function LegalNoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
