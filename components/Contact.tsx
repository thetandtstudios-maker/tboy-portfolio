import { site } from "@/content/site";

export default function Contact() {
  const { telegram, email, youtube } = site.links;

  return (
    <section id="contact" className="border-t border-line/10">
      <div className="mx-auto max-w-6xl px-5 py-20">
        {site.available ? (
          <>
            <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
              {"Have an idea? Let's build it."}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Message me on Telegram or send an email. Tell me what you want
              to build, and we take it from there.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Message me on Telegram
              </a>
              <a href={`mailto:${email}`} className="btn btn-ghost">
                Send an email
              </a>
            </div>
          </>
        ) : (
          <>
            <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
              Fully booked for now.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {
                "I'm not taking new projects right now. Buying TheftGuard or Trace? Email me and I'll send you the details."
              }
            </p>
            <div className="mt-8">
              <a
                href={`mailto:${email}?subject=Product%20inquiry`}
                className="btn btn-primary"
              >
                Ask about buying an app
              </a>
            </div>
          </>
        )}

        <p className="mt-10 text-sm text-muted">
          Want to see how I work first?{" "}
          <a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-4 hover:text-soft"
          >
            Watch on YouTube
          </a>
          .
        </p>
      </div>
    </section>
  );
}
