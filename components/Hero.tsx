import Image from "next/image";

const STATS = [
  { value: "200+", label: "Findings reported" },
  { value: "14+", label: "Client engagements" },
  { value: "Top 1%", label: "CTFtime, India" },
  { value: "50+", label: "Challenges authored" },
  { value: "70+", label: "Teams at CTF 2026" },
];

export function Hero() {
  return (
    <section id="hero" className="w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.35fr_0.65fr] md:items-stretch">
          <div className="flex flex-col gap-6 md:mt-10">
            <p className="font-display text-[22px] text-foreground-soft sm:text-[24px]">Hey 👋, I&rsquo;m Adarsh</p>

            <h1 className="font-display font-normal text-[2.5rem] leading-[1.1] text-foreground md:text-[3.25rem]">
              Security Consultant
            </h1>

            <p className="max-w-[62ch] text-[16px] leading-[1.65] text-foreground-soft">
              Security consultant and researcher specialising in web, API, and Android penetration
              testing and authorization testing. 200+ findings across 14+ client engagements. Founder
              and lead of a top 1% nationally ranked CTF team.
            </p>

            <div className="mt-1 flex flex-wrap items-center gap-3 md:mt-auto">
              <a href="#contact" className="btn-primary">
                Contact
              </a>
              <a href="#experience" className="btn-outline">
                See the work
              </a>
            </div>
          </div>

          <div className="photo-halftone relative mx-auto aspect-square w-full max-w-90 overflow-hidden rounded-2xl border border-border md:mx-0 md:ml-auto md:self-end">
            <Image src="/photos/A_sq.png" alt="Adarsh SR, application security consultant and founder of TRIADA CTF" fill sizes="(min-width: 768px) 22rem, 80vw" className="object-cover" priority />
          </div>
        </div>

        <div className="mt-12 hidden border-t border-border pt-8 md:flex md:flex-wrap md:items-start md:justify-between md:gap-y-6">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={i > 0 ? "stat-divider pl-8" : ""}>
              <p className="font-display text-2xl text-foreground">{stat.value}</p>
              <p className="mt-0.5 whitespace-nowrap text-[12.5px] text-foreground-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="marquee mt-12 border-t border-border pt-8 md:hidden">
          <div className="marquee-track">
            {[...STATS, ...STATS].map((stat, i) => (
              <div key={i} className={`shrink-0 ${i > 0 ? "stat-divider ml-8 pl-8" : ""}`}>
                <p className="font-display text-2xl text-foreground">{stat.value}</p>
                <p className="mt-0.5 whitespace-nowrap text-[12.5px] text-foreground-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
