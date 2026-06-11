'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from '@/components/ui/ParticleBackground';

export default function Hero() {
  return (
    <>
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Technology and engineering background"
            fill
            priority
            className="object-cover"
            aria-hidden="true"
            sizes="100vw"
          />
          {/* Reduced overlay for better image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30" />
        </div>

        {/* Animated glow accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
          <div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse"
            style={{ animationDelay: '1.5s' }}
          />
        </div>

        {/* Particle Animation */}
        <ParticleBackground
          particleCount={200}
          largeParticleCount={20}
          className="z-[5]"
          particleColor="primary"
          mouseInteraction={true}
          interactionRadius={200}
        />

        <div className="container-custom relative z-10 w-full py-12">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 md:mb-10"
            >
              <span className="text-sm text-muted-foreground font-medium">
                Swiss-standard fintech infrastructure
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 md:mb-10"
            >
              Bank-grade{' '}
              {/* <br className="hidden sm:block" /> */}
              <span className="text-gradient">fintech infrastructure</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed"
            >
              We build white-label payment ecosystems and eBill integrations that pass rigorous Swiss bank security audits — engineered on the EBICS, QR-bill, and ISO 20022 standards that run Switzerland&apos;s national payment rails.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16"
            >
              <Button variant="hero" size="xl" href="/case-studies">
                Read the case studies
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" href="/services">
                Our capabilities
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-10 md:gap-16 lg:gap-20 justify-center"
            >
              {[
                { value: '100%', label: 'Bank security-audit pass rate' },
                { value: 'EBICS v2.5 + v3', label: 'Payment standards integrated' },
                { value: 'Multi-cloud', label: 'GKE + AWS infrastructure' },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust indicators - positioned below the hero section */}
      <section className="relative pt-20">
        {/* Background Image - matching ServicesSection */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by forward-thinking companies
            </p>
            <div className="flex flex-wrap items-center gap-8 md:gap-12 justify-center">
              <a
                href="https://billte.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="h-16 px-8 flex items-center justify-center rounded-lg bg-card/50 border border-border hover:bg-card/70 transition-colors relative">
                  <Image
                    src="https://billte.ch/assets/billte-logo-BfM7_FDN.png"
                    alt="Billte - Digital Billing Solutions"
                    width={120}
                    height={40}
                    className="h-8 object-contain"
                  />
                </div>
                <span className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
                  Swiss Fintech • Digital Billing Solutions
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
