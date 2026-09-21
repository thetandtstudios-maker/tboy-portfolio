"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

function Availability() {
  const on = site.available;
  return (
    <span className="hidden items-center gap-2 rounded-full border border-line/15 px-3 py-1.5 text-xs text-muted sm:inline-flex">
      <span className="relative flex h-2 w-2">
        {on && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            on ? "bg-emerald-400" : "bg-amber-400"
          }`}
        />
      </span>
      {on ? "Available for work" : "Currently booked"}
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/10 bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#home"
          aria-label="TBOY home"
          className="font-display text-xl font-bold tracking-tight"
        >
          {site.brand}
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {site.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Availability />
          {site.available && (
            <a
              href="#contact"
              className="btn btn-primary hidden !min-h-[42px] !px-4 !text-sm md:inline-flex"
            >
              {"Let's Work Together"}
            </a>
          )}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-line/15 md:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line/10 bg-bg/95 px-5 pb-6 pt-3 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {site.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="rounded-xl px-3 py-3.5 text-lg text-ink transition hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
          {site.available ? (
            <a href="#contact" onClick={close} className="btn btn-primary mt-4 w-full">
              {"Let's Work Together"}
            </a>
          ) : (
            <p className="mt-4 rounded-xl border border-line/10 px-4 py-3 text-sm text-muted">
              Currently booked. Questions about buying an app are still welcome.
            </p>
          )}
        </div>
      )}
    </header>
  );
}
