"use client";

import { useState } from "react";
import { MAX_CHARS, SAMPLE, TONES } from "@/lib/content";
import { TOOL_URL } from "@/lib/config";

const btnBase =
  "flex h-[46px] items-center gap-2.5 rounded-md border-0 px-5 text-[15px] font-semibold leading-none";

export default function GeneratorPreview() {
  const [text, setText] = useState("");
  const [tone, setTone] = useState<(typeof TONES)[number]>("Direct");
  const len = text.length;

  return (
    <div className="mt-[clamp(28px,4vw,44px)] rounded-[10px] border border-line-strong bg-surface shadow-panel">
      <div className="flex flex-wrap items-center justify-between gap-3 px-[18px] pt-3.5">
        <label htmlFor="brief" className="label-mono text-muted">Your brief</label>
        <div className="flex gap-3.5">
          <button type="button" onClick={() => setText(SAMPLE)} className="cursor-pointer border-0 bg-transparent py-1 text-[13px] font-medium leading-none text-accent underline underline-offset-[3px]">
            Try a sample job post
          </button>
          {len > 0 && (
            <button type="button" onClick={() => setText("")} className="cursor-pointer border-0 bg-transparent py-1 text-[13px] font-medium leading-none text-muted">
              Clear
            </button>
          )}
        </div>
      </div>
      <textarea
        id="brief"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-describedby="brief-help"
        placeholder="Paste the job post, your offer, or a description of your service. Real details help most — budget, deadline, numbers, who it’s for."
        className="block min-h-[clamp(170px,22vw,210px)] w-full resize-y border-0 bg-transparent px-[18px] pb-4 pt-3 text-[17px] leading-[1.55] text-ink"
      />
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-[18px] py-3.5">
        <div role="radiogroup" aria-label="Tone" className="flex flex-wrap items-center gap-2.5">
          <span className="label-mono text-muted">Tone</span>
          <div className="flex flex-wrap gap-0.5 rounded-[7px] bg-surface-2 p-[3px]">
            {TONES.map((t) => {
              const on = t === tone;
              return (
                <button
                  key={t}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setTone(t)}
                  className={`cursor-pointer rounded-[5px] border-0 px-[13px] py-2 text-sm font-medium leading-none ${on ? "bg-surface text-ink shadow-[0_1px_2px_rgba(0,0,0,.12),0_0_0_1px_var(--line)]" : "bg-transparent text-muted"}`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <span id="brief-help" className={`font-mono text-[12.5px] leading-none ${len > MAX_CHARS ? "text-danger" : "text-muted"}`}>
            {len.toLocaleString()} / {MAX_CHARS.toLocaleString()}
          </span>
          {TOOL_URL ? (
            <a href={TOOL_URL} className={`${btnBase} bg-ink text-bg no-underline hover:bg-accent hover:text-on-accent`}>
              Generate angles
            </a>
          ) : (
            <button type="button" disabled aria-disabled="true" className={`${btnBase} cursor-not-allowed bg-ink text-bg opacity-50`}>
              Launching soon
            </button>
          )}
        </div>
      </div>
      {!TOOL_URL && (
        <p className="m-0 border-t border-line px-[18px] py-3 font-mono text-[12.5px] leading-[1.4] text-muted">
          The generator is opening on its own page soon. Below is a sample of what you’ll get.
        </p>
      )}
    </div>
  );
}
