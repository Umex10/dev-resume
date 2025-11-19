**Job Seeking (3rd semester)**: I am currently in my 3rd semester and urgently looking for a job or internship where I can learn, grow, and contribute. This resume site demonstrates my skills, apps, and contact information.

**Project**: Dev Resume

This rep is a developer resume built with Next.js. It showcases apps, skills, and contact functionality (email via Resend). The site is designed as a modern single-page resume built with reusable React com's and Tailwind CSS.

Key highlights:
- Clean, com-driven UI (header, hero, apps, skills, contact, footer).
- Interactive app cards with animations (Framer Motion).
- Charts and skill visualizations using `recharts`.
- Contact form that sends email via the `resend` service (server-side function).

Tech stack
- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS with `tailwindcss-animate` and `@tailwindcss/line-clamp`
- Framer Motion for animations
- Recharts for charts
- Resend for transactional email sending
- Zod and `react-hook-form` for form validation

How to run (local)
1. Install dependencies:

```bash
npm install
```

2. Set required environment variables (example):

```bash
export RESEND_API_KEY="your_resend_api_key"
```

3. Start dev server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

Files & structure (high level)
- `app/layout.tsx` — Root layout and theme provider.
- `app/page.tsx` — Main entry (composes `Header`, `Main`, and `Footer`).
- `src/components/header/*` — `Header`, `DesktopNavbar`, `MobileNavbar`, `ModeToggle`, and `Logo` com's.
- `src/components/pages/hero/*` — Hero section (`Hero`, `HeroCard`, `HeroText`).
- `src/components/pages/apps/Apps.tsx` — App cards and demo/github links.
- `src/components/footer/Footer.tsx` — Footer with avatar and contact blurb.
- `src/components/ui/*` — Reusable UI elements: `Card`, `Button`, `Input`, `SectionHeading`, etc.
- `src/lib/email.ts` — Server-side function to send email using `resend`.
- `src/lib/formSchema.ts` — Zod schema for contact form validation.
- `src/content/*` — Structured content (apps, skills, header, footer text) used by components.

Notes and environment
- The contact form uses `RESEND_API_KEY` for the `resend` service. Keep it secret and add it to your environment (e.g., `.env.local`).
- The project uses `next-themes` to toggle light/dark mode.
- Images referenced under `public/` (e.g., `image.jpg`, `og-image.jpg`) are used across the site.

If you want, I can:
- Tweak the README wording or add a short cover letter section oriented to recruiters.
- Add a `CONTRIBUTING.md` or deployment instructions to Vercel.

Contact
- The site includes a contact form wired to send emails to the configured address. You can also find contact details in `src/content/footer/footer`.

---
