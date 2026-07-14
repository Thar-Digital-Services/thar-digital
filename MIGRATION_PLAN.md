# Thar Digital Services - Next.js Migration Plan

## 📋 Overview
Migration from static WordPress export to modern Next.js 14 application with SEO optimization and sleek tech-focused design.

---

## 🎯 Goals
- ✅ Modern, maintainable React/Next.js codebase
- ✅ Superior SEO performance for US/EU markets
- ✅ Sleek, modern tech vibe design
- ✅ PRD-aligned content and structure
- ✅ High performance (Core Web Vitals optimized)
- ✅ Reuse existing assets (logos, contact info)

---

## 🛠 Tech Stack

### Core
- **Next.js 14** (App Router) - React framework with SSR/SSG
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### SEO & Performance
- **next-seo** - SEO metadata management
- **next-sitemap** - Automatic sitemap generation
- **next/image** - Optimized images
- **@next/font** - Font optimization

### Integrations
- **Cal.com** or **Calendly** - Calendar booking
- **React Icons** - Icon library
- **Framer Motion** - Subtle animations

### Deployment
- **Vercel** - Hosting (seamless Next.js integration)
- **GitHub Actions** - CI/CD (optional)

---

## 📁 Project Structure

```
thar-digital-services/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── about/                    # About Us page
│   ├── services/                 # Services page
│   ├── how-we-work/             # How We Work page
│   ├── industries/              # Industries/Use Cases
│   ├── case-studies/           # Case Studies
│   ├── team/                    # Team page
│   ├── contact/                 # Contact page
│   ├── privacy-policy/         # Privacy Policy
│   └── terms-conditions/       # Terms & Conditions
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── ...
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── TrustSignals.tsx
│   │   ├── WhyThar.tsx
│   │   └── ...
│   └── forms/
│       └── ContactForm.tsx
├── lib/
│   ├── constants.ts             # Site constants (contact info, etc.)
│   ├── seo.ts                   # SEO configuration
│   └── utils.ts                 # Utility functions
├── public/
│   ├── images/
│   │   ├── logos/              # Company logos
│   │   └── ...                 # Other images
│   └── favicon.ico
├── styles/
│   └── globals.css              # Global styles + Tailwind
├── types/
│   └── index.ts                # TypeScript types
└── content/                     # Markdown content (optional)
    ├── services/
    ├── case-studies/
    └── team/
```

---

## 🎨 Design System

### Color Palette (PRD-aligned)
```css
Primary:
- Deep Navy: #0A1A2E (trust & enterprise)
- Slate: #1E293B (backgrounds)
- Charcoal: #0F172A (dark sections)

Accents:
- Muted Red: #DC2626 (sparingly, from logo)
- Cool Cyan: #06B6D4 (optional secondary)

Neutrals:
- White: #FFFFFF
- Light Gray: #F8FAFC
- Medium Gray: #64748B
- Dark Gray: #334155
```

### Typography
- **Primary Font**: Inter (modern enterprise sans-serif)
- **Headings**: Bold, generous spacing
- **Body**: Regular weight, optimal line height

### Design Principles
- ✅ Minimal, clean layouts
- ✅ Generous white space
- ✅ Subtle animations (not flashy)
- ✅ Strong typography hierarchy
- ✅ Modern tech aesthetic
- ✅ Dark mode support (optional)

---

## 📄 Page Implementation Plan

### 1. Home Page (`/`)
**Sections:**
- [x] Hero with clear value proposition
- [x] Trust signals (years, tech stack logos, client logos)
- [x] What We Do (services overview)
- [x] Why Thar Digital Services
- [x] Engagement Models
- [x] Strong CTA ("Book a Free Discovery Call")

### 2. Services Page (`/services`)
**Services to include:**
- Dedicated Engineering Teams
- Backend & API Development
- Cloud & DevOps (AWS/GCP/Azure)
- Frontend (Web & Mobile)
- System Architecture & Scalability
- Data Engineering & Integrations
- Security & Compliance Readiness

### 3. How We Work (`/how-we-work`)
**Sections:**
- Discovery & Alignment
- Team Formation
- Delivery & Communication
- Quality Assurance
- Scaling & Long-Term Support

### 4. Industries (`/industries`)
**Use Cases:**
- FinTech
- SaaS Platforms
- B2B Marketplaces
- Enterprise Internal Tools
- Data-heavy Applications

### 5. Case Studies (`/case-studies`)
- Client background
- Problem
- Solution
- Tech stack
- Measurable outcomes
- (case study + placeholders)

