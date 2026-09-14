import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImageFrame } from "@/components/ImageFrame";
import { SectionReveal } from "@/components/SectionReveal";
import { services } from "@/components/siteContent";

export const metadata: Metadata = {
  title: "Services | WF2 Engineering",
  description:
    "Structural, civil, general building, renovation, upgrading, safety and compliance services by WF2 Engineering.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#071827] text-white">
      <section className="px-5 pb-16 pt-36 sm:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <SectionReveal className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f0a45f]">
              Services
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
              Construction and engineering support for practical site delivery.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              From structural works to general building, WF2 Engineering
              supports projects from planning through handover with clear
              communication, safety, and workmanship.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 === 1;

            return (
              <SectionReveal key={service.title}>
                <article className="grid overflow-hidden border border-white/10 bg-[#0d2b42] lg:grid-cols-2">
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <ImageFrame
                      src={service.image}
                      alt={service.title}
                      label={`${service.title}: replace ${service.image}`}
                      className="min-h-[300px] lg:min-h-[520px]"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                    <Icon
                      className="h-8 w-8 text-[#f0a45f]"
                      aria-hidden="true"
                    />
                    <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#f0a45f]">
                      0{index + 1}
                    </p>
                    <h2 className="mt-4 text-3xl font-black tracking-normal sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-white/70">
                      {service.description}
                    </p>
                    <ul className="mt-8 grid gap-3 text-sm leading-6 text-white/70 sm:grid-cols-2">
                      {service.capabilities.map((item) => (
                        <li
                          key={item}
                          className="border-l border-[#f0a45f] pl-4"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#102f47] px-5 py-20 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f0a45f]">
              Scope Review
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              Have a site scope ready for discussion?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#c76f2b] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#a95d24]"
          >
            Contact WF2
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
