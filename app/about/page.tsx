import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { FaLinkedin } from 'react-icons/fa';
import teamMembersData from '@/data/team-members.json';
import { TeamMember } from '@/types';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'A specialized fintech engineering team, led by an architect — building bank-grade payment infrastructure for the European market with global delivery and a Swiss track record.',
  alternates: {
    canonical: 'https://thar.digital/about',
  },
};

const teamMembers = teamMembersData as TeamMember[];

const principles = [
  {
    title: 'Architect-led delivery',
    description:
      'An architect owns the system design, security model, and compliance mapping. Engineers build against that blueprint — so quality and risk are controlled from the top down.',
  },
  {
    title: 'Swiss-market track record',
    description:
      'Our work runs in production in one of the world’s most regulated banking markets — and has passed the security audits that come with it.',
  },
  {
    title: 'Discreet by default',
    description:
      'We work under strict NDAs and white-label terms, and never publish client names. The work speaks for itself; the names stay private.',
  },
];

export default function AboutPage() {
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
        name: 'About',
        item: 'https://thar.digital/about',
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
          {/* Intro */}
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-7 bg-primary" />
              About
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mt-5 mb-6 tracking-[-0.02em]">
              A specialized fintech engineering team.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Thar Digital Services is a fintech infrastructure partner — a focused
              engineering team led by an architect with deep experience designing
              high-concurrency, bank-grade payment systems. We&apos;ve shipped
              white-label banking platforms and eBill infrastructure live in the
              Swiss market, and we deliver globally to European standards.
            </p>
          </div>

          {/* Principles */}
          <div className="swiss-grid grid-cols-1 md:grid-cols-3 mb-20">
            {principles.map((p) => (
              <div key={p.title} className="p-7 md:p-8">
                <h2 className="font-display text-lg font-semibold mb-3">
                  {p.title}
                </h2>
                <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          {/* Leadership */}
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-7 bg-primary" />
              Leadership
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-semibold mt-5 tracking-[-0.02em]">
              The people behind the architecture.
            </h2>
          </div>

          {teamMembers.length > 0 ? (
            <div className="swiss-grid grid-cols-1 md:grid-cols-2">
              {teamMembers.map((member) => (
                <div key={member.id} className="p-8">
                  <div className="flex items-center gap-4 mb-5">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="rounded-full w-16 h-16 object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center text-lg font-bold text-background shrink-0">
                        {member.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .toUpperCase()}
                      </div>
                    )}
                    <div>
                      <h3 className="font-display text-xl font-semibold">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedin className="h-5 w-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="card">
              <p className="text-muted-foreground">Team profiles coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
