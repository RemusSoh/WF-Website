"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type Award = {
  title: string;
  year: string;
  image: string;
  featured: boolean;
};

const awards: Award[] = [
  { title: "Singapore 500 SME Award", year: "2025", image: "/images/awards/sme-500-2025.jpg", featured: true },
  { title: "Singapore 500 SME Award", year: "2026", image: "/images/awards/sme-500-2026.jpg", featured: true },
  { title: "Singapore Entrepreneur 100 Award", year: "2025", image: "/images/awards/entrepreneur-100-2025.jpg", featured: false },
  { title: "Singapore SME Leadership & Achievement Awards", year: "2026", image: "/images/awards/sme-leadership-2026.jpg", featured: false },
  { title: "Business Trust", year: "2026", image: "/images/awards/business-trust-2026.jpg", featured: false },
  { title: "Singapore Business Excellence", year: "2026", image: "/images/awards/business-excellence-2026.jpg", featured: false },
];

const featuredAwards = awards.filter((award) => award.featured);
const galleryAwards = awards.filter((award) => !award.featured);
const easing = [0.22, 1, 0.36, 1] as const;

type AwardCardProps = {
  award: Award;
  index: number;
  featured?: boolean;
  onOpen: () => void;
  setTriggerRef: (element: HTMLButtonElement | null) => void;
};

function AwardCard({ award, index, featured = false, onOpen, setTriggerRef }: AwardCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : Math.min(index * 0.09, 0.27),
        ease: easing,
      }}
      className="group"
    >
      <button
        ref={setTriggerRef}
        type="button"
        onClick={onOpen}
        aria-label={`View ${award.title}, ${award.year}`}
        aria-haspopup="dialog"
        className={`block w-full border border-white/12 bg-[#0b2235] text-left shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition duration-300 hover:border-[#f0a45f]/45 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0a45f] ${
          featured ? "p-4 sm:p-6 lg:p-8" : "p-3 sm:p-4"
        }`}
      >
        <span className="relative block aspect-[905/1280] w-full overflow-hidden bg-[#e8e9e7]">
          <Image
            src={award.image}
            alt={`${award.title} certificate, ${award.year}`}
            fill
            sizes={featured ? "(max-width: 767px) calc(100vw - 42px), (max-width: 1279px) 45vw, 560px" : "(max-width: 639px) calc(100vw - 42px), (max-width: 1023px) 45vw, 280px"}
            className="object-contain transition duration-500 group-hover:scale-[1.01]"
          />
        </span>
      </button>
      <div className={featured ? "mt-6" : "mt-4"}>
        <h3 className={`font-bold leading-snug text-white ${featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"}`}>
          {award.title}
        </h3>
        <p className="mt-2 text-sm font-bold tracking-[0.16em] text-[#f0a45f]">{award.year}</p>
      </div>
    </motion.article>
  );
}

export function Achievements() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const reduceMotion = useReducedMotion();
  const selectedAward = selectedIndex === null ? null : awards[selectedIndex];

  useEffect(() => {
    if (!selectedAward) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const trigger = triggerRefs.current[selectedIndex ?? 0];
        setSelectedIndex(null);
        window.requestAnimationFrame(() => trigger?.focus());
      }
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedAward, selectedIndex]);

  const closeViewer = () => {
    const trigger = selectedIndex === null ? null : triggerRefs.current[selectedIndex];
    setSelectedIndex(null);
    window.requestAnimationFrame(() => trigger?.focus());
  };

  const headingMotion = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : delay, ease: easing },
  });

  return (
    <section aria-labelledby="awards-heading" className="bg-[#071827] px-5 py-24 text-white sm:px-8 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <motion.p {...headingMotion(0)} className="text-sm font-bold uppercase tracking-[0.24em] text-[#f0a45f]">
            Awards & Recognition
          </motion.p>
          <motion.h2 {...headingMotion(0.08)} id="awards-heading" className="mt-4 text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            Excellence Recognised.
          </motion.h2>
          <motion.p {...headingMotion(0.16)} className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            Recognising our commitment to quality, leadership, and excellence in every project we undertake.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:mt-18 lg:gap-x-12">
          {featuredAwards.map((award, index) => (
            <AwardCard
              key={award.image}
              award={award}
              index={index}
              featured
              onOpen={() => setSelectedIndex(index)}
              setTriggerRef={(element) => { triggerRefs.current[index] = element; }}
            />
          ))}
        </div>

        <div className="my-16 h-px bg-white/10 sm:my-20" />

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {galleryAwards.map((award, index) => {
            const awardIndex = index + featuredAwards.length;
            return (
              <AwardCard
                key={award.image}
                award={award}
                index={index}
                onOpen={() => setSelectedIndex(awardIndex)}
                setTriggerRef={(element) => { triggerRefs.current[awardIndex] = element; }}
              />
            );
          })}
        </div>
      </div>

      {selectedAward ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="award-viewer-title"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#03101a]/95 p-4 sm:p-8"
          onMouseDown={(event) => { if (event.target === event.currentTarget) closeViewer(); }}
        >
          <div className="relative flex max-h-full max-w-5xl flex-col items-center">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeViewer}
              className="absolute right-0 top-0 z-10 grid h-11 w-11 -translate-y-2 translate-x-2 place-items-center border border-white/20 bg-[#071827] text-white transition hover:bg-[#c76f2b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:translate-x-14"
              aria-label="Close certificate viewer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <Image
              src={selectedAward.image}
              alt={`${selectedAward.title} certificate, ${selectedAward.year}`}
              width={905}
              height={1280}
              sizes="(max-width: 767px) calc(100vw - 32px), 80vw"
              className="max-h-[calc(100vh-8rem)] w-auto max-w-full object-contain"
            />
            <p id="award-viewer-title" className="mt-4 text-center text-sm font-bold text-white sm:text-base">
              {selectedAward.title} - {selectedAward.year}
            </p>
          </div>
        </motion.div>
      ) : null}
    </section>
  );
}
