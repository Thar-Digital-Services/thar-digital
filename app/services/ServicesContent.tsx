'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'White-Label Banking & Billing Platforms',
    description:
      'Multi-tenant biller, payer, and admin portals that fintechs and banks ship under their own brand — web and mobile.',
    stack: ['Vue.js', 'Vuetify', 'Node.js', 'Flutter'],
  },
  {
    title: 'Core Banking & Payment APIs',
    description:
      'Scalable, secure backend microservices and API gateways built for high-concurrency transaction processing and national clearing systems.',
    stack: ['Java Spring Boot', 'Kotlin / Vert.x', 'RabbitMQ'],
  },
  {
    title: 'European Payment-Standard Integration',
    description:
      'Native integration with EBICS v2.5/v3 (DE · FR · CH · AT), the eBill network, Swiss QR-bill, and ISO 20022 (camt / pain) messaging.',
    stack: ['EBICS', 'eBill', 'QR-bill', 'ISO 20022'],
  },
  {
    title: 'Document & QR-Bill Generation',
    description:
      'High-volume invoice and statement generation — templated PDFs, watermarking, and standards-compliant Swiss QR-bill rendering at scale.',
    stack: ['PDF generation', 'Swiss QR-bill', 'Templating'],
  },
  {
    title: 'Financial Integrations & Compliance Pipelines',
    description:
      'High-trust modules engineered for regulated environments: automated identity-verification (KYC) workflows, secure e-sign, payment reconciliation, and third-party financial integrations.',
    stack: ['KYC workflows', 'e-sign', 'camt.054 reconciliation'],
  },
  {
    title: 'Cloud-Native DevOps',
    description:
      'Kubernetes deployments on GKE with GCP provisioning, ArgoCD GitOps, and Terraform IaC — multi-cloud across GCP and AWS, with Swiss / EU data residency.',
    stack: ['GKE', 'GCP', 'ArgoCD', 'Terraform'],
  },
  {
    title: 'Security & Compliance',
    description:
      'Engineered to pass Cantonal bank security audits — EBICS compliance, data-residency enforcement, HSM-backed key management and X.509 signing, on top of SOC 2 / GDPR baselines.',
    stack: ['Cantonal bank audits', 'EBICS compliance', 'Data residency', 'Cloud KMS'],
  },
  {
    title: 'Legacy Modernization',
    description:
      'Migrating monolithic billing and banking systems to event-driven microservices — incrementally, with zero downtime, using the strangler pattern.',
    stack: ['Monolith → microservices', 'Zero-downtime', 'Strangler pattern'],
  },
  {
    title: 'Architect-Led Engineering Teams',
    description:
      'Long-term teams led by an architect and integrated as an extension of your fintech — the heavy architectural lifting handled in-house.',
    stack: ['Dedicated', 'Architect-led', 'Long-term'],
  },
];

const process = [
  {
    title: 'Discovery — Architecture & Compliance Mapping',
    description:
      'Before a line of code: we map your architecture, payment rails, threat model, and the specific audit and compliance bar you have to clear.',
  },
  {
    title: 'Architecture & Team Formation',
    description:
      'An architect designs the system and risk controls up front, then we staff the right engineers against that blueprint — vetted for depth and communication.',
  },
  {
    title: 'Delivery & Communication',
    description:
      'Regular sprints, transparent reporting, and time-zone overlap. We work in your tooling — Jira, Slack, GitHub — so you always know where things stand.',
  },
  {
    title: 'Security-First Quality Assurance',
    description:
      'Code reviews and automated testing, plus security-first deployment, penetration-testing readiness, and strict audit logging — built for manual bank review, not just scanners.',
  },
  {
    title: 'Scaling & Long-Term Support',
    description:
      'GitOps-driven delivery that scales with you. Long-term partnerships mean we know your codebase deeply and support you at any stage.',
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

export default function ServicesContent() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-7 bg-primary" />
            Capabilities
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-5 mb-5 tracking-[-0.02em]">
            A specialized arsenal for European fintechs.
          </h1>
          <p className="text-muted-foreground text-lg">
            Not a menu of generic developer skills — the specific capabilities we
            use to build and operate regulated payment infrastructure that passes
            bank security audits.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="swiss-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="flex flex-col p-7 md:p-8 transition-colors hover:bg-card"
            >
              <span className="font-display font-bold text-sm text-primary tracking-wide tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="font-display text-lg font-semibold mt-5 mb-2.5">
                {service.title}
              </h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {service.stack.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How We Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-7 bg-primary" />
              How we work
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-semibold mt-5 mb-5 tracking-[-0.02em]">
              A process built around risk, not just delivery.
            </h2>
            <p className="text-muted-foreground text-lg">
              How we handle the questions a regulated institution actually asks —
              compliance, security, and auditability — at every stage.
            </p>
          </div>

          <div className="swiss-grid grid-cols-1 mb-20">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="grid grid-cols-[3rem_1fr] gap-4 p-7 md:grid-cols-[5rem_1fr] md:gap-8 md:p-8"
              >
                <span className="font-display font-bold text-primary text-lg tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-border bg-card p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold">
              Have a regulated build in mind?
            </h2>
            <p className="text-muted-foreground text-lg mt-2">
              Tell us about the payment rails, compliance bar, and timeline.
            </p>
          </div>
          <Button variant="hero" size="xl" href="/contact">
            Talk to an architect
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
