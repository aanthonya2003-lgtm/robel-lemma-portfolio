# Robel Lemma — Portfolio

Production portfolio for Robel Lemma — Product Manager · Founder · Digital Strategist.

**Stack:** Next.js 15.3.2 · React 19 · TypeScript strict · Tailwind v4.1.5 · GSAP 3.12.5 · Lenis 1.1.14 · Framer Motion 11.18.2 · Resend 2.1.0

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import this repo: `aanthonya2003-lgtm/robel-lemma-portfolio`
3. Framework: **Next.js** (auto-detected)
4. **Add environment variable before deploying:**
   - `RESEND_API_KEY` — generate at [resend.com/api-keys](https://resend.com/api-keys)
5. Click **Deploy** — build runs in ~90 seconds
6. After deploy: visit `/contact`, submit a test message, confirm delivery to `robelblemma@gmail.com`

## Required environment variables

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | **Yes** | Powers the live `/contact` form. Without this, form submissions return a graceful error directing the visitor to phone/email. |

## Routes

- `/` — Hero, stats, featured work, about, skills, contact CTA
- `/work` — Work index
- `/work/lemma-limited` — Case study
- `/work/pyr-studios` — Case study
- `/contact` — Live contact form

## Verified business data

| Field | Value | Source |
|---|---|---|
| Name | Robel Lemma | robellemma.com |
| Email | robelblemma@gmail.com | robellemma.com (public) |
| Phone | (858) 342-0231 | robellemma.com (public) |
| Education | B.S. Managerial Economics, UC San Diego, 2025 | robellemma.com |
| Venture 1 | Lemma Limited (CEO/Founder) | lemmalimited.com |
| Venture 2 | PYR Studios (Co-founder) | robellemma.com |

## Cron jobs

| Path | Schedule | Purpose |
|---|---|---|
| `/api/cron/health-check` | `0 8 * * *` (daily 8am UTC) | Pings critical external URLs |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (Resend)

Configured to deliver to `robelblemma@gmail.com` via Resend's verified `onboarding@resend.dev` sender. To send from a custom domain, verify a domain at [resend.com/domains](https://resend.com/domains) and update the `from` field in `src/app/api/contact/route.ts`.

---

Built by WEBLOVE.
