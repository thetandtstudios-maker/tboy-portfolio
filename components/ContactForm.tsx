"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

const projectTypes = [
  "Android App",
  "Web App",
  "Backend / API",
  "Bug Fix",
  "Existing App Improvement",
  "Product Acquisition",
  "Android Security Assessment",
  "Other",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setError("Couldn't send that. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-line/10 bg-surface/60 p-8 text-center">
        <h3 className="font-display text-2xl font-bold">Message sent.</h3>
        <p className="mt-2 leading-relaxed text-muted">
          Thanks for reaching out. I reply on Telegram or email, usually
          within a day or two.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot: hidden from real visitors, tempting to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-xl border border-line/15 bg-surface px-4 py-3 text-ink outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-xl border border-line/15 bg-surface px-4 py-3 text-ink outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact" className="text-sm text-muted">
            WhatsApp or Telegram (optional)
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            className="mt-1.5 w-full rounded-xl border border-line/15 bg-surface px-4 py-3 text-ink outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="projectType" className="text-sm text-muted">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            className="mt-1.5 w-full rounded-xl border border-line/15 bg-surface px-4 py-3 text-ink outline-none focus:border-accent"
          >
            <option value="" disabled>
              Choose one
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="text-sm text-muted">
          Budget (optional)
        </label>
        <input
          id="budget"
          name="budget"
          type="text"
          className="mt-1.5 w-full rounded-xl border border-line/15 bg-surface px-4 py-3 text-ink outline-none focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="description" className="text-sm text-muted">
          Tell me about your project
        </label>
        <textarea
          id="description"
          name="description"
          required
          minLength={20}
          rows={5}
          placeholder="What do you want to build or fix? A few sentences is enough to get started."
          className="mt-1.5 w-full rounded-xl border border-line/15 bg-surface px-4 py-3 text-ink outline-none focus:border-accent"
        />
        <p className="mt-1 text-xs text-muted">At least a short sentence or two.</p>
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <p className="text-sm text-muted">
        Prefer chat? Message me on{" "}
        <a
          href={site.links.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline underline-offset-4"
        >
          Telegram
        </a>{" "}
        instead.
      </p>
    </form>
  );
}
