# Design OS Website

Marketing site for [Design Operating System](https://github.com/Courtny/design-os) — an AI-powered copilot for product design, built for Claude Code and Cursor.

Built with Astro and Svelte, using the retro OS design from [nicchan.me-v2](https://github.com/Courtny/nicchan.me-v2).

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## Deploy

Configured for [Vercel](https://vercel.com) static deployment. Connect the repo and deploy — no environment variables required.

After the first deploy, update `site` in `astro.config.mjs` with your assigned `*.vercel.app` URL.
