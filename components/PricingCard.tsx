"use client";

import { useState } from "react";
import { Button } from "./Button";
import { IconCheck } from "./icons";

export function PricingCard({
  plan,
  yearly,
}: {
  plan: {
    name: string;
    monthly: number | null;
    yearly: number | null;
    tagline: string;
    cta: string;
    features: readonly string[];
    highlight?: boolean;
  };
  yearly: boolean;
}) {
  const price = yearly ? plan.yearly : plan.monthly;
  const isCustom = price === null;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-7 ${
        plan.highlight
          ? "border-primary shadow-glow"
          : "border-border bg-bg-card"
      }`}
    >
      {plan.highlight && (
        <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          Most popular
        </span>
      )}
      <h3 className="font-display text-lg font-bold">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted">{plan.tagline}</p>

      <div className="mt-6 flex items-end gap-1.5">
        {isCustom ? (
          <span className="font-display text-4xl font-bold tracking-tight">Custom</span>
        ) : (
          <>
            <span className="font-display text-5xl font-bold tracking-tight">
              ${price}
            </span>
            <span className="pb-1.5 text-sm text-muted">/ user / mo</span>
          </>
        )}
      </div>
      {!isCustom && yearly && (
        <p className="mt-1 text-xs text-primary">Billed yearly — save 20%</p>
      )}

      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="text-muted">{f}</span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={plan.highlight ? "primary" : "ghost"}
        className="mt-8 w-full"
      >
        {plan.cta}
      </Button>
    </div>
  );
}