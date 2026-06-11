'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Backend & Microservices',
    items: [
      'Java Spring Boot (2.7 → 3.4)',
      'Kotlin + Vert.x (reactive, async)',
      'Event-driven with RabbitMQ',
      'High-concurrency payment volumes',
    ],
  },
  {
    title: 'European Payment Rails',
    items: [
      'EBICS v2.5/v3 — DE · FR · CH · AT',
      'eBill network integration',
      'Swiss QR-bill generation',
      'ISO 20022 (camt / pain)',
    ],
  },
  {
    title: 'Cloud-Native Infrastructure',
    items: [
      'Kubernetes on GKE (GCP)',
      'ArgoCD GitOps + Terraform IaC',
      'Multi-cloud across GCP & AWS',
      'HSM-backed keys via Cloud KMS',
    ],
  },
  {
    title: 'Frontend & Mobile',
    items: [
      'Vue.js (Vue 3 + Vuetify)',
      'React / Next.js',
      'Flutter mobile apps',
      'White-label, multi-tenant portals',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FintechStack() {
  return (
    <section className="section-padding">
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
            Enterprise Fintech &amp; Payment Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 mb-5">
            The engineering behind regulated payment platforms.
          </h2>
          <p className="text-muted-foreground text-lg">
            The same stack we used to ship a Swiss eBill infrastructure layer —
            from national payment-rail integration to HSM-backed security and
            GitOps-driven delivery.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="swiss-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={itemVariants} className="p-7 md:p-8">
              <h3 className="font-display text-lg font-semibold mb-5">
                {pillar.title}
              </h3>
              <ul className="space-y-3">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground text-sm flex items-start gap-3"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-primary" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
