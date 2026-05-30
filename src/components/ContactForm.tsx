"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      setErrorMsg("Please fill in name, email, and message.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || `Request failed (${res.status})`);
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="relative border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/5 rounded-[var(--radius-card)] p-10 md:p-14 text-center">
        <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-4">
          / Message Sent
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
          Sent — I&apos;ll respond within 48 hours.
        </h3>
        <p className="text-[var(--color-text)]/75 mb-8">
          Thanks for reaching out. Expect a reply from{" "}
          <span className="text-[var(--color-gold)]">robelblemma@gmail.com</span>.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="font-mono text-[12px] tracking-[0.22em] uppercase border border-[var(--color-text)]/30 text-[var(--color-text)] px-6 py-3 rounded-[2px] hover:border-[var(--color-text)] transition-colors"
        >
          Send Another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] mb-2"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full bg-[var(--color-surface)] border border-white/10 text-[var(--color-text)] font-body text-base px-4 py-3.5 rounded-[var(--radius-button)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full bg-[var(--color-surface)] border border-white/10 text-[var(--color-text)] font-body text-base px-4 py-3.5 rounded-[var(--radius-button)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] mb-2"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full bg-[var(--color-surface)] border border-white/10 text-[var(--color-text)] font-body text-base px-4 py-3.5 rounded-[var(--radius-button)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
          placeholder="PM role / advisory / partnership"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-[var(--color-surface)] border border-white/10 text-[var(--color-text)] font-body text-base px-4 py-3.5 rounded-[var(--radius-button)] focus:outline-none focus:border-[var(--color-gold)] transition-colors resize-y min-h-[140px]"
          placeholder="Tell me about the role, team, or idea — and a timeline if relevant."
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="border border-[var(--color-ember)]/40 bg-[var(--color-ember)]/5 rounded-[var(--radius-button)] p-4"
        >
          <p className="text-[var(--color-text)] text-sm mb-2">
            <span className="text-[var(--color-ember)] font-mono text-[10px] tracking-[0.22em] uppercase mr-2">
              Error
            </span>
            {errorMsg || "Something went wrong."}
          </p>
          <p className="text-[var(--color-text)]/70 text-sm">
            Call{" "}
            <a
              href="tel:+18583420231"
              className="text-[var(--color-gold)] underline-link"
            >
              (858) 342-0231
            </a>{" "}
            or email{" "}
            <a
              href="mailto:robelblemma@gmail.com"
              className="text-[var(--color-gold)] underline-link"
            >
              robelblemma@gmail.com
            </a>
            .
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)]">
          Reply within 48 hours
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="font-mono text-[12px] tracking-[0.22em] uppercase bg-[var(--color-gold)] text-[var(--color-bg)] px-8 py-4 rounded-[2px] hover:bg-[var(--color-text)] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending…" : "Send Message →"}
        </button>
      </div>
    </form>
  );
}
