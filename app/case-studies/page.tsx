'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

// Case studies data — anonymized (no client, bank, or network names by contract)
interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  location: string;
  description: string;
  glossary?: string;
  challenge: string;
  solution: string;
  securityHurdle?: string;
  outcomes: string[];
  stack: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'ebill-infrastructure',
    title: 'Secure eBill Infrastructure Layer',
    industry: 'FinTech · Banking Infrastructure',
    location: 'Switzerland',
    description:
      'A bank-grade software partner layer connecting a financial institution to the national eBill network.',
    glossary:
      'In plain English: EBICS is the secure standard banks use to exchange payment files across Germany, France, Switzerland and Austria; eBill is Switzerland\'s service that delivers invoices straight into a customer\'s online banking, reaching ~95% of Swiss banks.',
    challenge:
      'A regional European financial institution needed a white-label invoice-management system with direct, zero-downtime access to the national eBill network — under strict data-privacy rules, and gated by the bank\'s own internal security audit.',
    solution:
      'We engineered the secure software partner layer that bridges the core banking system and the eBill network: EBICS v2.5/v3 file transport, ISO 20022 (camt) processing, Swiss QR-bill, templated document and PDF generation, and digital signing.',
    securityHurdle:
      'Early internal audits exposed gaps in the encryption and key-handling expectations. We re-architected around HSM-backed key management (Cloud KMS), X.509/RSA digital signing, OAuth2/JWT with mutual TLS, audit logging, secret management and workload identity — achieving a 100% pass from the bank\'s security team.',
    outcomes: [
      'Passed the bank security audit on the strengthened architecture',
      'Live B2B digital-invoicing pipeline in the Swiss market',
      'Zero-downtime integration with the national eBill network',
      'Reusable partner layer hardened for regulated environments',
    ],
    stack: ['Java', 'Spring Boot', 'EBICS v2.5/v3', 'ISO 20022', 'Cloud KMS', 'GKE'],
  },
  {
    id: 'white-label-invoicing',
    title: 'White-Label Invoice Management Platform',
    industry: 'FinTech · SaaS',
    location: 'Switzerland',
    description:
      'A multi-tenant biller, payer, and admin platform across web and mobile, with automated bank reconciliation.',
    challenge:
      'Deliver a multi-tenant, white-label billing platform serving billers, payers, and administrators across web and mobile — with automated bank reconciliation and multi-channel invoice delivery, built to scale with transaction volume.',
    solution:
      'We built event-driven Kotlin/Vert.x microservices with ISO 20022 camt.054 reconciliation, Vue.js (Vuetify) portals for biller, payer, admin and support roles, a Flutter mobile app, and MongoDB/Redis behind an API gateway fronting the service mesh.',
    outcomes: [
      'Automated payment matching from camt.054 bank statements',
      'Multi-channel delivery: eBill, email, post, and SMS',
      'White-labelled portals deployed across 15+ organisations',
      'Architected for high-concurrency payment volumes',
    ],
    stack: ['Kotlin', 'Vert.x', 'Vue 3', 'Vuetify', 'Flutter', 'MongoDB', 'Redis', 'GKE'],
  },
  {
    id: 'cloud-native-payments',
    title: 'Cloud-Native Payment Microservices & QR-Bill Engine',
    industry: 'FinTech · Cloud Infrastructure',
    location: 'Switzerland / EU',
    description:
      'Swiss QR-bill and document tooling on a GitOps-driven, multi-cloud platform with strict data residency.',
    challenge:
      'Build payment-standard tooling — Swiss QR-bill generation and document/PDF generation — plus the cloud-native platform to deploy and operate dozens of services reliably, with strict Swiss/EU data residency.',
    solution:
      'We delivered a QR-bill generation engine and templated document service, with Terraform-provisioned GKE on GCP (europe-west6), ArgoCD GitOps with automated sync, Workload Identity and Secret Manager, multi-cloud delivery across GCP and AWS, and Jenkins/Bitbucket CI/CD.',
    outcomes: [
      'Repeatable, GitOps-driven multi-service delivery',
      'Swiss/EU data residency with HSM-backed secrets',
      'Standards-compliant Swiss QR-bill generation at scale',
      'Autoscaling infrastructure tuned for payment workloads',
    ],
    stack: ['Kotlin', 'qrbill-generator', 'Terraform', 'GKE', 'ArgoCD', 'GCP + AWS'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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

export default function CaseStudiesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://thar.digital',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Case Studies',
        item: 'https://thar.digital/case-studies',
      },
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Case Studies
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mt-4 mb-6">
            Technical teardowns of the fintech infrastructure we&apos;ve shipped.
          </h1>
          <p className="text-muted-foreground text-lg">
            Anonymized by contract — client, bank, and network names are withheld.
            The architecture, security work, and outcomes are real.
          </p>
        </motion.div>

        {/* Case Studies */}
        {caseStudies.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 mb-16"
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className="card group"
              >
                {/* Header - Case Study Card Overview */}
                <div className="mb-10">
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {study.industry}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
                    {study.title}
                  </h2>
                  {study.description && (
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                      {study.description}
                    </p>
                  )}
                  {study.glossary && (
                    <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4 italic">
                      {study.glossary}
                    </p>
                  )}
                </div>

                {/* The Challenge */}
                {study.challenge && (
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {study.challenge}
                    </p>
                  </div>
                )}

                {/* Our Solution */}
                {study.solution && (
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Our Solution</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {study.solution}
                    </p>
                  </div>
                )}

                {/* The Security Hurdle */}
                {study.securityHurdle && (
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">The Security Hurdle</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {study.securityHurdle}
                    </p>
                  </div>
                )}

                {/* Outcomes */}
                {study.outcomes && study.outcomes.length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">The Result</h3>
                    <ul className="space-y-3">
                      {study.outcomes.map((outcome, index) => (
                        <li
                          key={index}
                          className="text-muted-foreground flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="leading-relaxed">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                {study.stack && study.stack.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.stack.map((tech, index) => (
                        <span
                          key={index}
                          className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="card text-center mb-16">
            <p className="text-muted-foreground">Case studies coming soon...</p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" href="/contact">
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
    </>
  );
}
