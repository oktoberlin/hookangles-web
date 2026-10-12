import ThemeToggle from "./ThemeToggle";

const NAV = [
  { href: "#tool", label: "Tool" },
  { href: "#how", label: "How it works" },
  { href: "#tools", label: "More tools" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-[10px]">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3.5">
        <a href="#top" aria-label="Hook Angles home" className="flex items-center gap-2.5 no-underline">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-none text-accent">
            <path d="M3 20.5H21.5M3 20.5L18 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            <path d="M9.5 20.5A6.5 6.5 0 0 0 7.6 15.9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[21px] leading-none tracking-[-0.01em]">Hook Angles</span>
            <span className="mt-1 font-mono text-[10.5px] leading-none tracking-[0.02em] text-muted">hookangles.com</span>
          </span>
        </a>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-1">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="rounded-[4px] px-2.5 py-[9px] text-sm font-medium leading-none text-ink no-underline hover:bg-surface-2 hover:text-ink">
              {n.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
