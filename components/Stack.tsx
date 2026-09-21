import { stack } from "@/content/services";

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line/10 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          What I build with
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h3 className="font-display text-lg font-bold">
              Used in my projects
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {stack.used.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line/25 px-4 py-2 text-sm text-ink"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">
              Also available to build with
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {stack.available.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-dashed border-line/25 px-4 py-2 text-sm text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
