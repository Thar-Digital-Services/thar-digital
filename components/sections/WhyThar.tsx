'use client';

import { motion } from 'framer-motion';
import { CircleCheck } from 'lucide-react';

const reasons = [
  {
    title: 'Engineering Maturity',
    description:
      'Our engineers bring experience from enterprise environments. Clean code, proper testing, and scalable architecture are non-negotiable.',
  },
  {
    title: 'Startup + Enterprise Experience',
    description:
      'We understand startup speed and enterprise standards. Get the agility you need without sacrificing quality.',
  },
  {
    title: 'Ownership Mindset',
    description:
      'Our team members think like founders. They care about outcomes, not just tickets closed.',
  },
  {
    title: 'Security & Scalability Focus',
    description:
      'Built-in security practices and architecture designed to scale from day one. No technical debt surprises.',
  },
  {
    title: 'Clear Communication',
    description:
      'Daily standups, weekly reviews, and transparent reporting. Always know where your project stands.',
  },
  {
    title: 'Long-term Partnership',
    description:
      'We build relationships, not just software. Most clients work with us for years, not months.',
  },
];

export default function WhyThar() {
  return (
    <section className="section-padding bg-muted relative">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Why Thar Digital
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Enterprise quality,{' '}
              <span className="text-gradient">startup speed</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We are not a typical outsourcing firm. We are your technology
              partner, bringing the best of both worlds: enterprise-grade
              engineering standards with the agility startups need.
            </p>

            <div className="grid gap-4">
              {reasons.slice(0, 3).map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <CircleCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - More Reasons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-4"
          >
            {reasons.slice(3).map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index + 3) * 0.1 }}
                className="card"
              >
                <div className="flex gap-4">
                  <CircleCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
