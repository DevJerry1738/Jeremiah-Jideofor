# DevJerry — Project Description

## Overview

**DevJerry** is a modern, full-stack professional portfolio and case study website for Jeremiah Jideofor, an independent software developer and cybersecurity professional. The site showcases secure web application development, business systems implementation, and digital product design for organizations.

**Website Tagline**: *Building Secure Digital Solutions*

---

## Purpose & Goals

- **Showcase Expertise**: Display professional work across web development, cybersecurity, and business applications
- **Case Studies**: Present detailed project portfolio including Atlas (NGO Management Platform), Stockwell (B2B Ordering System), and Meridian (Corporate Web Presence)
- **Professional Presence**: Establish credibility as an independent developer and cybersecurity professional
- **Lead Generation**: Provide contact and services information for potential clients and collaborations
- **SEO & Performance**: Deliver a fast, search-engine optimized site with modern web standards

---

## Tech Stack

### Frontend
- **Framework**: React with TypeScript
- **Routing**: TanStack Router v1 (full-stack routing)
- **SSR/Build**: TanStack Start (modern full-stack React framework)
- **Styling**: TailwindCSS v4 with Vite plugin
- **UI Components**: Radix UI (comprehensive headless component library)
- **Build Tool**: Vite (next-generation frontend tooling)
- **Package Manager**: Bun (fast JavaScript runtime)

### Backend
- **Server**: Nitro (via TanStack Start)
- **Runtime**: Node.js compatible
- **Server Framework**: TanStack Start built-in server capabilities
- **Deployment Target**: Cloudflare (via Nitro default)

### Build & Development
- **Language**: TypeScript (strict mode)
- **Code Quality**: ESLint, Prettier
- **Development**: Hot Module Replacement (HMR) via Vite

---

## Project Structure

```
src/
├── components/              # Reusable React components
│   ├── Marquee.tsx         # Marquee/scrolling text animation
│   ├── Reveal.tsx          # Reveal animation component
│   ├── SiteHeader.tsx      # Navigation header
│   ├── SiteFooter.tsx      # Footer
│   └── ui/                 # Radix UI component library (shadcn-style)
│       ├── button.tsx, card.tsx, dialog.tsx, form.tsx, etc.
│       └── ~40+ UI components
├── routes/                 # TanStack Router pages
│   ├── __root.tsx          # Root layout with header/footer
│   ├── index.tsx           # Home page (/) - featured projects
│   ├── about.tsx           # About page
│   ├── contact.tsx         # Contact page
│   ├── services.tsx        # Services page
│   ├── work.tsx            # Full work/portfolio page
│   ├── sitemap[.]xml.ts    # XML sitemap for SEO
│   └── README.md           # Routes documentation
├── hooks/                  # Custom React hooks
│   └── use-mobile.tsx      # Mobile viewport detection
├── lib/                    # Utilities and helpers
│   ├── utils.ts            # Shared utility functions
│   ├── config.server.ts    # Server configuration
│   ├── error-page.ts       # Error page rendering
│   ├── error-capture.ts    # Error tracking/reporting
│   ├── lovable-error-reporting.ts  # Lovable.dev error integration
│   └── api/
│       └── example.functions.ts    # API functions
├── server.ts               # SSR error wrapper
├── start.ts                # Application entry point
├── router.tsx              # Router configuration
├── routeTree.gen.ts        # Auto-generated router tree (TanStack)
└── styles.css              # Global styles
```

---

## Key Features

### Pages & Content

1. **Home Page** (`/`)
   - Featured case studies carousel (Atlas, Stockwell, Meridian)
   - Project highlights with descriptions and tags
   - Call-to-action for services/contact
   - SEO metadata optimized

2. **About Page** (`/about`)
   - Developer background and expertise
   - Professional philosophy and approach

3. **Services Page** (`/services`)
   - Service offerings and specializations
   - Technology focus areas

4. **Work/Portfolio Page** (`/work`)
   - Comprehensive project portfolio
   - Detailed case studies and project information

5. **Contact Page** (`/contact`)
   - Contact form for inquiries
   - Communication channels

6. **Sitemap** (`/sitemap.xml`)
   - XML sitemap for search engine discovery

### Design Components

- **Reveal Animation**: Custom component for entrance animations
- **Marquee**: Scrolling/repeating text effects
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Header/Footer**: Persistent navigation and branding

---

## Featured Projects

