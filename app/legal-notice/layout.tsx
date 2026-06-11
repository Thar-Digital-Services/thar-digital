import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Legal Notice for Thar Digital Services',
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
