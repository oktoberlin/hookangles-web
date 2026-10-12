import SectionRule from "./SectionRule";

const STEPS = [
  { n: "01", title: "Paste the brief", body: "A job post, your offer, or a few lines about your service. Up to 4,000 characters." },
  { n: "02", title: "Pick a tone", body: "Direct, friendly, bold, or formal. Every angle is written from details in your text — nothing invented." },
  { n: "03", title: "Take the one that fits", body: "Copy it, tweak a word, send. Don’t love one? Regenerate just that angle." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="wrap scroll-mt-[70px] pt-[clamp(72px,10vw,120px)]">
      <SectionRule n="02" />
      <h2 className="m-0 mb-[clamp(28px,4vw,44px)] max-w-[18ch] text-balance font-display text-[clamp(34px,4.6vw,54px)] font-normal leading-[1.02] tracking-[-0.02em]">
        Three steps to a first line worth reading.
      </h2>
      <ol className="m-0 grid list-none gap-0 border-t border-line p-0 [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
        {STEPS.map((s) => (
          <li key={s.n} className="flex flex-col gap-2.5 border-b border-line py-6 pr-6">
            <span className="font-mono text-xs font-medium leading-none text-accent">{s.n}</span>
            <p className="m-0 text-lg font-semibold leading-[1.3]">{s.title}</p>
            <p className="m-0 text-pretty text-[15px] leading-[1.55] text-muted">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-[clamp(32px,5vw,56px)] grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
        <figure className="m-0 flex flex-col gap-4 rounded-[10px] border border-line bg-surface-2 p-[clamp(22px,3vw,32px)]">
          <figcaption className="label-mono text-muted">Before · the generic opener</figcaption>
          <blockquote className="m-0 font-display text-[21px] leading-[1.4] text-muted line-through decoration-[color-mix(in_oklab,var(--muted)_55%,transparent)] decoration-1">
            Hi! I came across your job posting and I’m very interested. I have 5+ years of copywriting experience and I’m confident I’d be a great fit.
          </blockquote>
          <p className="m-0 mt-auto text-sm leading-normal text-muted">Could be sent to any client. Says nothing about theirs.</p>
        </figure>
        <figure className="m-0 flex flex-col gap-4 rounded-[10px] border border-ink bg-surface p-[clamp(22px,3vw,32px)]">
          <figcaption className="label-mono text-accent">After · Specific number angle</figcaption>
          <blockquote className="m-0 font-display text-[21px] leading-[1.4] text-ink">
            Twelve pages in three weeks is four a week. Here’s the order I’d write them in so the first four move your 1.1% before the rest are drafted.
          </blockquote>
          <p className="m-0 mt-auto text-sm leading-normal text-muted">Uses their numbers, shows a plan, earns the next sentence.</p>
        </figure>
      </div>
    </section>
  );
}
