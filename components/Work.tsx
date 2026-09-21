import Image from "next/image";
import { projects, type Project } from "@/content/projects";
import { site } from "@/content/site";

function Visual({ p }: { p: Project }) {
  if (p.screenshots.length > 0) {
    return (
      <div className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
        {p.screenshots.map((s) => (
          <div
            key={s.src}
            className="relative aspect-[9/19] w-44 shrink-0 snap-center overflow-hidden rounded-2xl border border-line/15 bg-surface"
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="176px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  // Shown until you add screenshots for this project.
  return (
    <div className="mx-auto w-full max-w-[240px] rounded-[2rem] border border-line/15 bg-surface p-2">
      <div className="grid aspect-[9/17] place-items-center rounded-[1.5rem] bg-surface2">
        <span
          aria-hidden="true"
          className="font-display text-8xl font-bold text-accent/40"
        >
          {p.name[0]}
        </span>
      </div>
    </div>
  );
}

function ProjectBlock({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <article
      id={p.slug}
      className="grid items-center gap-10 border-t border-line/10 py-14 first:border-t-0 lg:grid-cols-2 lg:gap-16"
    >
      <div className={flip ? "lg:order-2" : ""}>
        <Visual p={p} />
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="text-muted">{p.category}</span>
          <span className="rounded-full border border-line/15 px-2.5 py-0.5 text-xs text-ink">
            {p.status}
          </span>
          {p.forSale && (
            <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs text-soft">
              Available for acquisition
            </span>
          )}
        </div>

        <h3 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {p.name}
        </h3>
        <p className="mt-3 text-xl leading-snug text-ink/90">{p.hook}</p>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">{p.overview}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${p.name} technologies`}>
          {p.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line/10 px-3 py-1 text-sm text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {p.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {f}
            </li>
          ))}
        </ul>

        <details className="group mt-7 rounded-2xl border border-line/10 bg-surface/50">
          <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between px-4 font-semibold [&::-webkit-details-marker]:hidden">
            Read the case study
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition duration-200 group-open:rotate-180"
            >
              <path d="M4 7l5 5 5-5" />
            </svg>
          </summary>
          <div className="space-y-5 px-4 pb-5 text-sm leading-relaxed text-muted">
            <div>
              <h4 className="font-display text-base font-bold text-ink">
                How it was built
              </h4>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                {p.built.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            {p.story && (
              <div>
                <h4 className="font-display text-base font-bold text-ink">
                  Why I built it
                </h4>
                <div className="mt-2 space-y-3">
                  {p.story.map((s) => (
                    <p key={s}>{s}</p>
                  ))}
                </div>
              </div>
            )}
            {p.shows && (
              <div>
                <h4 className="font-display text-base font-bold text-ink">
                  What it shows I can build
                </h4>
                <p className="mt-2">{p.shows}</p>
              </div>
            )}
          </div>
        </details>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          {p.forSale && (
            <a href="#contact" className="btn btn-primary">
              Request Details
            </a>
          )}
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Open live app
            </a>
          )}
          {site.available && (
            <a
              href="#contact"
              className={`btn ${p.forSale ? "btn-ghost" : "btn-primary"}`}
            >
              Want something similar?
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 pb-8 pt-20">
      <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
        {"Things I've built"}
      </h2>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        Real apps, built end to end. Open a case study to see how each one
        works.
      </p>
      <div className="mt-6">
        {projects.map((p, i) => (
          <ProjectBlock key={p.slug} p={p} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
