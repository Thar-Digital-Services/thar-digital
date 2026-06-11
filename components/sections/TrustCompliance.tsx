'use client';

import { motion } from 'framer-motion';

const items = [
  { title: 'End-to-end encryption', description: 'Encrypted in transit and at rest, with HSM-backed key management via Cloud KMS.' },
  { title: 'Secure API access', description: 'OAuth2 / JWT and mutual TLS between every service boundary.' },
  { title: 'X.509 digital signing', description: 'RSA signatures and certificate management for tamper-evident messaging.' },
  { title: 'NDA & white-label delivery', description: 'Strict confidentiality, fully white-labelled under your brand.' },
  { title: 'Swiss / EU data residency', description: 'Workloads pinned to European regions to meet residency requirements.' },
  { title: 'Distributed e-signature', description: 'EBICS EDS — multiple authorized signers approve orders remotely.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function TrustCompliance() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-background/70">
            <span className="h-px w-7 bg-primary" />
            Trust &amp; compliance
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 mb-5 text-background">
            Built to pass the audit.
          </h2>
          <p className="text-background/65 text-lg">
            Security is engineered in from the first commit — the controls that
            took our work to a 100% pass on a Swiss bank security audit.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-px border border-background/15 bg-background/15 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="bg-foreground p-7"
            >
              <h3 className="font-display font-semibold mb-1.5 text-background">
                {item.title}
              </h3>
              <p className="text-sm text-background/60 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
