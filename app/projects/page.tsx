import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ImageFrame } from "@/components/ImageFrame";
import { SectionReveal } from "@/components/SectionReveal";
import { projects } from "@/components/siteContent";

export const metadata: Metadata = {
  title: "Projects | WF2 Engineering",
  description:
    "Selected industrial, commercial, and factory upgrading projects by WF2 Engineering.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#071827] text-white">
      <section className="px-5 pb-16 pt-36 sm:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <SectionReveal className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f0a45f]">
              Projects
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
              A construction portfolio built around real site work.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Replace the placeholders with WF2 project photography to turn this
              page into a strong visual record of industrial and commercial
              delivery.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <SectionReveal key={project.title} delay={index * 0.08}>
              <article className="group overflow-hidden border border-white/10 bg-[#0d2b42]">
                <ImageFrame
                  src={project.image}
                  alt={project.title}
                  label={`${project.title}: replace ${project.image}`}
                  className="min-h-[330px]"
                  imageClassName="object-cover transition duration-500 group-hover:scale-[1.035]"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f0a45f]">
                        {project.category}
                      </p>
                      <h2 className="mt-3 text-2xl font-black tracking-normal">
                        {project.title}
                      </h2>
                    </div>
                    <span className="text-sm font-black text-white/36">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white/52">
                    {project.location}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-white/66">
                    {project.description}
                  </p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#102f47] px-5 py-20 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            Ready to document the next completed project?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#c76f2b] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#a95d24]"
          >
            Discuss a Project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
