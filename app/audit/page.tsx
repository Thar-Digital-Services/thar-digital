'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const deliverables = [
  {
    title: 'Integration architecture map',
    description:
      'A clear diagram of how your systems connect to the national payment rails — the secure partner layer, data flows, and the seams that matter.',
  },
  {
    title: 'EBICS & eBill onboarding plan',
    description:
      'Exactly what to request from your bank: the EBICS agreement, subscriber key ceremony (INI/HIA), and eBill network steps — sequenced.',
  },
  {
    title: 'ISO 20022 message gap analysis',
    description:
      'Which camt (053/054) and pain (001) messages you need, how they map to your data, and where the parsing/generation work sits.',
  },
  {
    title: 'Security & compliance gap report',
    description:
      'What a Cantonal-bank security audit will demand — encryption, key management, mTLS, audit logging, data residency — and where you fall short today.',
  },
  {
    title: 'Effort, timeline & risk estimate',
    description:
      'A realistic build estimate with the specific risks called out up front — so there are no surprises after you commit.',
  },
  {
    title: 'Go / no-go recommendation',
    description:
      'A straight answer on feasibility and approach, plus a reference architecture you can hand to your team or to us.',
  },
];

const steps = [
  {
    title: 'Discovery call',
    description:
      'A 30-minute architecture conversation — your target rails (EBICS / eBill / QR-bill), compliance bar, systems, and timeline.',
  },
  {
    title: 'Review',
    description:
      'We review your requirements, current architecture, and the bank/standards involved — the same lens we use on production fintech infrastructure.',
  },
  {
    title: 'Readout',
    description:
      'A written deliverable pack plus a live walkthrough — you leave knowing exactly what it takes, what it costs, and whether to proceed.',
  },
];

const forWhom = [
  'Fintechs & scale-ups expanding into Switzerland / DACH',
  'Software vendors adding eBill, QR-bill or EBICS to their product',
  'Wealth-tech, treasury & payment platforms needing bank connectivity',
  'Teams already subscribed to an EBICS/eBill API but stuck on integration',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AuditPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thar.digital' },
      { '@type': 'ListItem', position: 2, name: 'Readiness Audit', item: 'https://thar.digital/audit' },
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="pt-32 pb-20">
        <div className="container-custom">
          {/* Hero */}
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-7 bg-primary" />
              Fixed-scope engagement
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mt-5 mb-6 tracking-[-0.02em]">
              Swiss Payment-Rails Readiness Audit.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A fixed-price, 1–2 week review that tells you exactly what it takes
              to integrate <strong className="text-foreground font-semibold">EBICS, eBill, Swiss QR-bill and ISO 20022</strong> —
              and pass a bank security audit — <em>before</em> you commit to a build.
              Most teams underestimate the compliance half; this removes the guesswork.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="xl" href="/contact">
                Book your audit
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" href="/case-studies">
                See the work
              </Button>
            </div>
          </div>

          {/* Format strip */}
          <div className="swiss-grid grid-cols-1 sm:grid-cols-3 mb-20">
            {[
              { v: '1–2 weeks', l: 'Turnaround' },
              { v: 'Fixed price', l: 'Quoted up front, credited toward a build' },
              { v: 'Remote · CET overlap', l: 'Global delivery' },
            ].map((f) => (
              <div key={f.l} className="p-6">
                <div className="font-display font-bold text-lg md:text-xl tracking-tight">{f.v}</div>
                <div className="text-sm text-muted-foreground mt-1.5">{f.l}</div>
              </div>
            ))}
          </div>

          {/* What you get */}
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-7 bg-primary" />
              What you get
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-semibold mt-5 tracking-[-0.02em]">
              Six concrete deliverables.
            </h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="swiss-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20"
          >
            {deliverables.map((d, i) => (
              <motion.div key={d.title} variants={itemVariants} className="flex flex-col p-7 md:p-8">
                <span className="font-display font-bold text-sm text-primary tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg font-semibold mt-5 mb-2.5">{d.title}</h3>
                <p className="text-muted-foreground text-[0.95rem] leading-relaxed">{d.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* How it works */}
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-7 bg-primary" />
              How it works
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-semibold mt-5 tracking-[-0.02em]">
              Three steps, no long commitment.
            </h2>
          </div>
          <div className="swiss-grid grid-cols-1 mb-20">
            {steps.map((s, i) => (
              <div key={s.title} className="grid grid-cols-[3rem_1fr] gap-4 p-7 md:grid-cols-[5rem_1fr] md:gap-8 md:p-8">
                <span className="font-display font-bold text-primary text-lg tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Who it's for */}
          <div className="max-w-2xl mb-10">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-7 bg-primary" />
              Who it&apos;s for
            </span>
          </div>
          <div className="swiss-grid grid-cols-1 sm:grid-cols-2 mb-20">
            {forWhom.map((w) => (
              <div key={w} className="flex items-start gap-3 p-7">
                <span className="mt-2 h-1 w-1 shrink-0 bg-primary" />
                <span className="text-foreground">{w}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="border border-border bg-card p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold">
                Find out what it really takes.
              </h2>
              <p className="text-muted-foreground text-lg mt-2">
                Book the audit — the fee is credited toward a subsequent build engagement.
              </p>
            </div>
            <Button variant="hero" size="xl" href="/contact">
              Book your audit
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
