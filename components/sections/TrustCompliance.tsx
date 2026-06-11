'use client';

import { motion } from 'framer-motion';
import { Lock, KeyRound, FileSignature, FileLock2, Globe } from 'lucide-react';

const items = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'Encrypted data in transit and at rest, with HSM-backed key management via Cloud KMS.',
  },
  {
    icon: KeyRound,
    title: 'Secure API Access',
    description: 'OAuth2 / JWT authentication and mutual TLS between every service boundary.',
  },
  {
    icon: FileSignature,
    title: 'X.509 Digital Signing',
    description: 'RSA digital signatures and certificate management for tamper-evident messaging.',
  },
  {
    icon: FileLock2,
    title: 'NDA & White-Label Delivery',
    description: 'Strict confidentiality and fully white-labelled work delivered under your brand.',
  },
  {
    icon: Globe,
    title: 'Swiss / EU Data Residency',
    description: 'Workloads pinned to European regions (europe-west6) to meet residency requirements.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function TrustCompliance() {
  return (
    <section className="section-padding relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Trust &amp; Compliance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Built to pass the audit
          </h2>
          <p className="text-muted-foreground text-lg">
            Security is engineered in from the first commit — not bolted on before
            review. The controls that took our work to a 100% pass on a Swiss bank
            security audit.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
