import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-line/10">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          What people say
        </h2>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="rounded-3xl border border-line/10 bg-surface/60 p-6"
            >
              <p className="text-lg leading-relaxed text-ink">
                {t.quote}
              </p>
              <p className="mt-4 text-sm text-muted">{t.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
