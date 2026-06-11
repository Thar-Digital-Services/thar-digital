'use client';

import { motion } from 'framer-motion';
import {
  Landmark,
  ShieldCheck,
  Network,
  ArrowLeftRight,
  KeyRound,
  FileCode2,
  QrCode,
  Send,
  Users,
} from 'lucide-react';

const partnerBlocks = [
  { icon: Send, label: 'EBICS Client' },
  { icon: KeyRound, label: 'Signing / KMS' },
  { icon: FileCode2, label: 'ISO 20022' },
  { icon: QrCode, label: 'QR-bill' },
];

function Node({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: typeof Landmark;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex-1 min-w-[200px] rounded-2xl bg-card border border-border p-6 text-center">
      <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex items-center justify-center px-2 py-2 lg:py-0">
      <ArrowLeftRight className="w-6 h-6 text-primary/60 rotate-90 lg:rotate-0" />
    </div>
  );
}

export default function ArchitectureDiagram() {
  return (
    <section className="section-padding relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Reference Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            The secure partner layer
          </h2>
          <p className="text-muted-foreground text-lg">
            A representative, anonymized view of how we bridge a core banking
            system to the national eBill network — the seam where security audits
            are won or lost.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-card/40 backdrop-blur-sm p-6 md:p-10"
        >
          {/* Main flow */}
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-2">
            <Node
              icon={Landmark}
              title="Core Banking System"
              subtitle="Financial institution"
            />
            <Connector />

            {/* Partner layer (highlighted) */}
            <div className="flex-[1.4] min-w-[240px] rounded-2xl bg-primary/5 border-2 border-primary/40 p-6">
              <div className="text-center mb-5">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">
                  Secure Partner Layer
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  OAuth2 / JWT · mTLS · audit logging
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {partnerBlocks.map((block) => {
                  const Icon = block.icon;
                  return (
                    <div
                      key={block.label}
                      className="flex items-center gap-2 rounded-lg bg-card border border-border px-3 py-2"
                    >
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-xs text-foreground">
                        {block.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <Connector />
            <Node
              icon={Network}
              title="National eBill Network"
              subtitle="90+ partner banks"
            />
          </div>

          {/* Portals fan-off */}
          <div className="flex justify-center mt-2">
            <ArrowLeftRight className="w-6 h-6 text-primary/60 rotate-90" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-2">
            <div className="flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-3">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Biller Portal</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-3">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Payer Portal</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
