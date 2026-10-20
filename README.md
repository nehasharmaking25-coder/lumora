# Lumora

**AI that turns every customer call into product decisions.**

A premium, realistic 10-page SaaS marketing website for Lumora — a fictional
Y Combinator (Summer 2026) startup. Built with Next.js (App Router),
TypeScript and Tailwind CSS.

## How to run

```bash
npm install
npm run dev
```

Open http://localhost:3000. To verify a production build:

```bash
npm run build
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

## Main components

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

## Design choices

- **Colors** — a violet primary (`#6E5CFF`) paired with a lime accent
  (`#C8F169`) for a confident, modern YC feel. Near-black ink and soft
  off-white surfaces keep contrast high and the palette calm.
- **Type** — Space Grotesk for display headings (geometric, techy, bold) and
  Inter for body text (highly readable at small sizes). Both loaded via
  `next/font` with zero layout shift.
- **Style** — hairline borders, 16px card radii, soft shadows and generous
  whitespace. One design system used identically across every page.
- **Dark mode** — class-based Tailwind strategy, persisted to `localStorage`,
  with a toggle in the header. Respects `prefers-color-scheme` on first visit.
- **Motion** — subtle scroll-reveal and a slow logo marquee; everything
  respects `prefers-reduced-motion`.
- **Accessibility** — semantic landmarks, keyboard-focusable controls,
  `aria-label`s, `aria-current` on nav, and readable contrast in both themes.
- **No stock assets** — every icon and illustration is inline SVG or CSS.

## Not finished / notes

- The docs search box filters visually but does not yet run a full-text index
  (it is a UI affordance for this design test).
- The contact form validates and shows a success state client-side; it does
  not POST to a real backend.