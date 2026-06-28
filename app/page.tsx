const services = [
  {
    title: "Structural & Civil Works",
    description:
      "Concrete, steel, drainage, reinstatement, and site works handled with clear sequencing and dependable supervision.",
  },
  {
    title: "General Building Construction",
    description:
      "Coordinated construction delivery for commercial, industrial, and functional building environments.",
  },
  {
    title: "Renovation & Upgrading",
    description:
      "Practical upgrades, additions, and fit-out works planned around operating sites and handover needs.",
  },
  {
    title: "Safety & Compliance",
    description:
      "Structured site processes, documentation, and communication to keep works controlled from start to finish.",
  },
];

const projects = [
  "Industrial Warehouse Extension",
  "Office Renovation & Fit-Out",
  "Factory Upgrading Works",
];

const stats = [
  ["Industrial", "Commercial and industrial project experience"],
  ["Managed", "Coordinated site teams and specialist trades"],
  ["Singapore", "Locally based construction support"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3ed] text-[#161616]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ed]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-sm bg-[#111827] text-sm font-black tracking-wide text-white">
              WF2
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold uppercase tracking-[0.18em]">
                WF2 Engineering
              </span>
              <span className="block text-xs font-medium text-[#6f6a61]">
                Construction Pte Ltd
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#4e4a43] md:flex">
            <a className="transition hover:text-[#111827]" href="#services">
              Services
            </a>
            <a className="transition hover:text-[#111827]" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-[#111827]" href="#about">
              About
            </a>
            <a
              className="rounded-sm bg-[#c76f2b] px-4 py-2.5 text-white shadow-sm transition hover:bg-[#a95d24]"
              href="#contact"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:py-24"
      >
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#c76f2b]">
            Construction. Renovation. Site Delivery.
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-[#111827] sm:text-6xl lg:text-7xl">
            Reliable construction work, presented with confidence.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5a51]">
            A refined base website for WF2 Engineering, built to feel clear,
            capable, and ready for real project photography when the portfolio
            is ready.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-sm bg-[#111827] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-black"
            >
              Request a Quote
            </a>
            <a
              href="#projects"
              className="rounded-sm border border-[#111827]/20 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-[#111827] transition hover:border-[#111827] hover:bg-white"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-sm border border-black/10 bg-[#d9d1c4] p-5 shadow-[0_24px_70px_rgba(17,24,39,0.14)]">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(90deg,rgba(17,24,39,0.12)_1px,transparent_1px),linear-gradient(rgba(17,24,39,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="relative flex h-full min-h-[380px] flex-col justify-between border border-white/60 bg-[#efe9de]/90 p-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6f6a61]">
                  Project Visual
                </p>
                <p className="mt-3 max-w-xs text-3xl font-black leading-tight text-[#111827]">
                  Clean space reserved for site photography
                </p>
              </div>
              <span className="rounded-sm bg-[#c76f2b] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
                Base
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map(([label, text]) => (
                <div key={label} className="bg-white/80 p-4">
                  <p className="text-lg font-black text-[#111827]">{label}</p>
                  <p className="mt-2 text-xs leading-5 text-[#6f6a61]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c76f2b]">
                Our Services
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-normal text-[#111827] sm:text-5xl">
                Practical construction support across core scopes.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#5f5a51]">
              Short, direct service blocks keep the site easy to scan while
              still feeling substantial and trustworthy.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.title} className="bg-white p-7">
                <p className="text-sm font-black text-[#c76f2b]">
                  0{index + 1}
                </p>
                <h3 className="mt-8 text-xl font-black text-[#111827]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a51]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c76f2b]">
              Past Projects
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#111827] sm:text-5xl">
              A portfolio structure ready for real jobsite images.
            </h2>
          </div>

          <div className="grid gap-5">
            {projects.map((project, index) => (
              <article
                key={project}
                className="grid gap-5 rounded-sm border border-black/10 bg-white p-5 shadow-sm md:grid-cols-[220px_1fr]"
              >
                <div className="flex min-h-40 items-end justify-between bg-[#d9d1c4] p-4">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#6f6a61]">
                    Image
                  </span>
                  <span className="text-3xl font-black text-white">
                    0{index + 1}
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c76f2b]">
                    Featured Work
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-[#111827]">
                    {project}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f5a51]">
                    Add the location, scope, completion year, and final project
                    photos here once the details are confirmed.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#111827] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f0a45f]">
              About WF2
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-normal sm:text-5xl">
              Built for clients who need steady coordination and dependable
              delivery.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/72">
            <p>
              WF2 Engineering Pte Ltd is a Singapore-based construction company
              supporting commercial and industrial works with practical planning,
              site coordination, and hands-on execution.
            </p>
            <p>
              This template keeps the company story concise while giving the
              site enough polish for first impressions, enquiries, and future
              project case studies.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c76f2b]">
              Contact Us
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#111827] sm:text-5xl">
              Start with a clear scope.
            </h2>
            <div className="mt-8 space-y-4 text-sm leading-7 text-[#5f5a51]">
              <p>
                <strong className="text-[#111827]">Email:</strong>{" "}
                enquiry@wf2engineering.com
              </p>
              <p>
                <strong className="text-[#111827]">Phone:</strong> +65 0000
                0000
              </p>
              <p>
                <strong className="text-[#111827]">Location:</strong>{" "}
                Singapore
              </p>
            </div>
          </div>

          <form className="grid gap-4 rounded-sm border border-black/10 bg-[#f6f3ed] p-5 shadow-sm sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-[#111827]">
              Name
              <input
                className="rounded-sm border border-black/10 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#c76f2b]"
                name="name"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#111827]">
              Email
              <input
                className="rounded-sm border border-black/10 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#c76f2b]"
                name="email"
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#111827] sm:col-span-2">
              Project Scope
              <textarea
                className="min-h-36 rounded-sm border border-black/10 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#c76f2b]"
                name="message"
              />
            </label>
            <button
              className="rounded-sm bg-[#c76f2b] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#a95d24] sm:col-span-2"
              type="submit"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f6f3ed]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-sm text-[#6f6a61] sm:flex-row sm:px-8">
          <p>WF2 Engineering Pte Ltd</p>
          <p>Construction, renovation, and site coordination in Singapore.</p>
        </div>
      </footer>
    </main>
  );
}
