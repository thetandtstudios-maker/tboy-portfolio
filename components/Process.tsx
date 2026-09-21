import { steps, workStyle } from "@/content/services";

export default function Process() {
  return (
    <section id="process" className="border-t border-line/10">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          How I build
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          From your first message to handover, this is how a project runs.
        </p>

        <ol className="mt-12 grid gap-x-14 gap-y-9 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-5">
              <span
                aria-hidden="true"
                className="w-10 shrink-0 font-display text-3xl font-bold tabular-nums text-accent/70"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-14 max-w-2xl border-l-2 border-accent pl-5 text-lg leading-relaxed text-ink">
          {workStyle}
        </p>
      </div>
    </section>
  );
}
