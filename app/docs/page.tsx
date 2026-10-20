import { DocsLayout } from "@/components/DocsLayout";
import { Reveal } from "@/components/Reveal";
import {
  IconBook,
  IconBolt,
  IconCode,
  IconGlobe,
  IconShield,
  IconSpark,
} from "@/components/icons";

const topics = [
  {
    icon: <IconBolt />,
    title: "Quickstart",
    desc: "Connect your first call and see insights in under five minutes.",
    href: "/docs/quickstart",
  },
  {
    icon: <IconCode />,
    title: "API reference",
    desc: "Endpoints for calls, insights and the Ask Lumora chat.",
    href: "/docs/api",
  },
  {
    icon: <IconGlobe />,
    title: "Integrations",
    desc: "Connect Zoom, Meet, Teams, Linear, Jira, Slack and more.",
    href: "/integrations",
  },
  {
    icon: <IconShield />,
    title: "Security",
    desc: "SOC 2, data residency, SSO and how your data is handled.",
    href: "/docs",
  },
  {
    icon: <IconSpark />,
    title: "Insight board",
    desc: "How insights are grouped, ranked and pushed to your tools.",
    href: "/docs",
  },
  {
    icon: <IconBook />,
    title: "Guides",
    desc: "Best practices for running product discovery with Lumora.",
    href: "/docs",
  },
];

export default function DocsPage() {
  return (
    <DocsLayout>
      <Reveal>
        <p className="eyebrow mb-3">Documentation</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Welcome to Lumora
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Everything you need to turn customer calls into product decisions.
          Start with the quickstart, or jump straight into the API.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {topics.map((t, i) => (
          <Reveal key={t.title} delay={i * 60}>
            <a
              href={t.href}
              className="card group block h-full p-6 transition-colors hover:border-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {t.icon}
              </span>
              <h2 className="mt-5 font-display text-lg font-semibold group-hover:text-primary">
                {t.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.desc}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </DocsLayout>
  );
}