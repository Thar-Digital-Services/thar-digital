'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Landmark,
  Network,
  Server,
  ShieldCheck,
  Cloud,
  Users,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Landmark,
    title: 'White-Label Banking & Billing',
    description:
      'White-label payment ecosystems and digital billing platforms that fintechs and banks ship under their own brand.',
  },
  {
    icon: Network,
    title: 'Swiss Payment-Standard Integration',
    description:
      'Native integration with EBICS v2.5/v3, the eBill network, Swiss QR-bill, and ISO 20022 (camt/pain) messaging.',
  },
  {
    icon: Server,
    title: 'High-Security Microservices',
    description:
      'Event-driven services in Java Spring Boot and Kotlin/Vert.x, built for high-concurrency payment volumes.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance-Ready Architecture',
    description:
      'Architectures engineered to pass bank security audits — encryption, key management, and audit logging by design.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native DevOps',
    description:
      'Kubernetes on GKE with ArgoCD GitOps and Terraform IaC across GCP and AWS, with Swiss/EU data residency.',
  },
  {
    icon: Users,
    title: 'Dedicated Fintech Teams',
    description:
      'Long-term engineering teams led by an architect, integrated as an extension of your fintech.',
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

export default function ServicesSection() {
  return (
    <section className="section-padding relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-bg.jpg"
          alt="Technology services background"
          fill
          className="object-cover opacity-30"
          aria-hidden="true"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

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
            What We Build
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Fintech infrastructure, end to end
          </h2>
          <p className="text-muted-foreground text-lg">
            From national payment-rail integration to bank-grade security and
            cloud-native delivery — we cover every layer of a regulated fintech platform.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
