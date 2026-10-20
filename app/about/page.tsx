import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { founders } from "@/lib/data";
import { IconArrow, IconTarget, IconUsers, IconBolt } from "@/components/icons";

const values = [
  {
    icon: <IconTarget />,
    title: "Customers over opinions",
    text: "Every roadmap decision should be backed by what customers actually said, not the loudest voice in the room.",
  },
  {
    icon: <IconBolt />,
    title: "Ship fast, learn faster",
    text: "We move quickly and treat every release as an experiment. Speed is a feature, not a shortcut.",
  },
  {
    icon: <IconUsers />,
    title: "Respect the conversation",
    text: "Call data is sensitive. We're transparent about recording, redact PII, and never sell your data.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-x pt-20 pb-10 sm:pt-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Y Combinator · Summer 2026
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            We built Lumora because we shipped the wrong things.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Two product people, hundreds of customer calls, and one recurring
            problem: the signal was there, but it was buried in recordings and
            Slack threads. So we built the thing that listens.
          </p>
        </Reveal>
      </section>

      <Section eyebrow="Mission" title="Why we exist">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xl leading-relaxed text-muted">
            B2B teams talk to customers every day, yet still build the wrong
            things. Our mission is to make every customer conversation count —
            to turn the voice of the customer into the roadmap, automatically.
          </p>
        </Reveal>
      </Section>

      <Section eyebrow="Founders" title="The people behind Lumora" className="bg-bg-soft">
        <div className="grid gap-5 md:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 80}>
              <div className="card h-full p-8">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 font-display text-2xl font-bold text-primary">
                  {f.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{f.name}</h3>
                <p className="text-sm text-primary">{f.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{f.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Values" title="What we believe">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="card h-full p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {v.icon}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Careers" title="Come build with us" className="bg-bg-soft">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-lg text-muted">
            We&apos;re a small, fast team building the product layer for customer
            intelligence. If you care about shipping what customers want, we
            want to talk.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["Founding engineer", "Product designer", "ML engineer", "GTM lead"].map(
              (role) => (
                <span key={role} className="chip">
                  {role}
                </span>
              )
            )}
          </div>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="ghost">
              Get in touch <IconArrow />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}