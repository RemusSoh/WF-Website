import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { contactDetails } from "@/components/siteContent";

export const metadata: Metadata = {
  title: "Contact | WF2 Engineering",
  description:
    "Contact WF2 Engineering for construction, renovation, upgrading, structural and civil works enquiries.",
};

const details = [
  {
    label: "Phone",
    value: contactDetails.phone,
    icon: Phone,
  },
  {
    label: "Email",
    value: contactDetails.email,
    icon: Mail,
  },
  {
    label: "Office",
    value: contactDetails.office,
    icon: MapPin,
  },
  {
    label: "Business Hours",
    value: contactDetails.hours,
    icon: Clock,
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#071827] text-white">
      <section className="px-5 pb-16 pt-36 sm:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <SectionReveal className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f0a45f]">
              Contact Us
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
              Start with a clear construction scope.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Send WF2 the project type, site conditions, expected timeline, and
              any drawings or requirements you already have.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionReveal>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-1">
              {details.map((detail) => {
                const Icon = detail.icon;

                return (
                  <article key={detail.label} className="bg-[#0d2b42] p-6">
                    <Icon
                      className="h-6 w-6 text-[#f0a45f]"
                      aria-hidden="true"
                    />
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-white/52">
                      {detail.label}
                    </p>
                    <p className="mt-2 text-base font-semibold leading-7 text-white">
                      {detail.value}
                    </p>
                  </article>
                );
              })}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <form className="grid gap-5 border border-white/10 bg-[#102f47] p-6 sm:grid-cols-2 sm:p-8">
              <label className="grid gap-2 text-sm font-bold text-white">
                Name
                <input
                  className="border border-white/10 bg-[#071827] px-4 py-3 font-normal text-white outline-none transition placeholder:text-white/30 focus:border-[#f0a45f]"
                  name="name"
                  placeholder="Your name"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-white">
                Email
                <input
                  className="border border-white/10 bg-[#071827] px-4 py-3 font-normal text-white outline-none transition placeholder:text-white/30 focus:border-[#f0a45f]"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-white">
                Phone
                <input
                  className="border border-white/10 bg-[#071827] px-4 py-3 font-normal text-white outline-none transition placeholder:text-white/30 focus:border-[#f0a45f]"
                  name="phone"
                  placeholder="+65 xxxx xxxx"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-white">
                Project Type
                <input
                  className="border border-white/10 bg-[#071827] px-4 py-3 font-normal text-white outline-none transition placeholder:text-white/30 focus:border-[#f0a45f]"
                  name="projectType"
                  placeholder="Renovation, civil works, upgrading..."
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-white sm:col-span-2">
                Project Scope
                <textarea
                  className="min-h-40 border border-white/10 bg-[#071827] px-4 py-3 font-normal text-white outline-none transition placeholder:text-white/30 focus:border-[#f0a45f]"
                  name="message"
                  placeholder="Share location, timeline, site requirements, and scope details."
                />
              </label>
              <button
                className="bg-[#c76f2b] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#a95d24] sm:col-span-2"
                type="submit"
              >
                Send Enquiry
              </button>
              <p className="text-xs leading-6 text-white/50 sm:col-span-2">
                This form is visual only for now. No backend or third-party form
                service has been connected yet.
              </p>
            </form>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