### 6. Team Page (`/team`)
- Engineering culture intro
- Team grid with:
  - Name
  - Role
  - Core expertise
  - Short bio

### 7. About Us (`/about`)
- Company mission
- Leadership philosophy
- Engineering culture
- Hiring standards
- Quality bar

### 8. Contact (`/contact`)
- Short contact form
- Calendar booking integration
- Contact information
- Clear next steps

---

## 🔧 Implementation Steps

### Phase 1: Setup & Foundation (Days 1-2)
1. ✅ Initialize Next.js 14 project
2. ✅ Configure TypeScript
3. ✅ Set up Tailwind CSS
4. ✅ Create project structure
5. ✅ Extract and organize assets
6. ✅ Set up design system (colors, typography)

### Phase 2: Core Components (Days 3-4)
1. ✅ Build Header component
2. ✅ Build Footer component
3. ✅ Create Navigation
4. ✅ Build reusable UI components (Button, Card, Section)
5. ✅ Set up layout structure

### Phase 3: Home Page (Days 5-7)
1. ✅ Hero section
2. ✅ Trust signals section
3. ✅ Services overview
4. ✅ Why Thar section
5. ✅ Engagement models
6. ✅ CTA sections

### Phase 4: Content Pages (Days 8-12)
1. ✅ Services page (detailed)
2. ✅ How We Work
3. ✅ Industries/Use Cases
4. ✅ Case Studies
5. ✅ Team page
6. ✅ About Us (rewritten content)
7. ✅ Contact page with form

### Phase 5: SEO & Optimization (Days 13-14)
1. ✅ SEO metadata for all pages
2. ✅ Sitemap generation
3. ✅ Structured data (JSON-LD)
4. ✅ Performance optimization
5. ✅ Image optimization
6. ✅ Accessibility improvements

### Phase 6: Integrations & Polish (Days 15-16)
1. ✅ Calendar booking integration
2. ✅ Contact form backend/API
3. ✅ Final design polish
4. ✅ Cross-browser testing
5. ✅ Mobile responsiveness check

### Phase 7: Deployment (Day 17)
1. ✅ Vercel deployment setup
2. ✅ Domain configuration
3. ✅ Analytics setup (optional)
4. ✅ Final testing
5. ✅ Go live!

---

## 📦 Assets to Extract

### Logos
- ✅ `Thar-Logo-v1-white-e1690516168426.png` (header logo)
- ✅ `Thar-Logo-v1-e1690516198586-edited-1.png` (footer/light mode)
- ✅ `Thar-Logo-v1-1536x1536.png` (favicon)

### Contact Information
- ✅ Email: tech@thardigital.in
- ✅ Phone: +91 75684 48891
- ✅ Address: B-3, 339, Rajmata Sudarshana Nagar, Bikaner, Rajasthan - 334001
- ✅ Hours: Mon-Fri 9:00AM - 5:00PM

### Images
- Hero images (if needed)
- Service icons/images
- Team photos (when available)

---

## ❓ Questions to Clarify

1. **LinkedIn URL**: What's the company LinkedIn profile URL?
2. **Calendar Booking**: Prefer Cal.com or Calendly? Or custom solution?
3. **Contact Form**: Need backend API or use service like Formspree/Netlify Forms?
4. **Analytics**: Google Analytics? Plausible? Other?
5. **Domain**: Will continue using thardigital.in?
6. **Team Members**: Have team member info ready, or use placeholders?
7. **Case Studies**: Have case study content ready?
8. **Tech Stack Logos**: Which specific technologies to showcase? (AWS, React, Node.js, etc.)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ ✅ (already set)
- npm or yarn
- Git

### Commands
```bash
# Create Next.js project
npx create-next-app@latest thar-digital-nextjs --typescript --tailwind --app

# Install additional dependencies
npm install react-hook-form zod @hookform/resolvers
npm install next-seo react-icons framer-motion

# Development
npm run dev

# Build
npm run build

# Production
npm start
```

---

## 📊 Success Metrics

- ✅ Lighthouse score: 90+ (Performance, SEO, Accessibility)
- ✅ Core Web Vitals: All green
- ✅ SEO: Proper metadata, sitemap, structured data
- ✅ Mobile responsive: Perfect on all devices
- ✅ PRD alignment: All requirements met
- ✅ Modern design: Sleek tech vibe achieved

---

## 📝 Notes

- All content will be rewritten to align with PRD (engineering-focused, no buzzwords)
- Design will be modern, minimal, tech-forward
- Code will be maintainable, component-based, well-documented
- SEO optimized for US/EU startup/scale-up audience

---

**Status**: 🟢 Ready to begin implementation
