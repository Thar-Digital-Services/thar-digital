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

export default function PrivacyPolicyPage() {
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
        name: 'Privacy Policy',
        item: 'https://thar.digital/privacy-policy',
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
          alt="Privacy policy page background"
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
            Privacy Policy
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

          <motion.div variants={itemVariants}>
            <p className="text-muted-foreground leading-relaxed">
              At Thar Digital Services, we are committed to protecting the privacy
              and security of your personal information. This Privacy Policy
              outlines how we collect, use, disclose, and safeguard your
              information when you use our website or services.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-border/30">
            <h2 className="text-2xl font-semibold text-foreground">
              Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect personal information that you provide to us,
              including but not limited to your name, email address, phone
              number, company name, and any other information you choose to
              provide when contacting us or using our services.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-border/30">
            <h2 className="text-2xl font-semibold text-foreground">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to provide, maintain, and
              improve our services, respond to your inquiries, and communicate
              with you about our services.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-border/30">
            <h2 className="text-2xl font-semibold text-foreground">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us
              at{' '}
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
