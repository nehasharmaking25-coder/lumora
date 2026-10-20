# Lumora — SaaS Marketing Website Build Plan

## Goal
Build a premium, realistic 10-page SaaS marketing site for **Lumora** (fictional YC S26 startup) in Next.js (App Router) + TypeScript + Tailwind CSS.

## Stack
- Next.js 14 (App Router), TypeScript, Tailwind CSS 3.4
- `next/font` (Inter + Space Grotesk), all icons/illustrations as inline SVG/CSS
- Light + dark mode (class strategy, persisted in localStorage)

## Design system
- **Primary:** violet `#6E5CFF` · **Accent:** lime `#C8F169`
- **Neutrals:** near-black ink / soft off-white surfaces, 1px hairline borders
- **Type:** Space Grotesk (display) + Inter (body), tight tracking on headings
- **Components:** Header, Footer, Button, Card, Badge, Section, Reveal, CodeBlock, PricingCard, Testimonial, FAQ, Logo, icons

## Pages (routes)
1. `/` Home
2. `/product`
3. `/pricing`
4. `/docs`
5. `/docs/quickstart`
6. `/docs/api`
7. `/integrations`
8. `/customers`
9. `/about`
10. `/contact`

## Finish checklist
- `npm install` inside project only
- `npm run build` passes with zero errors
- `npm run dev` running, return localhost link
- `README.md` with run instructions, pages/components, design rationale