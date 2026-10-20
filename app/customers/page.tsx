import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { IconArrow } from "@/components/icons";

const stories = [
  {
    company: "Northwind Labs",
    industry: "Dev tools · Series B",
    headline: "Closed $1.2M in deals by fixing a pricing objection they'd ignored for months.",
    quote:
      "Lumora surfaced the same pricing objection across 14 enterprise calls. We changed our packaging and closed our two biggest deals of the quarter.",
    person: "Maya Chen, VP Product",
    metrics: [
      { value: "$1.2M", label: "deals influenced" },
      { value: "3 wks", label: "to ship the fix" },
    ],
  },
  {
    company: "Vantage",
    industry: "Analytics · Series A",
    headline: "Cut roadmap debates in half by ranking every request by revenue.",
    quote:
      "Our roadmap used to be a popularity contest. Now every item has deal size and customer count attached, and the arguments basically stopped.",
    person: "Dev Patel, Head of Product",
    metrics: [
      { value: "2x", label: "faster prioritization" },
      { value: "40%", label: "fewer roadmap meetings" },
    ],
  },
  {
    company: "Fieldnote",
    industry: "Field ops · Seed",
    headline: "Found a churn risk pattern before it cost them a single account.",
    quote:
      "The weekly digest flagged that onboarding calls were dropping a key step. We fixed it in a week and saved three accounts from churning.",
    person: "Sofia Reyes, CEO",
    metrics: [
      { value: "3", label: "accounts saved" },
      { value: "6 hrs", label: "saved per PM weekly" },
    ],
  },
];

export default function CustomersPage() {
  return (
    <>
      <section className="container-x pt-20 pb-10 sm:pt-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3">Customers</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Real teams, real results.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            400+ B2B startups use Lumora to hear their customers and ship what
            actually matters.
          </p>
        </Reveal>
      </section>

      <section className="container-x space-y-8 pb-24">
        {stories.map((s, i) => (
          <Reveal key={s.company} delay={i * 60}>
            <article className="card overflow-hidden">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 font-display text-sm font-bold text-primary">
                      {s.company[0]}
                    </span>
                    <div>
                      <h2 className="font-display text-lg font-semibold">{s.company}</h2>
                      <p className="text-xs text-muted">{s.industry}</p>
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight">
                    {s.headline}
                  </h3>
                  <blockquote className="mt-4 text-muted">
                    &ldquo;{s.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-sm font-medium text-text">{s.person}</p>
                </div>
                <div className="flex flex-row gap-6 border-t border-border bg-bg-soft p-8 lg:flex-col lg:justify-center lg:border-l lg:border-t-0">
                  {s.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-4xl font-bold tracking-tight text-primary">
                        {m.value}
                      </div>
                      <p className="mt-1 text-sm text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <Section title="Become the next story">
        <Reveal className="text-center">
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Bring a real call to your demo and see what Lumora finds in it.
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