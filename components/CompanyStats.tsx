"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "motion/react";
import { placeholderStats } from "./siteContent";

export function CompanyStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section className="border-y border-white/10 bg-[#102f47] px-5 py-20 text-white sm:px-8">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3"
      >
        {placeholderStats.map((stat) => (
          <article key={stat.label} className="bg-[#0b2438] p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f0a45f]">
              {stat.label}
            </p>
            <p className="mt-6 text-5xl font-black text-white sm:text-6xl">
              {isInView ? (
                <CountUp end={stat.value} duration={2.1} suffix={stat.suffix} />
              ) : (
                `0${stat.suffix}`
              )}
            </p>
            <p className="mt-5 text-sm leading-6 text-white/58">{stat.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
