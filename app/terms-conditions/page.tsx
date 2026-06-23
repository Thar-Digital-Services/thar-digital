'use client';

import { motion } from 'framer-motion';
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
      <div className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-7 bg-primary" />
              Terms and Conditions
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mt-5 mb-6 tracking-[-0.02em]">
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              These terms govern your use of the website and services of Thar
              Digital Services, a fintech infrastructure partner building
              white-label payment ecosystems and eBill integrations to European
              banking standards.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                For the purpose of these Terms and Conditions, the term &quot;we&quot;, &quot;us&quot;,
                &quot;our&quot; used anywhere on this page shall mean THAR DIGITAL SERVICES,
                whose registered/operational office is:
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {SITE_CONFIG.address.line1},<br />
                {SITE_CONFIG.address.line2},<br />
                {SITE_CONFIG.address.line3},<br />
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} - {SITE_CONFIG.address.zip}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Use License
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily download one copy of the
                materials on Thar Digital Services&apos; website for personal,
                non-commercial transitory viewing only.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground">
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
