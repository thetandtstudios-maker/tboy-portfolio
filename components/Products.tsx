import { projects } from "@/content/projects";

export default function Products() {
  const forSale = projects.filter((p) => p.forSale);

  return (
    <section id="products" className="border-t border-line/10 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Ready-made apps you can buy
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {
            "These are built and working. Buy the full app with everything needed to run it, or just the source code. Have a different arrangement in mind? Tell me, I'm open to it."
          }
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {forSale.map((p) => (
            <div
              key={p.slug}
              className="flex flex-col rounded-3xl border border-line/10 bg-surface p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs text-soft">
                  Available for acquisition
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-muted">{p.hook}</p>
              <p className="mt-2 text-sm text-muted">{p.tech.join(", ")}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn btn-primary">
                  Request Details
                </a>
                <a href={`#${p.slug}`} className="btn btn-ghost">
                  See the case study
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
          Zana belongs to a client and is not for sale, but I can build
          something similar for you.
        </p>
      </div>
    </section>
  );
}
