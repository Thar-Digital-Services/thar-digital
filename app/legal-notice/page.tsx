'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import { SITE_CONFIG } from '@/lib/constants';
import { Phone, Mail, Globe } from 'lucide-react';

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

export default function LegalNoticePage() {
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
        name: 'Legal Notice',
        item: 'https://thar.digital/legal-notice',
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
              Legal Notice
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mt-5 mb-6 tracking-[-0.02em]">
              Legal Notice
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Thar Digital Services is a fintech infrastructure partner building
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
            <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Headquarter
              </h2>
              <div className="space-y-2">
                <p className="text-foreground font-semibold">Thar Digital Services</p>
                <p className="text-muted-foreground">
                  {SITE_CONFIG.address.line1}
                  <br />
                  {SITE_CONFIG.address.line2}
                  <br />
                  {SITE_CONFIG.address.line3}
                  <br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} - {SITE_CONFIG.address.zip}
                  <br />
                  {SITE_CONFIG.address.country}
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Contact Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <a
                    href={SITE_CONFIG.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {SITE_CONFIG.url}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Company Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Registered in India
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-6 border-t border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                GST Registration Details
              </h2>

              <div className="space-y-6">
                {/* GST Registration Information */}
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <span className="text-sm text-muted-foreground">GSTIN</span>
                      <p className="text-foreground font-medium">08ACMPT6519K1ZV</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Legal Name</span>
                      <p className="text-foreground font-medium">Sarandha Tanwar</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Trade Name</span>
                      <p className="text-foreground font-medium">Thar Digital Services</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Constitution of Business</span>
                      <p className="text-foreground font-medium">Proprietorship</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Type of Registration</span>
                      <p className="text-foreground font-medium">Regular</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">GST Validity From</span>
                      <p className="text-foreground font-medium">07/11/2023</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">GST Validity To</span>
                      <p className="text-foreground font-medium">Not Applicable</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Date of GST Approval / Issue</span>
                      <p className="text-foreground font-medium">20/11/2023</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Governing Act</span>
                      <p className="text-foreground font-medium">Goods and Services Tax Act, 2017</p>
                    </div>
                  </div>
                </div>

                {/* Principal Place of Business */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <h3 className="font-display text-lg font-semibold text-foreground">Principal Place of Business</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <span className="text-sm text-muted-foreground">Address</span>
                      <p className="text-foreground font-medium">House No. B-III-339, Raj Mata Sudarshana Nagar</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Landmark</span>
                      <p className="text-foreground font-medium">Behind Nagnechi Ji Temple</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">City</span>
                      <p className="text-foreground font-medium">Bikaner</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">District</span>
                      <p className="text-foreground font-medium">Bikaner</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">State</span>
                      <p className="text-foreground font-medium">Rajasthan</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">PIN Code</span>
                      <p className="text-foreground font-medium">334001</p>
                    </div>
                  </div>
                </div>

                {/* Proprietor Details */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <h3 className="font-display text-lg font-semibold text-foreground">Proprietor Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <span className="text-sm text-muted-foreground">Name</span>
                      <p className="text-foreground font-medium">Sarandha Tanwar</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Designation / Status</span>
                      <p className="text-foreground font-medium">Owner</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Resident State</span>
                      <p className="text-foreground font-medium">Rajasthan</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Associated Trade Name</span>
                      <p className="text-foreground font-medium">Thar Digital Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
