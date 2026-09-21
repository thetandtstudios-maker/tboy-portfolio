import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            {site.brand}
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">{site.tagline}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {site.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-1.5 text-sm text-muted transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={site.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="py-1.5 text-sm text-muted transition hover:text-ink"
          >
            YouTube
          </a>
          {site.available && (
            <a
              href={site.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 text-sm text-muted transition hover:text-ink"
            >
              Telegram
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-line/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted">
          © {new Date().getFullYear()} {site.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
