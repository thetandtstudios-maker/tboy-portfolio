import { site } from "@/content/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* soft violet glow behind the phone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ---------- Left: message ---------- */}
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full border border-line/15 bg-surface/60 px-3.5 py-1.5 text-sm text-muted">
            <span
              className={`h-2 w-2 rounded-full ${
                site.available ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />
            {site.available
              ? "Taking on new projects"
              : "Fully booked right now"}
          </p>

          <h1
            className="rise mt-6 font-display text-[2.7rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            I turn ideas into working digital products.
          </h1>

          <p
            className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "160ms" }}
          >
            {
              "Android apps, web apps, backends and Android security assessments. Tell me the idea, and I'll take it from first sketch to a product people can use."
            }
          </p>

          <div
            className="rise mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            {site.available ? (
              <>
                <a href="#contact" className="btn btn-primary">
                  Start a Project
                </a>
                <a href="#work" className="btn btn-ghost">
                  View My Work
                </a>
              </>
            ) : (
              <>
                <a href="#work" className="btn btn-primary">
                  View My Work
                </a>
                <a href="#products" className="btn btn-ghost">
                  Ask about buying an app
                </a>
              </>
            )}
          </div>

          {!site.available && (
            <p
              className="rise mt-4 text-sm text-muted"
              style={{ animationDelay: "280ms" }}
            >
              New project slots are full. Check back soon.
            </p>
          )}

          <ul
            className="rise mt-10 flex flex-wrap gap-2"
            style={{ animationDelay: "320ms" }}
            aria-label="Technologies used in my projects"
          >
            {site.heroBadges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-line/10 px-3 py-1 text-sm text-muted"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Right: projects on a phone ---------- */}
        <div
          className="rise relative mx-auto w-full max-w-[300px]"
          style={{ animationDelay: "200ms" }}
        >
          <div
            aria-hidden="true"
            className="drift absolute -left-4 top-20 z-10 rounded-2xl border border-line/15 bg-surface2/80 px-3 py-2 text-xs text-ink backdrop-blur sm:-left-10"
          >
            Android in Kotlin
          </div>
          <div
            aria-hidden="true"
            className="drift absolute -right-3 bottom-24 z-10 rounded-2xl border border-line/15 bg-surface2/80 px-3 py-2 text-xs text-ink backdrop-blur sm:-right-10"
            style={{ animationDelay: "-3s" }}
          >
            Paystack payments
          </div>

          <div className="rounded-[2.4rem] border border-line/15 bg-surface p-2.5 shadow-[0_40px_90px_-30px_rgb(139_92_246/0.55)]">
            <div className="flex min-h-[420px] flex-col rounded-[1.9rem] bg-bg p-4">
              <div className="mx-auto h-1.5 w-16 rounded-full bg-white/10" />
              <p className="mt-5 font-display text-lg font-bold">My projects</p>

              <ul className="mt-4 space-y-2.5">
                {site.heroProjects.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-center gap-3 rounded-2xl border border-line/10 bg-surface2/70 p-3"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/20 font-display font-bold text-soft">
                      {p.name[0]}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold">{p.name}</span>
                      <span className="block truncate text-xs text-muted">
                        {p.note}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto rounded-2xl bg-accent-strong px-4 py-3 text-center text-sm font-semibold text-white">
                {site.available ? "Start a Project" : "Fully booked"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
