'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import { SITE_CONFIG } from '@/lib/constants';
import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import messagesData from '@/data/messages.json';

const messages = messagesData as { whatsapp: { default: string }; email: { subject: string; body: string } };

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

export default function ContactPage() {
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
        name: 'Contact',
        item: 'https://thar.digital/contact',
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
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-7 bg-primary" />
            Contact
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-5 mb-5 tracking-[-0.02em]">
            Planning a regulated fintech deployment?
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you&apos;re integrating national payment rails or preparing for
            a bank security audit, let&apos;s discuss your architecture.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="card">
            <h2 className="text-xl font-semibold mb-6 text-foreground">Send Us a Message</h2>
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-6 text-foreground">Get in Touch</h2>
              <div className="card space-y-6">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-primary mb-3">
                    Email
                  </h3>
                  <a
                    href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(messages.email.subject)}&body=${encodeURIComponent(messages.email.body)}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <span>{SITE_CONFIG.email}</span>
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-primary mb-3">
                    Phone
                  </h3>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <span>{SITE_CONFIG.phone}</span>
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-primary mb-3">
                    WhatsApp
                  </h3>
                  <a
                    href={`https://wa.me/919079092676?text=${encodeURIComponent(messages.whatsapp.default)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FaWhatsapp className="h-5 w-5 text-primary" />
                    <span>Send us a message on WhatsApp</span>
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-primary mb-3">
                    Delivery
                  </h3>
                  <p className="text-muted-foreground">
                    Remote-first · Global delivery, dedicated CET / European overlap.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-primary mb-3">
                    Business Hours
                  </h3>
                  <p className="text-muted-foreground">{SITE_CONFIG.hours}</p>
                </div>
              </div>
            </div>

            {/* Calendar Booking Placeholder */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Talk to an Architect</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Schedule a 30-minute architecture review to discuss your compliance
                requirements, infrastructure needs, and deployment timeline.
              </p>
              <p className="text-muted-foreground/70 text-xs mb-4">
                Coming soon
              </p>
              <span
                className="inline-block px-6 py-3 bg-foreground text-background rounded-sm font-semibold text-sm opacity-50 cursor-not-allowed pointer-events-none"
              >
                Book a review
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
