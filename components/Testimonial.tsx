export function Testimonial({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="card flex h-full flex-col justify-between p-7">
      <blockquote className="text-base leading-relaxed text-text">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary"
          aria-hidden="true"
        >
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-muted">{role}</div>
        </div>
      </figcaption>
    </figure>
  );
}