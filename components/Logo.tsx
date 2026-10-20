export function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="9" fill="var(--primary)" />
      <path
        d="M9 20.5c2.6 2.4 6.4 2.4 9 0"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="16" cy="11.5" r="3.2" fill="#fff" />
      <path
        d="M22.5 20.5c1.6-1.4 2.5-3.4 2.5-5.5"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({ className = "text-lg" }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-tight ${className}`}>
      Lumora
    </span>
  );
}