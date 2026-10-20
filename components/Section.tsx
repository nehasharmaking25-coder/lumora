import { Reveal } from "./Reveal";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <section className={`py-20 sm:py-28 ${className}`}>
      <div className="container-x">
        <Reveal
          className={`max-w-2xl ${
            align === "center" ? "mx-auto text-center" : ""
          }`}
        >
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
          )}
        </Reveal>
        {children && <div className="mt-14">{children}</div>}
      </div>
    </section>
  );
}