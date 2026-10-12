# Hook Angles — Implementation Plan

## 1. Goal
Ship hookangles.com: one page with a free Hook Angles generator plus links to the sibling tools (reply, handof, invoices, payroll subdomains).

Done when a visitor can paste text, get 6–8 angles in a few seconds, copy any of them, and click through to the other tools.

## 2. Architecture
Single Next.js 15 app (React 19, TypeScript, Tailwind). No database and no login for v1.

```text
Browser form
   ↓ POST /api/angles
Route handler (app/api/angles/route.ts)
   ↓ validate input, rate limit by IP
Requesty (OpenAI-compatible, router.requesty.ai/v1)
   ↓ JSON output, schema-validated
Browser renders angle cards
```

The model call lives in the route handler only, so the API key never reaches the browser. This follows the same Requesty setup as `reply-app`.

## 3. API contract
`POST /api/angles`

Request: `{ "text": string (50–4000 chars), "tone": "direct" | "friendly" | "bold" | "formal" }`

Response: `{ "angles": [{ "label": string, "hook": string, "why": string }] }` with 6–8 items.

Errors: 400 invalid input, 429 rate limited, 502 model failed or returned bad JSON (retry once, then fail).

Regenerate-one reuses the same endpoint with an optional `"only": "<label>"` field.

## 4. Phases
1. **Design**: run `DESIGN_PROMPT.md` through Claude Design and pick a direction.
2. **Scaffold**: Next.js app, Tailwind, design tokens from the chosen design, static page with the tool UI.
3. **Tool**: route handler, prompt, JSON validation (zod), rate limit (in-memory first; Upstash/Vercel KV if abuse appears).
4. **Polish**: loading/error/empty states, copy buttons, theme toggle, sibling-tool cards, metadata and OG image.
5. **Deploy**: Vercel project, set env vars, point hookangles.com (apex + www redirect) at it. Subdomains stay untouched.

## 5. Prompt notes
System prompt asks for angles that are meaningfully different from each other, grounded only in details present in the input (no invented stats or client names), and returns strict JSON. Keep temperature moderate (~0.8) for variety.

## 6. Verification
- Unit test the validator with good and malformed model output.
- Hit the route with: valid input, too-short input, 4001 chars, and 20 rapid requests (expect 429).
- Manual pass on a phone-width viewport and in light and dark themes.
- Confirm the sibling subdomain links resolve.

## 7. Out of scope for v1
Accounts, saved history, payments, email sending. The email capture is a form that stores addresses in a simple provider list, added only if wanted.
