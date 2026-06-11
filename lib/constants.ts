/**
 * Site-wide constants and configuration
 */

export const SITE_CONFIG = {
  name: 'Thar Digital Services',
  tagline: 'Bank-grade fintech infrastructure for the European market',
  description: 'Thar Digital Services is a fintech infrastructure partner. We build white-label payment ecosystems and eBill integrations engineered to meet the security requirements of Swiss bank audits — on the EBICS, QR-bill, and ISO 20022 standards that run Switzerland\'s national payment rails.',
  url: 'https://thardigital.in',
  email: 'tech@thardigital.in',
  phone: '+91 90790 92676',
  address: {
    line1: 'H No. B-3-339',
    line2: 'Raj Mata Sudarshana Nagar',
    line3: 'Behind Nagnechi Ji Temple',
    city: 'Bikaner',
    state: 'Rajasthan',
    zip: '334001',
    country: 'India',
  },
  hours: 'Mon-Fri 9:00AM – 5:00PM',
  linkedin: 'https://www.linkedin.com/company/thar-digital-services/',
} as const;

export const SERVICES = [
  {
    id: 'white-label-banking',
    title: 'White-Label Banking & Billing',
    description: 'White-label payment ecosystems and digital billing platforms that fintechs and banks ship under their own brand.',
    icon: '🏦',
  },
  {
    id: 'payment-standards',
    title: 'Swiss Payment-Standard Integration',
    description: 'Native integration with EBICS v2.5/v3, the eBill network, Swiss QR-bill, and ISO 20022 (camt/pain) messaging.',
    icon: '🔗',
  },
  {
    id: 'secure-microservices',
    title: 'High-Security Microservices',
    description: 'Event-driven services in Java Spring Boot and Kotlin/Vert.x, built for high-concurrency payment volumes.',
    icon: '⚙️',
  },
  {
    id: 'compliance-architecture',
    title: 'Compliance-Ready Architecture',
    description: 'Architectures engineered to pass bank security audits — encryption, key management, and audit logging by design.',
    icon: '🛡️',
  },
  {
    id: 'cloud-native-devops',
    title: 'Cloud-Native DevOps',
    description: 'Kubernetes on GKE with ArgoCD GitOps and Terraform IaC across GCP and AWS, with Swiss/EU data residency.',
    icon: '☁️',
  },
  {
    id: 'dedicated-fintech-teams',
    title: 'Dedicated Fintech Teams',
    description: 'Long-term engineering teams led by an architect, integrated as an extension of your fintech.',
    icon: '👥',
  },
] as const;

export const ENGAGEMENT_MODELS = [
  {
    title: 'Dedicated Teams',
    description: 'Long-term partnerships with dedicated engineers integrated into your workflow.',
  },
  {
    title: 'Project-Based Delivery',
    description: 'Fixed-scope projects with clear deliverables and timelines.',
  },
  {
    title: 'Long-Term Partnerships',
    description: 'Ongoing collaboration with flexible engagement models.',
  },
] as const;

// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// Social links (add more as needed)
export const SOCIAL_LINKS = {
  twitter: 'https://x.com/thardigitalsvcs',
  linkedin: 'https://www.linkedin.com/company/thar-digital-services/',
  instagram: 'https://www.instagram.com/thar.digital/',
  youtube: 'https://www.youtube.com/@TharDigitalServices',
  github: 'https://github.com/Thar-Digital-Services',
} as const;
