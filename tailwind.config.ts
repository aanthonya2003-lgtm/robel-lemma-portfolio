import type { Config } from "tailwindcss";

// Tailwind v4 is CSS-first; theme tokens live in src/app/globals.css via @theme.
// This file is intentionally minimal — kept for tooling compatibility.
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
};

export default config;
