import { ImageFrame } from "./ImageFrame";
import { SectionReveal } from "./SectionReveal";
import { achievementPhotos, achievements } from "./siteContent";

export function Achievements() {
  return (
    <section className="bg-[#071827] px-5 py-24 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f0a45f]">
            Achievements & Trust
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            Designed to present awards, certificates, and proven site
            capability.
          </h2>
        </SectionReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;

              return (
                <SectionReveal key={achievement.title} delay={index * 0.07}>
                  <article className="min-h-full bg-[#0d2b42] p-6">
                    <Icon
                      className="h-7 w-7 text-[#f0a45f]"
                      aria-hidden="true"
                    />
                    <h3 className="mt-7 text-lg font-black text-white">
                      {achievement.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/64">
                      {achievement.description}
                    </p>
                  </article>
                </SectionReveal>
              );
            })}
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:min-h-[520px]">
            {achievementPhotos.map((photo, index) => {
              const Icon = photo.icon;

              return (
                <SectionReveal
                  key={photo.title}
                  className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
                  delay={index * 0.1}
                >
                  <div className="relative min-h-[260px] overflow-hidden">
                    <ImageFrame
                      src={photo.image}
                      alt={photo.title}
                      label={`${photo.title}: replace ${photo.image}`}
                      className="absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061827]/82 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <Icon
                        className="h-6 w-6 text-[#f0a45f]"
                        aria-hidden="true"
                      />
                      <p className="mt-3 text-lg font-black text-white">
                        {photo.title}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
