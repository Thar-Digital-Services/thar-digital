'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'White-Label Banking & Billing',
    description:
      'Payment ecosystems and digital billing platforms that fintechs and banks ship under their own brand.',
  },
  {
    title: 'European Payment-Standard Integration',
    description:
      'EBICS v2.5/v3 across DE · FR · CH · AT, the eBill network, Swiss QR-bill and ISO 20022 (camt / pain).',
  },
  {
    title: 'High-Security Microservices',
    description:
      'Event-driven services in Java Spring Boot and Kotlin / Vert.x, built for high-concurrency payment volumes.',
  },
  {
    title: 'Compliance-Ready Architecture',
    description:
      'Architectures engineered to pass bank security audits — encryption, key management and audit logging by design.',
  },
  {
    title: 'Cloud-Native DevOps',
    description:
      'Kubernetes on GKE with ArgoCD GitOps and Terraform IaC across GCP and AWS, with Swiss / EU data residency.',
  },
  {
    title: 'Dedicated Fintech Teams',
    description:
      'Long-term engineering teams, led by an architect, integrated as an extension of your fintech.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ServicesSection() {
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
            What we build
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-5 mb-5">
            Fintech infrastructure, end to end.
          </h2>
          <p className="text-muted-foreground text-lg">
            From European payment-rail integration to bank-grade security and
            cloud-native delivery — every layer of a regulated fintech platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="swiss-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="flex flex-col p-7 md:p-8 min-h-[12rem] transition-colors hover:bg-card"
            >
              <span className="font-display font-bold text-sm text-primary tracking-wide tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-lg font-semibold mt-5 mb-2.5">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
