import GeneratorPreview from "./GeneratorPreview";

export default function Hero() {
  return (
    <section id="tool" className="wrap scroll-mt-20 pt-[clamp(40px,7vw,88px)]">
      <p className="mb-5 flex flex-wrap gap-2.5 font-mono text-xs font-medium uppercase leading-[1.4] tracking-[0.08em] text-muted">
        <span className="text-accent">∠ Free tool</span>
        <span>No login</span>
        <span>6–8 angles per brief</span>
      </p>
      <h1 className="m-0 max-w-[15ch] text-balance font-display text-[clamp(42px,7.2vw,88px)] font-normal leading-[0.98] tracking-[-0.025em]">
        Stop opening with <span className="text-accent">“I came across your post.”</span>
      </h1>
      <p className="mt-[22px] max-w-[56ch] text-pretty text-[clamp(17px,1.6vw,19px)] leading-normal text-muted">
        Paste an offer, a service, or a job post. Get 6–8 distinct opening hooks for proposals, cold emails, and ads — each one ready to send.
      </p>
      <GeneratorPreview />
    </section>
  );
}
