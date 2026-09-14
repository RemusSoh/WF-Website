import { SectionReveal } from "./SectionReveal";
import { services } from "./siteContent";

export function CompanySummary() {
  return (
    <section className="bg-[#071827] px-5 py-24 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f0a45f]">
              What WF2 Does
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              A local construction partner committed to safety, quality, and
              reliability.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/70">
            WF2 Engineering Pte Ltd provides structural, civil, and general
            building works. The team focuses on clear communication, proper
            planning, and strict safety practices across every site.
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <SectionReveal key={service.title} delay={index * 0.08}>
                <article className="min-h-full bg-[#0d2b42] p-7">
                  <Icon className="h-7 w-7 text-[#f0a45f]" aria-hidden="true" />
                  <h3 className="mt-8 text-xl font-black text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/66">
                    {service.description}
                  </p>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
