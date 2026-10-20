export const integrations = [
  { name: "Zoom", category: "calls", desc: "Auto-capture and transcribe every Zoom call." },
  { name: "Google Meet", category: "calls", desc: "Join Meet calls and pull insights live." },
  { name: "Microsoft Teams", category: "calls", desc: "Native Teams bot for enterprise calls." },
  { name: "Linear", category: "product", desc: "Push feature requests straight into Linear." },
  { name: "Jira", category: "product", desc: "Sync bugs and requests to Jira projects." },
  { name: "Notion", category: "product", desc: "Send digests and boards to Notion." },
  { name: "Slack", category: "comms", desc: "Weekly digest and alerts in Slack." },
  { name: "HubSpot", category: "comms", desc: "Attach churn risk to HubSpot deals." },
  { name: "Salesforce", category: "comms", desc: "Revenue context from your CRM." },
  { name: "Gong", category: "calls", desc: "Import historical call recordings." },
  { name: "Webhooks", category: "product", desc: "Pipe insights to any internal tool." },
  { name: "Zapier", category: "comms", desc: "Connect Lumora to 5,000+ apps." },
] as const;

export const customerLogos = [
  "Northwind Labs",
  "Vantage",
  "Cobalt",
  "Fieldnote",
  "Arclight",
  "Mosaic",
  "Pinecone",
  "Driftwood",
  "Halcyon",
  "Quill",
];

export const testimonials = [
  {
    quote:
      "We stopped guessing. Lumora surfaced a pricing objection we'd heard for months but never connected to revenue. We fixed it and closed our two biggest deals of the quarter.",
    name: "Maya Chen",
    role: "VP Product, Northwind Labs",
  },
  {
    quote:
      "Our roadmap used to be a popularity contest. Now every item has deal size and customer count attached. It changed how we argue about priorities.",
    name: "Dev Patel",
    role: "Head of Product, Vantage",
  },
  {
    quote:
      "The weekly Slack digest is the first thing our founders read on Monday. It's like a board meeting with every customer, compressed into five bullets.",
    name: "Sofia Reyes",
    role: "CEO, Fieldnote",
  },
];

export const founders = [
  {
    name: "Anika Rao",
    role: "Co-founder & CEO",
    bio: "Former Head of Product at a Series C fintech, where she watched 400 hours of sales calls a year and still shipped the wrong things. Built Lumora to fix that.",
  },
  {
    name: "Jonas Weber",
    role: "Co-founder & CTO",
    bio: "Ex-staff engineer at a voice-AI company. Spent a decade making speech models fast, private and accurate enough for real product decisions.",
  },
];

export const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    tagline: "For solo founders testing the waters.",
    cta: "Start free",
    features: [
      "5 calls / month",
      "Transcripts in 30+ languages",
      "Basic insight board",
      "1 workspace",
      "Community support",
    ],
  },
  {
    name: "Pro",
    monthly: 49,
    yearly: 39,
    tagline: "For small product teams shipping weekly.",
    cta: "Start 14-day trial",
    highlight: true,
    features: [
      "Unlimited calls",
      "Ask Lumora chat",
      "Revenue-ranked insight board",
      "Slack & Linear integrations",
      "Weekly product digest",
      "Priority support",
    ],
  },
  {
    name: "Team",
    monthly: 149,
    yearly: 119,
    tagline: "For growing teams with multiple products.",
    cta: "Start 14-day trial",
    features: [
      "Everything in Pro",
      "Unlimited workspaces",
      "Jira, Notion & HubSpot",
      "Custom insight categories",
      "Team analytics",
      "SSO (SAML)",
    ],
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    tagline: "For companies with security and scale needs.",
    cta: "Talk to sales",
    features: [
      "Everything in Team",
      "SOC 2 Type II report",
      "Data residency controls",
      "Dedicated success manager",
      "Custom AI models",
      "99.9% uptime SLA",
    ],
  },
] as const;