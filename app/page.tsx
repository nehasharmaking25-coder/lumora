import Link from "next/link";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Testimonial } from "@/components/Testimonial";
import { customerLogos, testimonials } from "@/lib/data";
import {
  IconArrow,
  IconBoard,
  IconCapture,
  IconChat,
  IconDigest,
  IconShield,
} from "@/components/icons";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-[-20%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute right-[-10%] top-[30%] h-[320px] w-[420px] rounded-full bg-accent/20 blur-[100px]" />
        </div>

        <div className="container-x pt-20 pb-16 sm:pt-28 sm:pb-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Backed by Y Combinator · S26
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              AI that turns every customer call into{" "}
              <span className="text-primary">product decisions</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Lumora joins your sales, support and onboarding calls, pulls out
              feature requests, bugs and churn risks, and pushes them straight
              into the tools your team already uses.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Book a demo <IconArrow />
              </Button>
              <Button href="/product" variant="ghost" size="lg">
                See how it works
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted">
              Free plan · No credit card · Set up in 5 minutes
            </p>
          </Reveal>

          {/* Product mockup */}
          <Reveal delay={120} className="mt-16">
            <ProductMockup />
          </Reveal>
        </div>
      </section>

      {/* LOGOS */}
      <section className="border-y border-border bg-bg-soft py-10">
        <div className="container-x">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Trusted by 400+ B2B startups
          </p>
          <div className="relative mt-6 overflow-hidden">
            <div className="flex w-max animate-marquee gap-12">
              {[...customerLogos, ...customerLogos].map((logo, i) => (
                <span
                  key={`${logo}-${i}`}
                  className="whitespace-nowrap font-display text-lg font-semibold text-muted/70"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES PREVIEW */}
      <Section
        eyebrow="Why Lumora"
        title="Stop building the wrong things"
        subtitle="Your customers tell you exactly what to build, every single day. Lumora makes sure you actually hear it."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <IconCapture />,
              title: "Auto call capture",
              text: "Lumora joins Zoom, Meet and Teams, records and transcribes in 30+ languages.",
            },
            {
              icon: <IconBoard />,
              title: "Insight board",
              text: "Top requests ranked by deal size and number of customers — not by who shouts loudest.",
            },
            {
              icon: <IconChat />,
              title: "Ask Lumora",
              text: "Chat with all your calls. Ask what enterprise customers said about pricing last month.",
            },
            {
              icon: <IconDigest />,
              title: "Weekly digest",
              text: "A crisp product digest lands in Slack every Monday, before your planning meeting.",
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="card h-full p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {f.icon}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section
        eyebrow="How it works"
        title="From call to roadmap in three steps"
        className="bg-bg-soft"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Connect your calls",
              text: "Invite Lumora to your Zoom, Google Meet or Teams calls with one click. It joins, listens and transcribes automatically.",
            },
            {
              step: "02",
              title: "Lumora extracts insights",
              text: "Feature requests, bugs, objections and churn risks are pulled out and grouped across every customer.",
            },
            {
              step: "03",
              title: "Ship what matters",
              text: "Insights are ranked by revenue at stake and pushed into Linear, Jira, Notion, Slack and HubSpot.",
            },
          ].map((s, i) => (
            <Reveal key={s.step} delay={i * 100}>
              <div className="card h-full p-7">
                <span className="font-display text-4xl font-bold text-primary/30">
                  {s.step}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TRACTION */}
      <Section eyebrow="Traction" title="Numbers that ship">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { value: "12M+", label: "minutes of calls analysed" },
            { value: "3x", label: "faster roadmap decisions" },
            { value: "6 hrs", label: "saved per PM, every week" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="card p-8 text-center">
                <div className="font-display text-5xl font-bold tracking-tight text-primary">
                  {s.value}
                </div>
                <p className="mt-3 text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        eyebrow="Customers"
        title="Teams that stopped guessing"
        className="bg-bg-soft"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <Testimonial {...t} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PRICING TEASER */}
      <Section
        eyebrow="Pricing"
        title="Start free, scale when you're ready"
        subtitle="Every plan includes unlimited transcripts and the core insight board."
      >
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { name: "Free", price: "$0", note: "5 calls / month" },
            { name: "Pro", price: "$49", note: "Unlimited calls, per user / mo" },
            { name: "Team", price: "$149", note: "Everything in Pro, per user / mo" },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className="card p-7 text-center">
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <div className="mt-4 font-display text-4xl font-bold">{p.price}</div>
                <p className="mt-2 text-sm text-muted">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Button href="/pricing" variant="ghost">
            Compare all plans <IconArrow />
          </Button>
        </Reveal>
      </Section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="card relative overflow-hidden p-10 text-center sm:p-16">
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              aria-hidden="true"
            >
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
            </div>
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Your next roadmap decision is hiding in a call you already had.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Connect Lumora in five minutes and see what your customers have
              been asking for.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Book a demo <IconArrow />
              </Button>
              <Button href="/docs/quickstart" variant="ghost" size="lg">
                Read the quickstart
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ProductMockup() {
  return (
    <div className="card mx-auto max-w-4xl overflow-hidden shadow-card">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-bg-soft px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-border" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-border" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-border" aria-hidden="true" />
        <span className="ml-3 rounded-md bg-bg-card px-3 py-1 text-xs text-muted">
          app.lumora.ai/insights
        </span>
      </div>

      <div className="grid md:grid-cols-[220px_1fr]">
        {/* sidebar */}
        <div className="hidden border-r border-border bg-bg-soft p-4 md:block">
          <div className="space-y-1 text-sm">
            {["Insight board", "Calls", "Ask Lumora", "Digest", "Settings"].map(
              (item, i) => (
                <div
                  key={item}
                  className={`rounded-lg px-3 py-2 ${
                    i === 0
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* main */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-sm font-semibold">Top requests</h3>
              <p className="text-xs text-muted">Ranked by revenue at stake</p>
            </div>
            <span className="chip">This week</span>
          </div>

          <div className="mt-4 space-y-3">
            {[
              { label: "SSO for enterprise", deals: "$340k", count: 18, w: "92%" },
              { label: "Bulk export to CSV", deals: "$210k", count: 27, w: "74%" },
              { label: "Slack alerts on churn", deals: "$160k", count: 12, w: "58%" },
              { label: "Custom dashboards", deals: "$95k", count: 9, w: "41%" },
            ].map((row) => (
              <div key={row.label} className="rounded-lg border border-border p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium">{row.label}</span>
                  <span className="whitespace-nowrap text-xs text-muted">
                    {row.count} customers · {row.deals}
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-bg-soft">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: row.w }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}