'use client';

import { motion } from 'framer-motion';
import { Server, Network, Cloud, Layout } from 'lucide-react';

const pillars = [
  {
    icon: Server,
    title: 'Backend & Microservices',
    items: [
      'Java Spring Boot (2.7 → 3.4)',
      'Kotlin + Vert.x (reactive, async)',
      'Event-driven with RabbitMQ',
      'High-concurrency payment volumes',
    ],
  },
  {
    icon: Network,
    title: 'Swiss Payment Rails',
    items: [
      'EBICS v2.5 (H003) + v3 (H005)',
      'eBill network integration',
      'Swiss QR-bill generation',
      'ISO 20022 (camt / pain)',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Infrastructure',
    items: [
      'Kubernetes on GKE (GCP)',
      'ArgoCD GitOps + Terraform IaC',
      'Multi-cloud across GCP & AWS',
      'HSM-backed keys via Cloud KMS',
    ],
  },
  {
    icon: Layout,
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
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function FintechStack() {
  return (
    <section className="section-padding relative">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Enterprise Fintech &amp; Payment Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            The engineering behind regulated payment platforms
          </h2>
          <p className="text-muted-foreground text-lg">
            The same stack we used to ship a Swiss eBill infrastructure layer —
            from national payment-rail integration to HSM-backed security and
            GitOps-driven delivery.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  {pillar.title}
                </h3>
                <ul className="space-y-3">
                  {pillar.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground text-sm flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
