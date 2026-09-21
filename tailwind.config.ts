import type { Config } from "tailwindcss";

// Colours live in app/globals.css as CSS variables.
// Change them there and the whole site updates.
const c = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: c("bg"),
        surface: c("surface"),
        surface2: c("surface2"),
        line: c("line"),
        ink: c("ink"),
        muted: c("muted"),
        accent: c("accent"),
        "accent-strong": c("accent-strong"),
        soft: c("soft"),
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
