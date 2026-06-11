import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants';
import { FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import messagesData from '@/data/messages.json';

const messages = messagesData as { whatsapp: { default: string }; email: { subject: string; body: string } };

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Background with darker theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      </div>
      
      <div className="container-custom py-16 relative z-10">
        {/* Main Footer Content - Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Logo and Name */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logos/logo-dark.png"
                alt="Thar Digital Services"
                width={150}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <h3 className="text-foreground font-semibold text-lg mt-2">
              {SITE_CONFIG.name}
            </h3>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary text-sm font-medium uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary text-sm font-medium uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(messages.email.subject)}&body=${encodeURIComponent(messages.email.body)}`}
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/919079092676?text=${encodeURIComponent(messages.whatsapp.default)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <FaWhatsapp className="h-4 w-4 text-primary" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>

            {/* Follow Us */}
            <div>
              <h4 className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Follow us</h4>
              <div className="flex items-center space-x-4">
                <a
                  href={SOCIAL_LINKS.twitter || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.youtube || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.github || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-primary text-sm font-medium uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-notice"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 pb-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2026 Thar Digital Services. All rights reserved.
            </p>
            <p className="text-muted-foreground/70 text-xs">
              Fintech Infrastructure Partner · Global delivery, Swiss-market track record
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
