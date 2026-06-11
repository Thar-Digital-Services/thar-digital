import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { FaLinkedin } from 'react-icons/fa';
import teamMembersData from '@/data/team-members.json';
import { TeamMember } from '@/types';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Thar Digital Services: our mission, leadership philosophy, engineering culture, and meet our team.',
  alternates: {
    canonical: 'https://thar.digital/about',
  },
};

const teamMembers = teamMembersData as TeamMember[];

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
      <div className="pt-20 pb-20">
      {/* About Us Section with Background */}
      <section className="relative py-8 mb-0 bg-gradient-to-br from-background via-background to-primary/5">
        {/* Background Pattern/Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          {/* About Us Heading */}
          <div className="text-center max-w-5xl mx-auto mb-6">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Thar Digital Services
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A technology partner helping startups and scale-ups build and operate enterprise-grade software products.
              <br className="hidden sm:block" />
              The company provides reliable engineering teams and works closely with clients to support product development, scalability, and long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/30 my-0"></div>

      {/* Our Team Section with Different Background */}
      <section className="relative pt-12 pb-20">
        {/* Darker Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/cta-bg.jpg"
            alt="Team section background"
            fill
            className="object-cover opacity-40"
            aria-hidden="true"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background/95" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Our Team
            </span>
            
          </div>

          {/* Team Members Grid */}
          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="card text-center group">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedin className="h-5 w-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  )}
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Core Expertise</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-card border border-border rounded text-xs text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="card text-center">
              <p className="text-muted-foreground">Team profiles coming soon...</p>
            </div>
          )}
        </div>
      </section>
    </div>
    </>
  );
}
