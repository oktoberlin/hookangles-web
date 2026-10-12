export default function Footer() {
  return (
    <footer className="wrap flex w-full flex-wrap items-end justify-between gap-x-10 gap-y-5 pb-10 pt-12">
      <div className="flex max-w-[46ch] flex-col gap-2.5">
        <span className="font-display text-xl leading-none">Hook Angles</span>
        <p className="m-0 text-sm leading-normal text-muted">A free, independent tool for people who write a lot of first lines.</p>
      </div>
      <div className="flex flex-wrap items-center gap-5 font-mono text-[12.5px] leading-none text-muted">
        <a href="mailto:hello@hookangles.com" className="text-ink">hello@hookangles.com</a>
        <span>© 2026 Hook Angles</span>
      </div>
    </footer>
  );
}
