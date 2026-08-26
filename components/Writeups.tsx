import { SectionHeader } from "@/components/SectionHeader";
import { links } from "@/lib/content";

export function Writeups() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionHeader index="07" eyebrow="Writeups" title="Notes from the trenches" />

        <div className="card flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <p className="max-w-[56ch] text-[14.5px] leading-[1.65] text-foreground-muted">
            Technical writeups on CTF challenge solutions and vulnerability research, covering the
            approach, exploitation path, and what mattered.
          </p>
          <a href={links.writeups} target="_blank" rel="noopener noreferrer" className="btn-outline shrink-0">
            Read writeups
          </a>
        </div>
      </div>
    </section>
  );
}
