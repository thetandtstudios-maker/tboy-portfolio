import { faq } from "@/content/about";

export default function Faq() {
  return (
    <section id="faq" className="border-t border-line/10">
      <div className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Questions people ask
        </h2>

        <div className="mt-8 divide-y divide-line/10 border-y border-line/10">
          {faq.map((f) => (
            <details key={f.q} className="group py-2">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
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
                  className="shrink-0 transition duration-200 group-open:rotate-45"
                >
                  <path d="M9 3v12M3 9h12" />
                </svg>
              </summary>
              <p className="pb-4 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
