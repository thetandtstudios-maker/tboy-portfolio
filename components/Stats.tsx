import { site } from "@/content/site";

export default function Stats() {
  return (
    <section aria-label="TBOY at a glance" className="border-y border-line/10">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4">
        {site.stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col-reverse border-line/10 md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0"
          >
            <dt className="mt-1 text-sm text-muted">{s.label}</dt>
            <dd className="font-display text-4xl font-bold tracking-tight">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
