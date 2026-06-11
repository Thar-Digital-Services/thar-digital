'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, Handshake } from 'lucide-react';

const models = [
  {
    icon: Users,
    title: 'Dedicated Teams',
    description:
      'Full-time engineering teams that work exclusively on your product. Complete integration with your workflows, tools, and culture.',
    features: [
      'Architect-Led Engineering',
      'Your timezone overlap',
      'Direct communication',
      'Long-term stability',
    ],
  },
  {
    icon: Briefcase,
    title: 'Project-Based Delivery',
    description:
      'Fixed-scope projects delivered with predictable timelines and budgets. Perfect for MVPs, features, or technical migrations.',
    features: [
      'Clear milestones',
      'Fixed pricing available',
      'End-to-end ownership',
      'Knowledge transfer included',
    ],
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description:
      'Strategic technology partnership for ongoing development, maintenance, and scaling. We grow with your business.',
    features: [
      'Flexible team sizing',
      'Priority support',
      'Technology advisory',
      'Continuous improvement',
    ],
  },
];

export default function EngagementModels() {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Engagement Models
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Flexible partnerships,{' '}
            <span className="text-gradient">lasting results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the engagement model that fits your needs. All models come
            with our commitment to quality and transparent communication.
          </p>
        </motion.div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="h-full p-8 rounded-sm bg-card border border-border hover:border-foreground/30 transition-colors duration-200">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {model.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {model.description}
                  </p>
                  <ul className="space-y-3">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
