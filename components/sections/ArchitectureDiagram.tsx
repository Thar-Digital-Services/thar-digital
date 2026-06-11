'use client';

import { motion } from 'framer-motion';

const partnerBlocks = ['EBICS client', 'Signing / KMS', 'ISO 20022', 'QR-bill'];

export default function ArchitectureDiagram() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-7 bg-primary" />
            Reference architecture
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 mb-5">
            The secure partner layer.
          </h2>
          <p className="text-muted-foreground text-lg">
            An anonymized view of how we bridge a core banking system to the
            national eBill network — the seam where security audits are won or lost.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 items-stretch gap-3 lg:grid-cols-[1fr_auto_1.5fr_auto_1fr]"
        >
          {/* Core banking */}
          <div className="border border-border bg-background p-6">
            <h3 className="font-display font-semibold">Core Banking System</h3>
            <p className="text-sm text-muted-foreground mt-1">Financial institution</p>
          </div>

          <div className="flex items-center justify-center text-primary text-xl font-bold rotate-90 lg:rotate-0">
            ⇄
          </div>

          {/* Partner layer (highlighted) */}
          <div className="border-2 border-foreground bg-background p-6">
            <h3 className="font-display font-semibold">Secure Partner Layer</h3>
            <p className="text-sm text-muted-foreground mt-1">
              OAuth2 / JWT · mTLS · audit logging
            </p>
            <div className="swiss-grid grid-cols-2 mt-4">
              {partnerBlocks.map((b) => (
                <div
                  key={b}
                  className="px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center text-primary text-xl font-bold rotate-90 lg:rotate-0">
            ⇄
          </div>

          {/* eBill network */}
          <div className="border border-border bg-background p-6">
            <h3 className="font-display font-semibold">National eBill Network</h3>
            <p className="text-sm text-muted-foreground mt-1">
              ≈95% of Swiss financial institutions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
