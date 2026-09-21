import { about } from "@/content/about";

export default function About() {
  return (
    <section id="about" className="border-t border-line/10 bg-surface/40">
      <div className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          {about.title}
        </h2>
        <div className="mt-6 space-y-5">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
