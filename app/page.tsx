import { Achievements } from "@/components/Achievements";
import { CompanyStats } from "@/components/CompanyStats";
import { CompanySummary } from "@/components/CompanySummary";
import { Hero } from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071827] text-white">
      <Hero />
      <CompanySummary />
      <CompanyStats />
      <Achievements />
      <section className="bg-[#102f47] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 border border-white/10 bg-[#071827] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f0a45f]">
              Start a Project
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              Need dependable construction support for your next site?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              Share the scope, site conditions, and timeline. WF2 can review the
              requirements and advise on the next practical step.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="bg-[#c76f2b] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#a95d24]"
            >
              Contact Us
            </Link>
            <Link
              href="/projects"
              className="border border-white/20 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
