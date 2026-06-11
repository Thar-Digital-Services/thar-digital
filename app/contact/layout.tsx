import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Thar Digital Services. Book a free discovery call or send us a message.',
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
