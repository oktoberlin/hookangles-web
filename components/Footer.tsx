const UPWORK = "https://www.upwork.com/freelancers/~01d3f113442000dd06";
const LINKEDIN = "https://www.linkedin.com/in/oktoberlin-tampubolon-b621b711b/";

const linkBtn =
  "inline-flex h-9 items-center gap-1.5 rounded-md border border-line-strong px-3.5 text-[13.5px] font-medium leading-none text-ink no-underline hover:border-ink hover:text-ink";

export default function Footer() {
  return (
    <footer className="wrap flex w-full flex-wrap items-end justify-between gap-x-10 gap-y-5 pb-10 pt-12">
      <div className="flex max-w-[46ch] flex-col gap-2.5">
        <span className="font-display text-xl leading-none">Hook Angles</span>
        <p className="m-0 text-sm leading-normal text-muted">A free, independent tool for people who write a lot of first lines.</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <a href={UPWORK} target="_blank" rel="noreferrer" className={linkBtn}>
            Upwork <span aria-hidden="true" className="text-accent">↗</span>
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className={linkBtn}>
            LinkedIn <span aria-hidden="true" className="text-accent">↗</span>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-5 font-mono text-[12.5px] leading-none text-muted">
        <a href="mailto:oktoberlin@gmail.com" className="text-ink">oktoberlin@gmail.com</a>
        <span>© 2026 Hook Angles</span>
      </div>
    </footer>
  );
}
