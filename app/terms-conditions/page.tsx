'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Script from 'next/script';
import { SITE_CONFIG } from '@/lib/constants';

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

export default function TermsConditionsPage() {
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
        name: 'Terms and Conditions',
        item: 'https://thar.digital/terms-conditions',
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
      <div className="pt-32 pb-20 relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-bg.jpg"
          alt="Terms and conditions page background"
          fill
          className="object-cover opacity-30"
          aria-hidden="true"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container-custom relative z-10 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Terms and Conditions
          </span>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <p className="text-muted-foreground text-sm">
              Last Updated: February 1, 2024
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              For the purpose of these Terms and Conditions, the term "we", "us",
              "our" used anywhere on this page shall mean THAR DIGITAL SERVICES,
              whose registered/operational office is:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {SITE_CONFIG.address.line1},<br />
              {SITE_CONFIG.address.line2},<br />
              {SITE_CONFIG.address.line3},<br />
              {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} - {SITE_CONFIG.address.zip}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-border/30">
            <h2 className="text-2xl font-semibold text-foreground">
              Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-border/30">
            <h2 className="text-2xl font-semibold text-foreground">
              Use License
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Permission is granted to temporarily download one copy of the
              materials on Thar Digital Services' website for personal,
              non-commercial transitory viewing only.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-border/30">
            <h2 className="text-2xl font-semibold text-foreground">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms and Conditions, please
              contact us at{' '}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
