'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-border bg-card p-8 md:p-14"
        >
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                <span className="h-px w-7 bg-primary" />
                Start a conversation
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5">
                Building fintech infrastructure that has to pass an audit?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-xl">
                Tell us about the payment rails, compliance bar, and timeline.
                We&apos;ll show you how we&apos;d architect it.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <Button variant="hero" size="xl" href="/contact">
                Talk to an architect
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
