import { DocsLayout } from "@/components/DocsLayout";
import { Reveal } from "@/components/Reveal";
import { CodeBlock } from "@/components/CodeBlock";

const endpoints = [
  {
    method: "GET",
    path: "/v1/calls",
    desc: "List all calls in your workspace, with status and insight counts.",
  },
  {
    method: "POST",
    path: "/v1/calls",
    desc: "Register a call for Lumora to join and transcribe.",
  },
  {
    method: "GET",
    path: "/v1/insights",
    desc: "List insights, filterable by type, customer and revenue.",
  },
  {
    method: "POST",
    path: "/v1/ask",
    desc: "Ask a question across all your calls and get a grounded answer.",
  },
];

const params = [
  { name: "workspace_id", type: "string", required: true, desc: "Your workspace identifier." },
  { name: "type", type: "string", required: false, desc: "Insight type: feature_request, bug, objection, churn_risk." },
  { name: "min_revenue", type: "number", required: false, desc: "Filter insights by minimum deal size in USD." },
  { name: "language", type: "string", required: false, desc: "Transcription language (auto-detected by default)." },
];

export default function ApiPage() {
  return (
    <DocsLayout>
      <Reveal>
        <p className="eyebrow mb-3">Reference</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          API reference
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          The Lumora REST API. Base URL:{" "}
          <code className="rounded bg-bg-soft px-1.5 py-0.5 font-mono text-sm">
            https://api.lumora.ai
          </code>
        </p>
      </Reveal>

      <div className="mt-10 space-y-12">
        <section>
          <h2 className="font-display text-xl font-semibold">Authentication</h2>
          <p className="mt-3 text-muted">
            Authenticate with a bearer token from Settings → API keys.
          </p>
          <div className="mt-4">
            <CodeBlock
              language="bash"
              title="terminal"
              code={`curl https://api.lumora.ai/v1/calls \\\n  -H "Authorization: Bearer $LUMORA_API_KEY"`}
            />
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold">Endpoints</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-bg-card">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3 font-medium text-muted">Method</th>
                  <th className="px-5 py-3 font-medium text-muted">Path</th>
                  <th className="px-5 py-3 font-medium text-muted">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {endpoints.map((e) => (
                  <tr key={e.method + e.path}>
                    <td className="px-5 py-3">
                      <span
                        className={`rounded-md px-2 py-0.5 font-mono text-xs font-semibold ${
                          e.method === "GET"
                            ? "bg-accent/30 text-accent-ink"
                            : "bg-primary/15 text-primary"
                        }`}
                      >
                        {e.method}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-mono text-xs text-text">{e.path}</td>
                    <td className="px-5 py-3 text-muted">{e.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold">
            Example: list insights
          </h2>
          <p className="mt-3 text-muted">
            Request and response for fetching revenue-ranked insights.
          </p>
          <div className="mt-4 space-y-4">
            <CodeBlock
              language="bash"
              title="request"
              code={`curl https://api.lumora.ai/v1/insights?type=feature_request&min_revenue=100000 \\\n  -H "Authorization: Bearer $LUMORA_API_KEY"`}
            />
            <CodeBlock
              language="json"
              title="response"
              code={`{
  "data": [
    {
      "id": "ins_9f2c1a",
      "type": "feature_request",
      "title": "SSO for enterprise",
      "customers": 18,
      "revenue_at_stake_usd": 340000,
      "source_calls": 41
    }
  ],
  "has_more": true
}`}
            />
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold">Parameters</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-bg-card">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3 font-medium text-muted">Parameter</th>
                  <th className="px-5 py-3 font-medium text-muted">Type</th>
                  <th className="px-5 py-3 font-medium text-muted">Required</th>
                  <th className="px-5 py-3 font-medium text-muted">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {params.map((p) => (
                  <tr key={p.name}>
                    <td className="px-5 py-3 font-mono text-xs text-text">{p.name}</td>
                    <td className="px-5 py-3 text-muted">{p.type}</td>
                    <td className="px-5 py-3">
                      {p.required ? (
                        <span className="text-primary">Yes</span>
                      ) : (
                        <span className="text-muted">No</span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-muted">{p.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}