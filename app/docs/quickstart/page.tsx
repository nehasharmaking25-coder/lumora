import { DocsLayout } from "@/components/DocsLayout";
import { Reveal } from "@/components/Reveal";
import { CodeBlock } from "@/components/CodeBlock";

export default function QuickstartPage() {
  return (
    <DocsLayout>
      <Reveal>
        <p className="eyebrow mb-3">Getting started</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Quickstart
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Connect your first call and see your first insight in under five
          minutes.
        </p>
      </Reveal>

      <div className="mt-10 space-y-12">
        <Step n={1} title="Create a workspace">
          <p className="text-muted">
            Sign up at app.lumora.ai and create a workspace for your team. You
            can invite teammates later from Settings → Members.
          </p>
        </Step>

        <Step n={2} title="Install the Lumora CLI">
          <p className="text-muted">
            The CLI is the fastest way to connect your call stack. Install it
            with npm:
          </p>
          <div className="mt-4">
            <CodeBlock
              language="bash"
              title="terminal"
              code={`npm install -g @lumora/cli\nlumora login`}
            />
          </div>
          <div className="mt-4 rounded-lg border border-accent/40 bg-accent/10 p-4 text-sm text-text">
            <strong>Tip:</strong> Run <code className="rounded bg-bg-soft px-1.5 py-0.5 font-mono text-xs">lumora doctor</code> to
            verify your setup before connecting a calendar.
          </div>
        </Step>

        <Step n={3} title="Connect your calendar">
          <p className="text-muted">
            Lumora joins calls automatically when you add its bot to an invite.
            Connect Google or Outlook Calendar:
          </p>
          <div className="mt-4">
            <CodeBlock
              language="bash"
              title="terminal"
              code={`lumora connect calendar --provider google`}
            />
          </div>
        </Step>

        <Step n={4} title="Invite Lumora to a call">
          <p className="text-muted">
            Add <code className="rounded bg-bg-soft px-1.5 py-0.5 font-mono text-xs">bot@lumora.ai</code>{" "}
            as a guest to any Zoom, Google Meet or Teams meeting. Lumora joins,
            records and transcribes automatically.
          </p>
          <div className="mt-4 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm text-text">
            <strong>Note:</strong> Participants see a clear &ldquo;Lumora is
            recording&rdquo; banner, and you can redact PII from Settings →
            Privacy.
          </div>
        </Step>

        <Step n={5} title="Read your first insights">
          <p className="text-muted">
            After the call ends, open your insight board. Feature requests, bugs
            and objections are grouped and ranked by revenue at stake.
          </p>
          <div className="mt-4">
            <CodeBlock
              language="bash"
              title="terminal"
              code={`lumora insights list --limit 10`}
            />
          </div>
        </Step>

        <Step n={6} title="Push an insight to Linear">
          <p className="text-muted">
            Send any insight to your product tools with one command:
          </p>
          <div className="mt-4">
            <CodeBlock
              language="bash"
              title="terminal"
              code={`lumora insights push <insight-id> --to linear`}
            />
          </div>
        </Step>
      </div>
    </DocsLayout>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="flex gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-white">
          {n}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-xl font-semibold">{title}</h2>
          <div className="mt-3">{children}</div>
        </div>
      </div>
    </Reveal>
  );
}