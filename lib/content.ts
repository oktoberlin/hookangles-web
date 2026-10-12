export const SAMPLE =
  "We're a 6-person Shopify brand selling refillable cleaning products. Our product pages convert at 1.1% and we think the copy is the problem. Looking for a conversion copywriter to rewrite 12 product pages and our homepage hero over the next 3 weeks. Budget is $2,500. Please share ecommerce examples and tell us how you'd approach the first page.";

export const MAX_CHARS = 4000;

export const TONES = ["Direct", "Friendly", "Bold", "Formal"] as const;

export type Angle = { label: string; hook: string; why: string };

export const SAMPLE_ANGLES: Angle[] = [
  { label: "Pain", hook: "At 1.1%, almost everyone who reads your product pages leaves anyway. I'd start with the page that gets the most traffic, not the one you like least.", why: "Names their exact number back to them, then shows judgment." },
  { label: "Contrarian", hook: "I don't think the copy is the whole problem. At 1.1% it's usually the first screen above the price — I'd fix that before touching the other eleven pages.", why: "Mild disagreement signals expertise; most applicants just agree." },
  { label: "Proof", hook: "Below are two ecommerce pages I rewrote, before and after, side by side — so you can judge the approach on pages like yours, not on my say-so.", why: "Lets the work argue for you instead of adjectives." },
  { label: "Curiosity", hook: "There's one line missing from most refillable product pages, and it's probably the one costing you the most sales. I'll point to it on your first page.", why: "Opens a loop only a reply can close." },
  { label: "Specific number", hook: "Twelve pages in three weeks is four a week. Here's the order I'd write them in so the first four move your 1.1% before the rest are drafted.", why: "Turns their brief into a plan they can picture." },
  { label: "Story", hook: "A shopper likes the bottle, then stalls at 'will this refill fit what I have?' I'd write for that exact moment first.", why: "A small, concrete scene beats a list of skills." },
  { label: "Question", hook: "When someone leaves a product page today, do you know whether it's price, the refill system, or the copy that loses them?", why: "A sharp question proves you've already started thinking." },
  { label: "Risk reversal", hook: "Let me rewrite one page first. If it doesn't beat the current version in a two-week test, you don't owe me for the other eleven.", why: "Removes the risk of saying yes to a stranger." },
];

export const TOOLS = [
  { name: "Reply", host: "reply.hookangles.com", desc: "Drafts replies to customer emails in your voice." },
  { name: "Handoff", host: "handof.hookangles.com", desc: "Clean project handoffs between people, nothing dropped." },
  { name: "Invoices", host: "invoices.hookangles.com", desc: "Simple invoicing, with test payments to try it first." },
  { name: "Payroll", host: "payroll.hookangles.com", desc: "Payroll for small teams, without the enterprise suite." },
].map((t) => ({ ...t, href: `https://${t.host}` }));
