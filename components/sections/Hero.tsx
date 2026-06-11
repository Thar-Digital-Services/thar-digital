'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '100%', label: 'Bank security-audit pass rate' },
  { value: 'EBICS v2.5 + v3', label: 'Payment standards integrated' },
  { value: 'GCP + AWS', label: 'Multi-cloud infrastructure' },
];

export default function Hero() {
  return (
    <>
      <section className="pt-28 md:pt-36 pb-6">
        <div className="container-custom">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary"
          >
            <span className="h-px w-7 bg-primary" />
            Swiss-standard fintech infrastructure
          </motion.span>

          <div className="swiss-grid mt-6 grid-cols-1 lg:grid-cols-[1.55fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex flex-col justify-between gap-10 p-6 md:p-10"
            >
              <h1 className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-4xl md:text-5xl lg:text-6xl">
                Bank-grade <span className="text-gradient">fintech infrastructure</span>.
              </h1>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="xl" href="/case-studies">
                  Read the case studies
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="xl" href="/services">
                  Our capabilities
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="flex flex-col justify-center gap-4 bg-card p-6 md:p-10"
            >
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                We build white-label payment ecosystems and eBill integrations
                that pass rigorous Swiss bank security audits.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Engineered on the EBICS, QR-bill and ISO&nbsp;20022 standards that
                run Switzerland&apos;s national payment rails.
              </p>
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="swiss-grid mt-4 grid-cols-1 sm:grid-cols-3 tabular-nums"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="p-6">
                <div className="font-display font-bold text-xl md:text-2xl tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust indicator */}
      <section className="pt-12 pb-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-5">
              Trusted in production by
            </p>
            <a
              href="https://billte.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col gap-2"
            >
              <div className="h-16 px-8 flex items-center justify-center border border-border bg-card transition-colors group-hover:border-foreground/30">
                <Image
                  src="https://billte.ch/assets/billte-logo-BfM7_FDN.png"
                  alt="Billte — Digital Billing Solutions"
                  width={120}
                  height={40}
                  className="h-8 object-contain"
                />
              </div>
              <span className="text-xs text-muted-foreground">
                Swiss Fintech · Digital Billing Solutions
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
