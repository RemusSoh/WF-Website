"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

export const teamImageSrc = "/images/wf2-team-hero.jpg";

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071827] text-white">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.035 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {!imageFailed && (
          <Image
            src={teamImageSrc}
            alt="WF2 Engineering team"
            fill
            preload
            sizes="100vw"
            quality={75}
            className="object-cover object-[50%_38%]"
            onError={() => setImageFailed(true)}
          />
        )}
        {imageFailed && (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#071827_0%,#123c5a_48%,#0b2438_100%)]">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="absolute bottom-8 right-8 max-w-xs border border-white/15 bg-[#061827]/80 p-4 text-xs leading-5 text-white/70">
              Placeholder image area. Add the real team photo at
              public/images/wf2-team-hero.jpg.
            </div>
          </div>
        )}
      </motion.div>

      <div className="absolute inset-0 bg-[#061827]/62" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071827] to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:pb-24">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                delayChildren: 0.45,
                staggerChildren: 0.14,
              },
            },
          }}
        >
          <motion.p
            className="mb-5 text-sm font-bold uppercase tracking-[0.26em] text-[#f0a45f]"
            variants={fadeUp}
          >
            WF2 Engineering Pte Ltd
          </motion.p>
          <motion.h1
            className="max-w-4xl text-5xl font-black leading-[0.94] tracking-normal text-white sm:text-6xl lg:text-8xl"
            variants={fadeUp}
          >
            Building with precision, safety, and site-ready discipline.
          </motion.h1>
          <motion.p
            className="mt-7 max-w-2xl text-base leading-8 text-white/76 sm:text-lg"
            variants={fadeUp}
          >
            Singapore-based construction and engineering support for structural,
            civil, general building, renovation, and upgrading works.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            variants={fadeUp}
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-[#c76f2b] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#a95d24]"
            >
              Explore Our Work
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-white/25 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white/10"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const easing = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: easing },
  },
};
