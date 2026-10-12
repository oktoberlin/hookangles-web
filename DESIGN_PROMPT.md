# Design prompt for Claude Design — hookangles.com

Paste everything below the line into Claude Design.

---

Design the website for **hookangles.com**: a single-page site whose main attraction is a free, working tool called **Hook Angles**. It doubles as the hub for a small portfolio of other tools.

## What the product does
A visitor pastes an offer, a service description, or a job post. The tool returns 6–8 distinct opening-hook angles they can use in a proposal, cold email, or ad. Each angle has:
- an angle label (Pain, Contrarian, Proof, Curiosity, Specific number, Story, Question, Risk reversal)
- a one-to-two sentence hook, written ready to send
- a short "why it works" note
- a copy button, and a "regenerate this one" button

No login. Free to use. A fair-use rate limit applies.

## Audience
Freelancers (Upwork-style), small agencies, and indie founders who write many proposals and outreach messages and are tired of generic openers.

## Visual direction
- Sharp, editorial, confident. Think a well-made writer's tool, not an "AI product".
- Avoid purple/blue AI gradients, glowing orbs, robot imagery, and stock photos.
- A subtle motif built from hook and angle geometry (a fishing hook curve, an acute angle), used sparingly in the logo, dividers, and empty states.
- One accent color on a neutral base. Light and dark themes, both polished.
- A strong type pairing: an expressive display face for headlines, a clean sans for UI, and a mono for small labels.
- Mobile-first; the tool must be comfortable to use on a phone.

## Page structure
1. **Header**: wordmark "Hook Angles" (hookangles.com), small nav (Tool, How it works, More tools), theme toggle.
2. **Hero with the tool above the fold**: a headline and one-line subhead, then the input panel directly under it (large textarea with a sample-fill link, tone selector with 3–4 options, a "Generate angles" primary button, character counter).
3. **Results area**: a grid or stack of angle cards. Design all states: empty, loading (skeleton), success, error, and rate-limited. Show a "copy all" action.
4. **How it works**: 3 short steps, plus one before/after example (a weak generic opener next to a sharper angle-based one).
5. **More tools**: four cards linking to sibling products. Each has a name, a one-line description, and an arrow link:
   - Reply — reply.hookangles.com — drafts replies to customer emails
   - Handoff — handof.hookangles.com — project handoff between people
   - Invoices — invoices.hookangles.com — simple invoicing with test payments
   - Payroll — payroll.hookangles.com — small-team payroll
6. **Optional email capture**: "Get new angle packs", clearly non-blocking and low-key.
7. **Footer**: short about line, contact link, copyright.

## Deliverables I want back
- Desktop and mobile layouts for the full page.
- Design tokens: color palette (light and dark), type scale, spacing, radii, shadows.
- A component list with variants: button, input panel, angle card (all states), tool card, nav, toast for "Copied".
- Final copy for every section (no lorem ipsum), including microcopy for error and rate-limit states.

## Constraints
- Must translate cleanly to Next.js with Tailwind CSS.
- Accessibility: WCAG AA contrast, visible focus states, keyboard-operable copy buttons, reduced-motion respected.
- Keep the page light: no heavy hero video or large images.
