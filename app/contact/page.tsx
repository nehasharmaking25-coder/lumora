"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

type Errors = Partial<Record<"name" | "email" | "company" | "size" | "message", string>>;

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    size: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (form.company.trim().length < 2) e.company = "Please enter your company.";
    if (!form.size) e.size = "Please select a team size.";
    if (form.message.trim().length < 10)
      e.message = "Tell us a little more (at least 10 characters).";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitted(true);
    }
  };

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  return (
    <>
      <section className="container-x pt-20 pb-10 sm:pt-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Book a demo.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            Bring a real call recording and we&apos;ll show you the insights Lumora
            pulls from it — live, in about 20 minutes.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-24">
        <Reveal className="mx-auto max-w-xl">
          {submitted ? (
            <div className="card p-10 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/30 text-2xl">
                ✓
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold">Thanks, {form.name.split(" ")[0]}!</h2>
              <p className="mt-3 text-muted">
                We&apos;ve got your request and will reach out within one business
                day to schedule your demo.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="card space-y-5 p-8">
              <Field
                label="Full name"
                error={errors.name}
                input={
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Ada Lovelace"
                    className={inputClass(!!errors.name)}
                    aria-invalid={!!errors.name}
                  />
                }
              />
              <Field
                label="Work email"
                error={errors.email}
                input={
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="ada@company.com"
                    className={inputClass(!!errors.email)}
                    aria-invalid={!!errors.email}
                  />
                }
              />
              <Field
                label="Company"
                error={errors.company}
                input={
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    placeholder="Acme Inc."
                    className={inputClass(!!errors.company)}
                    aria-invalid={!!errors.company}
                  />
                }
              />
              <Field
                label="Team size"
                error={errors.size}
                input={
                  <select
                    value={form.size}
                    onChange={(e) => update("size", e.target.value)}
                    className={inputClass(!!errors.size)}
                    aria-invalid={!!errors.size}
                  >
                    <option value="">Select…</option>
                    <option value="1-10">1–10</option>
                    <option value="11-50">11–50</option>
                    <option value="51-200">51–200</option>
                    <option value="201+">201+</option>
                  </select>
                }
              />
              <Field
                label="What do you want to learn?"
                error={errors.message}
                input={
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your team and what you'd like to see."
                    rows={4}
                    className={inputClass(!!errors.message)}
                    aria-invalid={!!errors.message}
                  />
                }
              />
              <Button type="submit" size="lg" className="w-full">
                Request demo
              </Button>
              <p className="text-center text-xs text-muted">
                By submitting, you agree to our privacy policy. No spam, ever.
              </p>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border bg-bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary ${
    hasError ? "border-red-500" : "border-border"
  }`;
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-text">{label}</label>
      {input}
      {error && (
        <p className="mt-1.5 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}