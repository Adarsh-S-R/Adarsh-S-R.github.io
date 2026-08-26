import { certifications, education } from "@/lib/content";

export function EducationCerts() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-3 sm:px-8">
        <div className="card p-6 sm:col-span-2">
          <p className="eyebrow mb-3">Education</p>
          <p className="text-[15px] font-medium text-foreground">{education.org}</p>
          <p className="mt-1 text-[13.5px] text-foreground-soft">{education.detail}</p>
          <p className="mt-1 text-[12.5px] text-foreground-muted">
            {education.location} &middot; {education.date}
          </p>
        </div>

        <div className="card p-6">
          <p className="eyebrow mb-3">Certifications</p>
          <ul className="flex flex-col gap-3">
            {certifications.map((c) => (
              <li key={c.org}>
                <p className="text-[13.5px] font-medium text-foreground">{c.cred}</p>
                <p className="text-[12px] text-foreground-muted">{c.org}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
