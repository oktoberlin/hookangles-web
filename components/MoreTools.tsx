import SectionRule from "./SectionRule";
import { TOOLS } from "@/lib/content";

export default function MoreTools() {
  return (
    <section id="tools" className="wrap scroll-mt-[70px] pt-[clamp(72px,10vw,120px)]">
      <SectionRule n="03" />
      <div className="mb-[clamp(24px,4vw,36px)] flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <h2 className="m-0 max-w-[16ch] text-balance font-display text-[clamp(34px,4.6vw,54px)] font-normal leading-[1.02] tracking-[-0.02em]">
          More small tools for the work after the hook.
        </h2>
        <p className="m-0 max-w-[38ch] text-[15.5px] leading-[1.55] text-muted">
          Same idea, different job: one thing done well, no bloat.
        </p>
      </div>
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))]">
        {TOOLS.map((t) => (
          <a
            key={t.name}
            href={t.href}
            className="flex min-h-[170px] flex-col gap-3 rounded-lg border border-line bg-surface p-[22px] text-ink no-underline transition-[border-color,transform] duration-150 hover:-translate-y-0.5 hover:border-ink hover:text-ink"
          >
            <span className="flex items-baseline justify-between gap-3">
              <span className="font-display text-[26px] leading-none">{t.name}</span>
              <span aria-hidden="true" className="text-lg leading-none text-accent">↗</span>
            </span>
            <span className="text-pretty text-[15px] leading-normal text-muted">{t.desc}</span>
            <span className="mt-auto font-mono text-xs leading-none text-muted">{t.host}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
