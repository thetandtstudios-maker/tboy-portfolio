import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="font-display text-2xl font-bold">{site.brand}</p>
        <h1 className="mt-6 font-display text-6xl font-bold tracking-tight sm:text-8xl">
          404
        </h1>
        <p className="mt-4 text-lg text-muted">
          This page doesn't exist. Let's get you back.
        </p>
        <Link href="/" className="btn btn-primary mt-8 inline-flex">
          Back to home
        </Link>
      </div>
    </main>
  );
}
