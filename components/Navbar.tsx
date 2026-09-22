"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 16);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const headerClasses =
    isScrolled || isOpen
      ? "border-white/10 bg-[#061827]/92 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl"
      : "border-white/0 bg-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${headerClasses}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/wf2-logo.png"
            alt="WF2 Engineering logo"
            width={283}
            height={115}
            className="h-auto w-[68px] shrink-0 sm:w-[76px]"
          />
          <span className="leading-tight">
            <span className="block text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              WF2 Engineering
            </span>
            <span className="block text-xs font-medium text-[#b7c7d4]">
              Construction Pte Ltd
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition hover:text-white ${
                pathname === item.href ? "text-white" : "text-white/78"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#f0a45f]/70 bg-[#c76f2b] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#a95d24]"
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>

        <button
          className="grid h-11 w-11 place-items-center border border-white/20 text-white transition hover:bg-white/10 md:hidden"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        className={`md:hidden ${
          isOpen
            ? "pointer-events-auto max-h-[calc(100vh-5rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        } overflow-hidden border-t border-white/10 bg-[#061827] transition-all duration-300`}
      >
        <nav className="mx-auto grid max-w-7xl gap-1 px-5 py-5 sm:px-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b border-white/10 py-4 text-base font-semibold transition hover:text-white ${
                pathname === item.href ? "text-white" : "text-white/82"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-[#c76f2b] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#a95d24]"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