### 1. **NUT** — Nigeria Union of Teachers Website Modernization
- **Industry**: Education / Non-Profit / Labour Union
- **Year**: 2024
- **Description**: Modernized digital presence for Africa's first teachers' union (established 1931), serving 500k+ teachers across Nigeria. Migrated from legacy stack to modern full-stack with Supabase Auth, comprehensive admin dashboard, live news ticker, event management, and member engagement tools. Built with React 19, TypeScript, Vite, TailwindCSS, and Supabase.
- **Live**: https://nutng.org/
- **Key Features**: Admin dashboard, content management, blog/news system, event management, member join flow, newsletter subscriptions, support tickets, real-time analytics

### 2. **YIRH** — Youth in Research Hub Website & Headless CMS
- **Industry**: Non-Profit / Academic Research / Public Health
- **Year**: 2024
- **Description**: Full-stack organizational website with built-in headless CMS enabling non-technical staff (admins/editors) to independently manage all site content without developer intervention. Features 8-tab admin dashboard, role-based access, Row-Level Security policies, Docker containerization, and animated UI with light/dark theme support.
- **Live**: https://youthinresearchhub.org/
- **Tech Stack**: React 19, TypeScript, Vite, Supabase, React Query (7 custom hooks), GSAP animations, Docker + Nginx
- **Key Features**: Publications manager, team member profiles, blog post editor (Markdown), contact submissions inbox, join application workflow, admin settings, role-based access control

### 3. **PhishGuard NG** — Phishing Simulation & Security Training Platform
- **Industry**: Cybersecurity / Information Security / Security Awareness Training
- **Year**: 2023
- **Description**: Interactive phishing simulation platform for security awareness training. Enables organizations to run safe, simulated phishing campaigns with individual click tracking, immediate educational intervention, and comprehensive performance analytics. Implemented as core research project for MSc in Cybersecurity at Nigerian Defence Academy.
- **Repository**: https://github.com/DevJerry1738/phishing-simulator
- **Tech Stack**: React.js, Node.js/Express, MongoDB, JWT authentication, bcrypt, Role-based access control
- **Key Features**: Campaign management, multi-scenario email templates, unique click tracking URLs, real-time analytics, just-in-time training videos, CSV report exports

---

## Development Commands

```bash
# Install dependencies
bun install

# Development server with HMR
npm run dev

# Production build
npm run build

# Development mode build
npm run build:dev

# Preview production build locally
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

---

## Configuration Files

- **`vite.config.ts`**: Vite build configuration with TanStack Start plugins
- **`tsconfig.json`**: TypeScript configuration (strict mode)
- **`tailwind.config.ts`**: TailwindCSS theme and plugin configuration
- **`eslint.config.js`**: ESLint rules and code standards
- **`.prettierrc`**: Code formatting preferences
- **`components.json`**: UI component library metadata (shadcn)
- **`bunfig.toml`**: Bun runtime configuration

---

## Performance & Best Practices

- **Server-Side Rendering (SSR)**: TanStack Start provides full SSR for faster page loads and better SEO
- **Code Splitting**: Vite automatically handles route-based code splitting
- **Responsive Images**: Optimized images for different viewport sizes
- **Meta Tags**: SEO metadata for all pages (Open Graph, canonical URLs)
- **Error Handling**: Integrated error capture and reporting via Lovable.dev
- **Type Safety**: Full TypeScript coverage for reliability

---

## Deployment

- **Target**: Cloudflare (via Nitro)
- **Build Output**: Production-ready bundles generated by Vite
- **Environment**: Node.js compatible runtime environment

---

## Dependencies Highlights

- **@tanstack/react-start**: Full-stack React framework with SSR
- **@tanstack/react-router**: Type-safe routing
- **@tanstack/react-query**: Data fetching and caching
- **@radix-ui/***: 30+ unstyled, accessible UI components
- **tailwindcss**: Utility-first CSS framework
- **react-hook-form**: Performant forms with React Hooks
- **zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Form validation resolvers
- **framer-motion**: Animation library (potential)
- **sonner**: Toast notifications

---

## Future Enhancements

Potential areas for expansion:
- Blog/articles section for technical content
- Project filtering and search functionality
- Dark/light theme toggle
- Testimonials or client reviews
- Team profiles (if expanding to multi-person agency)
- Advanced analytics integration
- Email newsletter signup

---

## Developer Notes

- **Framework Choice**: TanStack Start provides the best balance of SSR capabilities, type safety, and developer experience for a modern portfolio site
- **Component Library**: Radix UI + TailwindCSS offers unmatched flexibility and accessibility
- **Package Manager**: Bun provides superior performance for development workflows
- **SEO Optimization**: Built-in meta tags, canonical URLs, and XML sitemap support

---

## Author

**Jeremiah Jideofor** — Independent Software Developer & Cybersecurity Professional

*Specializations: Secure web applications, business systems, digital product design, NGO technology solutions, B2B platforms*

---

*Last Updated: 2026*
