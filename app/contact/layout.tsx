import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Planning a regulated fintech deployment? Talk to an architect about integrating national payment rails or preparing for a bank security audit.',
  alternates: {
    canonical: 'https://thar.digital/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
