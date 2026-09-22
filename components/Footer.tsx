import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactDetails } from "./siteContent";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061827] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.7fr_0.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/wf2-logo.png"
              alt="WF2 Engineering logo"
              width={283}
              height={115}
              className="h-auto w-[88px] shrink-0"
            />
            <span className="leading-tight">
              <span className="block text-sm font-extrabold uppercase tracking-[0.18em]">
                WF2 Engineering
              </span>
              <span className="block text-xs font-medium text-[#b7c7d4]">
                Construction Pte Ltd
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/64">
            Singapore-based construction and engineering support for structural,
            civil, general building, renovation, and upgrading works.
          </p>
        </div>

        <nav className="grid gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f0a45f]">
            Navigation
          </p>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f0a45f]">
            Contact
          </p>
          <div className="mt-4 space-y-2 text-sm leading-7 text-white/68">
            <p>{contactDetails.phone}</p>
            <p>{contactDetails.email}</p>
            <p>{contactDetails.office}</p>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-white"
          >
            Send Enquiry
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-5 text-xs text-white/48 sm:flex-row sm:px-8">
          <p>WF2 Engineering Pte Ltd. All rights reserved.</p>
          <p>Built for construction, renovation, and site coordination.</p>
        </div>
      </div>
    </footer>
  );
}
