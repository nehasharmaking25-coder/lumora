"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { integrations } from "@/lib/data";

const categories = [
  { id: "all", label: "All" },
  { id: "calls", label: "Call platforms" },
  { id: "product", label: "Product tools" },
  { id: "comms", label: "Comms & CRM" },
];

export default function IntegrationsPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? integrations
      : integrations.filter((i) => i.category === active);

  return (
    <>
      <section className="container-x pt-20 pb-10 sm:pt-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3">Integrations</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Works where your team already works.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            Lumora plugs into your call stack and your product stack, so
            insights flow to the tools you live in — not another dashboard.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-24">
        <Reveal className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c.id
                  ? "bg-primary text-white"
                  : "border border-border text-muted hover:text-text"
              }`}
            >
              {c.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((i, idx) => (
            <Reveal key={i.name} delay={idx * 50}>
              <div className="card flex h-full items-start gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-display text-sm font-bold text-primary">
                  {i.name[0]}
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold">{i.name}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{i.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}