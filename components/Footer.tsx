import Link from "next/link";
import { Logo, Wordmark } from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/product" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
      { label: "Customers", href: "/customers" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Quickstart", href: "/docs/quickstart" },
      { label: "API reference", href: "/docs/api" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-soft">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label="Lumora home">
              <Logo />
              <Wordmark />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              AI that turns every customer call into product decisions. Built for
              B2B teams who ship what customers actually want.
            </p>
            <p className="mt-6 text-xs text-muted">
              © {new Date().getFullYear()} Lumora, Inc. All rights reserved.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-text">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            SOC 2 Type II · GDPR · SSO · Data stays in your region
          </p>
          <div className="flex gap-5">
            <Link href="/docs" className="text-xs text-muted hover:text-text">
              Privacy
            </Link>
            <Link href="/docs" className="text-xs text-muted hover:text-text">
              Terms
            </Link>
            <Link href="/docs" className="text-xs text-muted hover:text-text">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}