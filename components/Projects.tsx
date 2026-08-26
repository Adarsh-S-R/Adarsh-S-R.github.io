import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="w-full py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionHeader index="04" eyebrow="Building" title="Projects" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <div key={p.name} className="card card-hover flex flex-col p-6">
              <h3 className="font-display text-lg text-foreground">{p.name}</h3>
              <p className="mt-1 text-[13.5px] font-medium text-accent">{p.tagline}</p>
              <p className="mt-3 flex-1 text-[13.5px] leading-[1.6] text-foreground-soft">{p.desc}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-[12px] text-foreground-muted">{p.tags.join(" · ")}</p>
                {"links" in p && p.links && (
                  <div className="flex gap-3 text-[12.5px]">
                    {p.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground-soft underline decoration-border-strong underline-offset-4 hover:text-accent"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
