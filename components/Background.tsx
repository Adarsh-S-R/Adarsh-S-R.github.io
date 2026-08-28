import { SectionHeader } from "@/components/SectionHeader";
import { summary } from "@/lib/content";

export function Background() {
  return (
    <section id="about" className="w-full py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionHeader index="01" eyebrow="About" title="Summary" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
          <span aria-hidden="true" className="font-display hidden text-6xl leading-none text-accent md:block">
            &ldquo;
          </span>
          <p className="max-w-[85ch] text-[15.5px] leading-[1.75] text-foreground-soft">{summary}</p>
        </div>
      </div>
    </section>
  );
}
