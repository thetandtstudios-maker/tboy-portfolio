import { services, security } from "@/content/services";
import { site } from "@/content/site";

export default function Services() {
  return (
    <section id="services" className="border-t border-line/10 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          What I can build for you
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          From a first idea to a working product, or a fix for something you
          already have.
        </p>

        <ul className="mt-10 divide-y divide-line/10 border-y border-line/10">
          {services.map((s) => (
            <li
              key={s.title}
              className="grid gap-2 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-10"
            >
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ul>

        {site.available && (
          <a href="#contact" className="btn btn-primary mt-8">
            Discuss Your Project
          </a>
        )}

        {/* ---------- Security service ---------- */}
        <div className="mt-16 rounded-3xl border border-accent/40 bg-surface p-6 sm:p-10">
          <h3 className="max-w-2xl font-display text-2xl font-bold tracking-tight sm:text-4xl">
            {security.title}
          </h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            {security.intro}
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h4 className="font-display text-base font-bold">What I assess</h4>
              <ul className="mt-3 space-y-2.5">
                {security.assess.map((a) => (
                  <li
                    key={a}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-base font-bold">
                Outside my scope
              </h4>
              <ul className="mt-3 space-y-2.5">
                {security.outside.map((o) => (
                  <li
                    key={o}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-line/30"
                    />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-line/10 bg-surface2/60 p-5">
            <h4 className="font-display text-base font-bold">
              {security.exampleTitle}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {security.exampleText}
            </p>
          </div>

          {site.available && (
            <a href="#contact" className="btn btn-primary mt-8 w-full sm:w-auto">
              {security.cta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
