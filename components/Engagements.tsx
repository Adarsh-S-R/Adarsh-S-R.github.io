import { SectionHeader } from "@/components/SectionHeader";
import { engagementNotes, engagements } from "@/lib/content";

export function Engagements() {
  return (
    <section id="engagements" className="w-full py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionHeader index="03" eyebrow="Client work" title="Engagements" />
        <p className="-mt-4 mb-10 max-w-[62ch] text-[14.5px] leading-[1.6] text-foreground-muted">
          Most engagements are covered by NDA, so specifics stay general. What follows is the shape of the work.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {engagements.map((e) => (
            <div key={e.n} className="card card-hover p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-xl text-foreground-muted">{e.n}</span>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-[11.5px] font-medium text-accent">
                  {e.scope}
                </span>
              </div>
              <h3 className="mt-3 text-[15px] font-medium text-foreground">{e.sector}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-foreground-soft">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {engagementNotes.map((note) => (
            <div key={note.title} className="border-l-2 border-accent/30 pl-4">
              <h3 className="text-[13.5px] font-medium text-foreground">{note.title}</h3>
              <p className="mt-1 text-[13px] leading-[1.55] text-foreground-muted">{note.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
