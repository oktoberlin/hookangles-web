"use client";

import { useRef, useState } from "react";
import { SAMPLE_ANGLES } from "@/lib/content";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const t = document.createElement("textarea");
    t.value = text;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    t.remove();
  }
}

export default function SampleResults() {
  const [copied, setCopied] = useState(-1);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const copyTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  function showToast(msg: string) {
    clearTimeout(toastTimer.current);
    setToast(msg);
    toastTimer.current = setTimeout(() => setToast(""), 1800);
  }

  return (
    <section aria-label="Sample results" className="wrap pt-[clamp(28px,4vw,40px)]">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="label-mono m-0 text-muted">
          <span className="text-accent">∠</span> Sample output · {SAMPLE_ANGLES.length} angles · Direct
        </p>
        <button
          type="button"
          onClick={async () => {
            await copyText(SAMPLE_ANGLES.map((a) => `${a.label}: ${a.hook}`).join("\n\n"));
            showToast(`All ${SAMPLE_ANGLES.length} angles copied`);
          }}
          className="h-9 cursor-pointer rounded-md border border-ink bg-ink px-3.5 text-[13.5px] font-medium leading-none text-bg"
        >
          Copy all
        </button>
      </div>
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),1fr))]">
        {SAMPLE_ANGLES.map((a, i) => {
          const on = copied === i;
          return (
            <article key={a.label} className="flex flex-col gap-3.5 rounded-lg border border-line bg-surface p-[22px] hover:border-line-strong">
              <header className="label-mono flex items-baseline gap-2.5">
                <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-ink">{a.label}</span>
              </header>
              <p className="m-0 text-pretty font-display text-[21px] leading-[1.36] tracking-[-0.005em]">{a.hook}</p>
              <p className="m-0 text-pretty text-sm leading-normal text-muted">
                <span className="mr-1.5 font-mono text-[11px] font-medium uppercase leading-none tracking-[0.08em] text-ink">Why it works</span>
                {a.why}
              </p>
              <div className="mt-auto flex gap-2 pt-1">
                <button
                  type="button"
                  aria-label={`Copy the ${a.label} hook`}
                  onClick={async () => {
                    await copyText(a.hook);
                    clearTimeout(copyTimer.current);
                    setCopied(i);
                    copyTimer.current = setTimeout(() => setCopied(-1), 1600);
                    showToast("Copied to clipboard");
                  }}
                  className={`h-[34px] cursor-pointer rounded-[5px] border border-line-strong px-[13px] text-[13px] font-medium leading-none hover:border-ink ${on ? "bg-accent text-on-accent" : "bg-transparent text-ink"}`}
                >
                  {on ? "Copied" : "Copy"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-50 flex items-center gap-2.5 whitespace-nowrap rounded-md bg-ink px-4 py-[11px] font-mono text-[13px] font-medium leading-none text-bg shadow-[0_10px_30px_-10px_rgba(0,0,0,.45)]"
          style={{ animation: "ha-toast .18s ease-out", transform: "translateX(-50%)" }}
        >
          <span className="text-accent">✓</span>
          {toast}
        </div>
      )}
    </section>
  );
}
