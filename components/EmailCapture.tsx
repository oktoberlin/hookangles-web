"use client";

import { useState } from "react";

// UI only: no backend yet, so nothing is stored or sent.
export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section aria-label="Newsletter" className="wrap pt-[clamp(64px,8vw,96px)]">
      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5 border-y border-line-strong py-7">
        <div className="flex max-w-[48ch] flex-col gap-1.5">
          <p className="m-0 text-[17px] font-semibold leading-[1.3]">Get new angle packs</p>
          <p className="m-0 text-[14.5px] leading-normal text-muted">
            One short email when we add a new set of angles. About monthly. Totally optional — the tool works without it.
          </p>
        </div>
        {done ? (
          <p role="status" className="m-0 font-mono text-sm font-medium leading-[1.4] text-accent">✓ You’re on the list. See you next pack.</p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            className="flex min-w-[min(100%,300px)] max-w-[440px] flex-1 gap-2"
          >
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@studio.com"
              className="h-[42px] min-w-0 flex-1 rounded-md border border-line-strong bg-surface px-3.5 text-[15px] text-ink focus:border-ink focus:shadow-[0_0_0_3px_var(--accent-soft)]"
            />
            <button type="submit" className="h-[42px] cursor-pointer rounded-md border border-ink bg-transparent px-4 text-sm font-semibold leading-none text-ink hover:bg-ink hover:text-bg">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
