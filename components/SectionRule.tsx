export default function SectionRule({ n }: { n: string }) {
  return (
    <div className="mb-7 flex items-center gap-3.5">
      <span className="label-mono text-accent">∠ {n}</span>
      <span className="h-px flex-1 bg-line-strong" />
    </div>
  );
}
