# Hook Angles — Plan

## Scope now: landing page only
hookangles.com is a static landing page ported from `design/Hook Angles.dc.html`:
header, hero with generator preview, sample output, how it works, more tools, email capture, footer.

- Stack: Next.js 15 + React 19 + TypeScript + Tailwind v4 (design tokens as CSS variables). No component library.
- "Generate angles" is disabled ("Launching soon") until `NEXT_PUBLIC_TOOL_URL` is set.
- No API route, model call, or rate limit in this repo.

## Later: generator app (separate subdomain, e.g. angles.hookangles.com)
Not started. Intended shape, reusing this repo's tokens and components:

```text
Browser form → POST /api/angles → validate + rate limit (20/hour/IP)
             → Requesty (router.requesty.ai/v1, as in reply-app) → zod-validated JSON → angle cards
```

Request `{ text: 50–4000 chars, tone: Direct|Friendly|Bold|Formal, only?, avoid? }`;
response `{ angles: [{ label, hook, why }] }` (6–8 items). Errors: 400, 429 (with retry minutes), 502 (after one retry).
Env: `REQUESTY_API_KEY`, `REQUESTY_BASE_URL`, `REQUESTY_MODEL`.
When it ships, set `NEXT_PUBLIC_TOOL_URL` here.
