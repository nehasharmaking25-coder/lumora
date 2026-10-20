"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { PricingCard } from "@/components/PricingCard";
import { FAQ } from "@/components/FAQ";
import { plans } from "@/lib/data";
import { IconCheck } from "@/components/icons";

const comparison = [
  { feature: "Calls analysed", free: "5 / month", pro: "Unlimited", team: "Unlimited", ent: "Unlimited" },
  { feature: "Transcripts (30+ languages)", free: true, pro: true, team: true, ent: true },
  { feature: "Insight board", free: "Basic", pro: "Revenue-ranked", team: "Revenue-ranked", ent: "Revenue-ranked" },
  { feature: "Ask Lumora chat", free: false, pro: true, team: true, ent: true },
  { feature: "Weekly Slack digest", free: false, pro: true, team: true, ent: true },
  { feature: "Linear integration", free: false, pro: true, team: true, ent: true },
  { feature: "Jira, Notion & HubSpot", free: false, pro: false, team: true, ent: true },
  { feature: "Unlimited workspaces", free: false, pro: false, team: true, ent: true },
  { feature: "SSO (SAML)", free: false, pro: false, team: true, ent: true },
  { feature: "SOC 2 Type II report", free: false, pro: false, team: false, ent: true },
  { feature: "Data residency controls", free: false, pro: false, team: false, ent: true },
  { feature: "Dedicated success manager", free: false, pro: false, team: false, ent: true },
];

const faqs = [
  {
    q: "How does the free plan work?",
    a: "The free plan lets you analyse up to 5 calls a month with full transcripts and a basic insight board. It's perfect for trying Lumora on real conversations before you upgrade.",
  },
  {
    q: "What counts as a 'user'?",
    a: "A user is anyone with a Lumora seat — typically product managers, founders and support leads. Call participants and customers never count toward your seat total.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. Upgrade, downgrade or cancel anytime from your billing settings. Changes are prorated automatically, and your data is never locked in.",
  },
  {
    q: "Do you offer discounts for startups?",
    a: "Early-stage startups in an accelerator get 30% off Pro for the first year. Reach out from your company email and we'll set it up.",
  },
  {
    q: "Is my call data secure?",
    a: "Lumora is SOC 2 Type II certified. Data is encrypted in transit and at rest, and Enterprise plans can pin data residency to the US, EU or APAC.",
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(true);

  return (
    <>
      <section className="container-x pt-20 pb-10 sm:pt-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple pricing that scales with you.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            Start free, upgrade when your team is ready. Every paid plan starts
            with a 14-day trial.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-bg-card p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                !yearly ? "bg-primary text-white" : "text-muted"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                yearly ? "bg-primary text-white" : "text-muted"
              }`}
            >
              Yearly
              <span className={`ml-1.5 text-xs ${yearly ? "text-white/80" : "text-primary"}`}>
                −20%
              </span>
            </button>
          </div>
        </Reveal>
      </section>

      <section className="container-x pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 70}>
              <PricingCard plan={plan} yearly={yearly} />
            </Reveal>
          ))}
        </div>
      </section>

      <Section
        eyebrow="Compare"
        title="Full feature comparison"
        className="bg-bg-soft"
      >
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-border bg-bg-card">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 font-medium text-muted">Feature</th>
                  <th className="px-6 py-4 font-medium">Free</th>
                  <th className="px-6 py-4 font-medium">Pro</th>
                  <th className="px-6 py-4 font-medium">Team</th>
                  <th className="px-6 py-4 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 text-muted">{row.feature}</td>
                    {(["free", "pro", "team", "ent"] as const).map((k) => {
                      const v = row[k];
                      return (
                        <td key={k} className="px-6 py-4">
                          {v === true ? (
                            <IconCheck className="h-4 w-4 text-primary" />
                          ) : v === false ? (
                            <span className="text-muted/50">—</span>
                          ) : (
                            <span className="text-text">{v}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="FAQ" title="Pricing questions, answered">
        <div className="mx-auto max-w-3xl">
          <FAQ items={faqs} />
        </div>
      </Section>
    </>
  );
}