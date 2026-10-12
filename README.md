# hookangles-web

Landing page for hookangles.com (Next.js 15, React 19, TypeScript, Tailwind v4).

The Hook Angles generator will live on its own subdomain (not built yet). Until then the
"Generate angles" button is disabled and the page shows a static sample output.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Enabling the generator button

Set `NEXT_PUBLIC_TOOL_URL` (see `.env.example`) to the generator's URL. The button becomes a link.

## Notes

- The "Get new angle packs" email form is UI only; nothing is stored or sent.
- `design/Hook Angles.dc.html` is the original Claude Design file, kept for reference.
- `DESIGN_PROMPT.md` is the prompt that produced it; `PLAN.md` has the plan.
