import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import {
  IconArrow,
  IconBoard,
  IconCapture,
  IconChat,
  IconDigest,
  IconGlobe,
  IconShield,
} from "@/components/icons";

export default function ProductPage() {
  return (
    <>
      <section className="container-x pt-20 pb-10 sm:pt-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3">Product</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Every customer conversation, turned into a decision.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Lumora sits quietly on your calls and does the work no PM has time
            for: listening to every customer and telling you what to build next.
          </p>
        </Reveal>
      </section>

      <Section
        eyebrow="Capture"
        title="Auto call capture and transcripts"
        subtitle="Lumora joins Zoom, Google Meet and Microsoft Teams, records the conversation and produces a searchable transcript in 30+ languages."
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="card p-6">
              <div className="flex items-center gap-2 border-b border-border pb-3">
                <span className="h-3 w-3 rounded-full bg-border" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-border" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-border" aria-hidden="true" />
                <span className="ml-2 text-xs text-muted">Call transcript · 42:18</span>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold text-primary">Customer:</span>{" "}
                  &ldquo;We love the product, but we really need SSO before we can
                  roll this out to the whole org.&rdquo;
                </p>
                <p>
                  <span className="font-semibold text-text">Account exec:</span>{" "}
                  &ldquo;Got it — I&apos;ll flag that to the product team.&rdquo;
                </p>
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Insight detected
                  </span>
                  <p className="mt-1 text-muted">
                    Feature request: SSO · Enterprise · $340k deal at stake
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-4">
              {[
                "One-click calendar invite — Lumora joins automatically",
                "Speaker diarization and 30+ language transcription",
                "Redaction for PII and sensitive data",
                "Search every call your team has ever had",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Insight board"
        title="The board that ranks itself"
        subtitle="Feature requests, bugs, objections and churn risks are grouped across all customers and ranked by the revenue they represent."
        className="bg-bg-soft"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: <IconBoard />,
              title: "Revenue-ranked",
              text: "Every insight carries the deal size and customer count behind it, so priorities sort themselves.",
            },
            {
              icon: <IconCapture />,
              title: "Auto-grouped",
              text: "The same request from 40 customers becomes one insight, not 40 scattered notes.",
            },
            {
              icon: <IconDigest />,
              title: "Pushed to your tools",
              text: "Send any insight to Linear, Jira, Notion, Slack or HubSpot with one click.",
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="card h-full p-7">
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

      <Section
        eyebrow="Ask Lumora"
        title="Chat with every call you've ever had"
        subtitle="Ask questions in plain English and get answers backed by real customer conversations."
      >
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="card p-6">
              <div className="space-y-4">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-3 text-sm text-white">
                  What did enterprise customers say about pricing last month?
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-bg-soft px-4 py-3 text-sm text-text">
                  Across 14 enterprise calls in September, pricing came up 23
                  times. The dominant theme: annual contracts are fine, but
                  per-seat pricing feels steep past 200 seats. Three accounts
                  ($1.2M combined) asked for a volume discount.
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "“Which features did churned accounts request most?”",
              "“Summarize objections from the last 30 days.”",
              "“What are mid-market customers asking for that we don't have?”",
              "“Show me every bug report from the last quarter.”",
            ].map((q) => (
              <div key={q} className="card px-4 py-3 text-sm text-muted">
                {q}
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Security"
        title="Enterprise-grade, by default"
        className="bg-bg-soft"
      >
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: <IconShield />,
              title: "SOC 2 Type II",
              text: "Independently audited controls for security, availability and confidentiality.",
            },
            {
              icon: <IconGlobe />,
              title: "Data residency",
              text: "Your call data stays in your region — US, EU or APAC.",
            },
            {
              icon: <IconChat />,
              title: "SSO & SCIM",
              text: "SAML single sign-on and automated user provisioning for your whole org.",
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="card h-full p-7">
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

      <Section title="See it on your own calls">
        <Reveal className="text-center">
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Bring a real recording to your demo and watch Lumora pull insights
            from it live.
          </p>
          <div className="mt-7 flex justify-center">
            <Button href="/contact" size="lg">
              Book a demo <IconArrow />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}