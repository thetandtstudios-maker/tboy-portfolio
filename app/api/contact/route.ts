import { NextResponse } from "next/server";

// Very small in-memory rate limit: max 5 submissions per IP per hour.
// Resets whenever the server restarts, which is fine for a portfolio site.
const seen = new Map<string, number[]>();
const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000;

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (seen.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  seen.set(ip, hits);
  return hits.length > LIMIT;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Try again later." },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, contact, projectType, budget, description, website } =
    body as Record<string, string>;

  // Hidden field real visitors never fill in. A bot usually does.
  if (website) {
    return NextResponse.json({ ok: true }); // pretend success, drop it silently
  }

  if (!name?.trim() || !email?.trim() || !description?.trim()) {
    return NextResponse.json(
      { error: "Please fill in your name, email and project details." },
      { status: 400 }
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toAddress) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars");
    return NextResponse.json(
      { error: "Something went wrong on our end. Please email directly instead." },
      { status: 500 }
    );
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    contact ? `Preferred contact: ${contact}` : null,
    projectType ? `Project type: ${projectType}` : null,
    budget ? `Budget: ${budget}` : null,
    "",
    description,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "TBOY Website <onboarding@resend.dev>",
      to: toAddress,
      reply_to: email,
      subject: `New project inquiry from ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", await res.text());
    return NextResponse.json(
      { error: "Couldn't send your message. Please email directly instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
