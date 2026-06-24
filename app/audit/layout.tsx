import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment-Rails Readiness Audit',
  description: 'A fixed-scope, 1–2 week review that tells you exactly what it takes to integrate EBICS, eBill, Swiss QR-bill and ISO 20022 — and pass a bank security audit — before you commit to a build.',
  alternates: {
    canonical: 'https://thar.digital/audit',
  },
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
