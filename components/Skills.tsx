import { achievements, skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="section-rule mb-6">
              <p className="eyebrow mb-2">Toolkit</p>
              <h2 className="font-display text-[1.75rem] text-foreground">Skills</h2>
            </div>
            <div className="flex flex-col gap-4">
              {skillGroups.map((group) => (
                <div key={group.title} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="w-32 shrink-0 text-[13.5px] font-medium text-foreground">{group.title}</dt>
                  <dd className="text-[14px] leading-[1.7] text-foreground-soft">{group.items.join(", ")}</dd>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="section-rule mb-6">
              <p className="eyebrow mb-2">Track record</p>
              <h2 className="font-display text-[1.75rem] text-foreground">Achievements</h2>
            </div>
            <ul className="flex flex-col gap-2.5">
              {achievements.map((item) => (
                <li key={item} className="flex gap-2.5 text-[14px] leading-[1.6] text-foreground-soft">
                  <span className="mt-2.5 h-[3px] w-[3px] shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
