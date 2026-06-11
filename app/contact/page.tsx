'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
      <div className="pt-32 pb-20 relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-bg.jpg"
          alt="Contact page background"
          fill
          className="object-cover opacity-30"
          aria-hidden="true"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Contact Us
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Let's discuss your project
          </h1>
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
                    Address
                  </h3>
                  <p className="text-muted-foreground">
                    {SITE_CONFIG.address.line1}
                    <br />
                    {SITE_CONFIG.address.line2}
                    <br />
                    {SITE_CONFIG.address.line3}
                    <br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} -{' '}
                    {SITE_CONFIG.address.zip}
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
              <h3 className="text-lg font-semibold mb-3 text-foreground">Book a Discovery Call</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Schedule a free 30-minute call to discuss your project needs and explore how we can help.
              </p>
              <p className="text-muted-foreground/70 text-xs mb-4">
                Coming soon
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold text-sm shadow-glow hover:shadow-lg transition-all opacity-50 cursor-not-allowed pointer-events-none"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
