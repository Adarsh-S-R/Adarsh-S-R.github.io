export function SectionHeader({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-2">{eyebrow}</p>
          <h2 className="font-display text-[1.75rem] text-foreground">{title}</h2>
        </div>
        <span aria-hidden="true" className="font-display hidden text-5xl leading-none text-border-strong sm:block">
          {index}
        </span>
      </div>
      <div className="mt-4 h-px bg-gradient-to-r from-accent via-border to-transparent" />
    </div>
  );
}
