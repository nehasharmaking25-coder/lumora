"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconSearch } from "@/components/icons";

const groups = [
  {
    title: "Getting started",
    links: [
      { label: "Introduction", href: "/docs" },
      { label: "Quickstart", href: "/docs/quickstart" },
    ],
  },
  {
    title: "Reference",
    links: [{ label: "API reference", href: "/docs/api" }],
  },
];

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  return (
    <div className="container-x flex gap-10 py-12">
      <aside className="hidden w-60 shrink-0 lg:block">
        <div className="sticky top-24">
          <div className="relative">
            <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search docs…"
              className="w-full rounded-lg border border-border bg-bg-card py-2.5 pl-9 pr-3 text-sm outline-none placeholder:text-muted focus:border-primary"
              aria-label="Search documentation"
            />
          </div>
          <nav className="mt-6 space-y-6" aria-label="Docs">
            {groups.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {group.title}
                </p>
                <ul className="mt-2 space-y-1">
                  {group.links.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                            active
                              ? "bg-primary/10 font-medium text-primary"
                              : "text-muted hover:text-text"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}