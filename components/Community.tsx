import { SectionHeader } from "@/components/SectionHeader";
import { communityEvents, communityStats, links } from "@/lib/content";

export function Community() {
  return (
    <section id="community" className="w-full py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionHeader index="05" eyebrow="Community" title="TRIADA" />
        <p className="-mt-4 mb-8 max-w-[62ch] text-[14.5px] leading-[1.6] text-foreground-muted">
          I founded TRIADA in 2024 and lead it, running the university&rsquo;s CTF team and its national
          competitions.
        </p>

        <div className="card grid grid-cols-1 divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
          {communityStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-5 text-center sm:text-left ${i > 0 ? "sm:stat-divider sm:pl-8 sm:ml-2" : ""}`}
            >
              <p className="font-display text-xl text-accent">{stat.value}</p>
              <p className="mt-1 text-[12.5px] text-foreground-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {communityEvents.map((event) => (
            <div key={event.name} className="card p-6">
              <h3 className="font-display text-lg text-foreground">{event.name}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-foreground-soft">{event.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={links.triada}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13.5px] text-foreground-soft underline decoration-border-strong underline-offset-4 hover:text-accent"
          >
            triada.in
          </a>
          <a
            href={links.ctftime}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13.5px] text-foreground-soft underline decoration-border-strong underline-offset-4 hover:text-accent"
          >
            TRIADA on CTFtime
          </a>
        </div>
      </div>
    </section>
  );
}
