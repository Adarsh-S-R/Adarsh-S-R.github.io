import { SectionHeader } from "@/components/SectionHeader";
import { experience, links } from "@/lib/content";

const ORG_LINKS: Record<string, string> = {
  TRIADA: links.triada,
  VULNCON: links.vulncon,
};

export function Experience() {
  return (
    <section id="experience" className="w-full py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionHeader index="02" eyebrow="Career" title="Experience" />

        <div className="relative flex flex-col gap-8 pl-6 before:absolute before:top-2 before:bottom-2 before:left-[3px] before:w-px before:bg-border">
          {experience.map((job) => (
            <div key={job.role + job.date} className="relative">
              <span className="absolute top-1.5 -left-6 h-[7px] w-[7px] rounded-full bg-accent" aria-hidden="true" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <h3 className="text-[15.5px] font-medium text-foreground">
                  {job.role}
                  {job.org !== "Offenlix Labs" && ORG_LINKS[job.org] && (
                    <span className="font-normal text-foreground-muted">
                      {" "}
                      at{" "}
                      <a
                        href={ORG_LINKS[job.org]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-border-strong underline-offset-2 hover:text-accent"
                      >
                        {job.org}
                      </a>
                    </span>
                  )}
                  {job.org !== "Offenlix Labs" && !ORG_LINKS[job.org] && (
                    <span className="font-normal text-foreground-muted"> at {job.org}</span>
                  )}
                </h3>
                <span className="text-[12.5px] text-foreground-muted">{job.date}</span>
              </div>

              <div className="mt-2.5 flex flex-wrap gap-2">
                {job.bullets.map((bullet) => (
                  <span
                    key={bullet}
                    className="border border-border px-2.5 py-1 text-[12.5px] leading-none text-foreground-soft"
                  >
                    {bullet}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
