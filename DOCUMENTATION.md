# Lumora — Project Documentation

**AI that turns every customer call into product decisions.**

A premium, realistic 10-page SaaS marketing website for Lumora — a fictional
Y Combinator (Summer 2026) startup. Built with Next.js (App Router),
TypeScript and Tailwind CSS.

---

## Table of contents

1. [Overview](#overview)
2. [Tech stack](#tech-stack)
3. [Getting started](#getting-started)
4. [Project structure](#project-structure)
5. [Pages](#pages)
6. [Components](#components)
7. [Data layer](#data-layer)
8. [Design system](#design-system)
9. [Dark mode](#dark-mode)
10. [Accessibility](#accessibility)
11. [Known limitations](#known-limitations)

---

## Overview

Lumora is a fictional startup that turns customer calls into product
decisions. This repository contains its marketing website: a polished,
multi-page site that demonstrates the product, pricing, documentation,
integrations, customer stories, company story and a demo-booking form.

The site is fully static (no backend) and is designed to be deployed on
Vercel with zero configuration.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Fonts | `next/font` (Space Grotesk + Inter) |
| Icons | Inline SVG (no external assets) |
| Deployment | Vercel |

## Getting started

### Prerequisites

- Node.js 18.17 or later
- npm

### Install and run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Production build

```bash
npm run build
npm run start
```

## Project structure

```
.
├── app/                  # App Router routes and layout
│   ├── about/            # Company story
│   ├── contact/          # Book-a-demo form
│   ├── customers/        # Customer stories
│   ├── docs/             # Documentation home + api + quickstart
│   ├── integrations/     # Integrations grid
│   ├── pricing/          # Pricing plans
│   ├── product/          # Product & features
│   ├── globals.css       # Tailwind + design tokens
│   ├── layout.tsx        # Root layout (fonts, theme)
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
├── lib/
│   └── data.ts           # Site content (plans, testimonials, etc.)
├── plan/
│   └── plan.md           # Original build plan
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── vercel.json
└── package.json
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, customer logos, features preview, how it works, product mockup, testimonials, pricing teaser, final CTA |
| `/product` | Product & features in detail |
| `/pricing` | 4 plans, monthly/yearly toggle, full comparison table, FAQ |
| `/docs` | Documentation home — sidebar, search box, topic cards |
| `/docs/quickstart` | Getting started guide with steps, copyable code blocks, notes |
| `/docs/api` | API reference — endpoints, request/response examples, parameters table |
| `/integrations` | Integrations grid with category filter |
| `/customers` | Customer stories / case studies with results |
| `/about` | Company story, mission, founders, YC badge, values, hiring |
| `/contact` | Book-a-demo form with validation |

## Components

- `Header` — sticky nav with active-page state, mobile menu, theme toggle
- `Footer` — shared footer with link columns and compliance strip
- `Button` — primary / accent / ghost variants, three sizes
- `Card`, `Badge` — base surface and label primitives
- `Section` — consistent section wrapper with eyebrow + title + subtitle
- `Reveal` — IntersectionObserver scroll-reveal animation
- `CodeBlock` — syntax-styled code block with a working copy button
- `PricingCard` — plan card with monthly/yearly pricing
- `Testimonial`, `FAQ` — reusable content blocks
- `DocsLayout` — shared docs sidebar with search and active state
- `icons.tsx` — hand-drawn inline SVG icon set (no external assets)
- `Logo` — inline SVG logo + wordmark

## Data layer

All site content lives in `lib/data.ts` as typed constants:

- `integrations` — 12 integrations grouped by category (`calls`, `product`, `comms`)
- `customerLogos` — 10 fictional customer names
- `testimonials` — 3 customer quotes with name and role
- `founders` — 2 co-founders with bios
- `plans` — 4 pricing plans (Free, Pro, Team, Enterprise)

## Design system

- **Colors** — a violet primary (`#6E5CFF`) paired with a lime accent
  (`#C8F169`) for a confident, modern YC feel. Near-black ink and soft
  off-white surfaces keep contrast high and the palette calm.
- **Type** — Space Grotesk for display headings (geometric, techy, bold) and
  Inter for body text (highly readable at small sizes). Both loaded via
  `next/font` with zero layout shift.
- **Style** — hairline borders, 16px card radii, soft shadows and generous
  whitespace. One design system used identically across every page.
- **Motion** — subtle scroll-reveal and a slow logo marquee; everything
  respects `prefers-reduced-motion`.
- **No stock assets** — every icon and illustration is inline SVG or CSS.

## Dark mode

- Class-based Tailwind strategy, persisted to `localStorage`.
- Toggle in the header.
- Respects `prefers-color-scheme` on first visit.

## Accessibility

- Semantic landmarks
- Keyboard-focusable controls
- `aria-label`s and `aria-current` on navigation
- Readable contrast in both themes

## Known limitations

- The docs search box filters visually but does not yet run a full-text index
  (it is a UI affordance for this design test).
- The contact form validates and shows a success state client-side; it does
  not POST to a real backend.

---

Created by Classgrid AI.