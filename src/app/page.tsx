"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, FileDown, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { ProjectModal } from "@/components/ProjectModal";
import { Spotlight } from "@/components/Spotlight";
import { profile, type ProjectDetail } from "@/data/profile";

const GithubIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
  </svg>
);

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

function Pill({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium leading-5 text-primary">
      {children}
    </li>
  );
}

/** Section wrapper. Below 1024px the heading shows above the section; on desktop it is visually hidden. */
function Section({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <section id={id} aria-label={label} className="mb-20 scroll-mt-16 md:mb-28 lg:mb-36 lg:scroll-mt-24">
      <div className="mb-6 lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">{label}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const { contact, education, technicalProficiency, workExperiences, featuredProjects, leadershipAndVolunteering } =
    profile;
  const [active, setActive] = useState<string>("about");
  const mobileNavRef = useRef<HTMLUListElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Keep the highlighted link visible in the top bar when it scrolls sideways on small phones.
  useEffect(() => {
    const list = mobileNavRef.current;
    const link = list?.querySelector<HTMLElement>(`[data-section="${active}"]`);
    if (!list || !link) return;
    list.scrollTo({ left: link.offsetLeft - list.clientWidth / 2 + link.offsetWidth / 2, behavior: "smooth" });
  }, [active]);

  const skillGroups = [
    { title: "Languages", items: technicalProficiency.coreLanguages },
    { title: "Cloud & Serverless", items: technicalProficiency.cloudAndServerless },
    { title: "Frameworks", items: technicalProficiency.frameworks },
    { title: "Data & Streaming", items: technicalProficiency.databasesAndStreaming },
    { title: "DevOps & Tooling", items: technicalProficiency.devopsAndTools },
  ];

  return (
    <div className="relative">
      <Spotlight />

      {/* Top section bar for screens below 1024px (desktop uses the sidebar nav). */}
      <nav
        aria-label="Sections"
        className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur lg:hidden"
      >
        <ul
          ref={mobileNavRef}
          className="mx-auto flex max-w-screen-xl gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden"
        >
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  data-section={id}
                  aria-current={isActive ? "true" : undefined}
                  className={`block rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? "bg-primary-soft text-primary" : "text-text-subtle hover:text-slate-200"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <a
        href="#content"
        className="absolute left-0 top-0 z-50 -translate-y-full rounded bg-primary px-4 py-2 text-sm font-bold text-primary-foreground focus:translate-y-3 focus:translate-x-3"
      >
        Skip to content
      </a>

      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* ───────── Left: sticky intro + nav ───────── */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="md:flex md:items-center md:gap-6 lg:block">
                <div className="relative mb-6 size-20 shrink-0 overflow-hidden rounded-full bg-slate-800 ring-2 ring-primary/30 sm:size-24 md:mb-0 lg:mb-6">
                  <Image
                    src="/profile-photo.png"
                    alt={profile.name}
                    fill
                    priority
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                    {profile.name}
                  </h1>
                  <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{profile.title}</h2>
                </div>
              </div>
              <p className="mt-4 max-w-xs leading-normal text-muted-foreground md:max-w-lg lg:max-w-xs">{profile.subtitle}</p>
              <p className="mt-3 flex items-center gap-1.5 text-sm text-text-subtle">
                <MapPin className="size-4" aria-hidden /> {profile.location}
              </p>

              <nav className="hidden lg:block" aria-label="In-page navigation">
                <ul className="mt-14 w-max">
                  {sections.map(({ id, label }) => {
                    const isActive = active === id;
                    return (
                      <li key={id}>
                        <a href={`#${id}`} className="group flex items-center py-3" aria-current={isActive ? "true" : undefined}>
                          <span
                            className={`mr-4 h-px transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${
                              isActive ? "w-16 bg-slate-200" : "w-8 bg-slate-600"
                            }`}
                          />
                          <span
                            className={`text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                              isActive ? "text-slate-200" : "text-text-subtle"
                            }`}
                          >
                            {label}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={contact.resumePdfHref}
                download
                className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary-soft"
              >
                <FileDown className="size-4" aria-hidden /> Download resume
              </a>
              <ul className="flex items-center gap-5" aria-label="Social media">
                <li>
                  <a href={contact.githubHref} target="_blank" rel="noreferrer" className="block text-muted-foreground hover:text-slate-200" aria-label="GitHub (opens in a new tab)">
                    <GithubIcon className="size-6" />
                  </a>
                </li>
                <li>
                  <a href={contact.linkedinHref} target="_blank" rel="noreferrer" className="block text-muted-foreground hover:text-slate-200" aria-label="LinkedIn (opens in a new tab)">
                    <LinkedinIcon className="size-6" />
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="block text-muted-foreground hover:text-slate-200" aria-label="Email">
                    <Mail className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
          </header>

          {/* ───────── Right: scrolling content ───────── */}
          <main id="content" className="pt-16 md:pt-10 lg:w-[54%] lg:py-24">
            <Section id="about" label="About">
              <FadeIn>
                <p className="text-muted-foreground">{profile.about}</p>
              </FadeIn>
            </Section>

            <Section id="experience" label="Experience">
              <ol className="group/list">
                {workExperiences.map((exp, i) => (
                  <li key={`${exp.company}-${exp.role}`} className="mb-12">
                    <FadeIn delay={Math.min(i, 3) * 0.05}>
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-subtle sm:col-span-2">
                          {exp.period.replace(" - ", " — ")}
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <span className="group-hover:text-primary">{exp.role}</span>
                            <span className="text-muted-foreground"> · </span>
                            <span className="group-hover:text-primary">{exp.company}</span>
                          </h3>
                          <p className="mt-1 text-xs text-text-subtle">
                            {[exp.type, exp.location, exp.clientProject && `Client: ${exp.clientProject}`]
                              .filter(Boolean)
                              .join(" · ")}
                          </p>
                          <ul className="mt-3 space-y-2 text-sm leading-normal text-muted-foreground">
                            {exp.keyHighlights.map((h) => (
                              <li key={h} className="relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-primary/60">
                                {h}
                              </li>
                            ))}
                          </ul>
                          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                            {exp.stack.map((t) => (
                              <Pill key={t}>{t}</Pill>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </FadeIn>
                  </li>
                ))}
              </ol>
              <a
                href={contact.resumePdfHref}
                download
                className="group inline-flex items-center font-semibold leading-tight text-slate-200"
              >
                <span className="border-b border-transparent pb-px transition group-hover:border-primary">View full résumé</span>
                <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </a>
            </Section>

            <Section id="projects" label="Projects">
              <ul className="group/list">
                {featuredProjects.map((proj, i) => (
                  <li key={proj.id} className="mb-12">
                    <FadeIn delay={Math.min(i, 3) * 0.05}>
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <button
                              type="button"
                              onClick={() => setSelectedProject(proj)}
                              className="group/link inline-flex items-baseline text-left font-medium leading-tight text-slate-200 hover:text-primary focus-visible:text-primary"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                              <span>{proj.name}</span>
                              <ArrowUpRight className="ml-1 size-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden />
                            </button>
                          </h3>
                          {(proj.role || proj.context) && (
                            <p className="mt-1 text-xs text-text-subtle">{[proj.role, proj.context].filter(Boolean).join(" · ")}</p>
                          )}
                          <p className="mt-2 text-sm leading-normal text-muted-foreground">{proj.summary}</p>
                          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                            {proj.stack.map((t) => (
                              <Pill key={t}>{t}</Pill>
                            ))}
                          </ul>
                        </div>
                        <div className="z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-text-subtle sm:order-1 sm:col-span-2">
                          {proj.url ? (
                            <a href={proj.url} target="_blank" rel="noreferrer" className="relative z-20 hover:text-primary">
                              Live site ↗
                            </a>
                          ) : (
                            "Case study"
                          )}
                        </div>
                      </div>
                    </FadeIn>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="education" label="Education">
              <ol className="space-y-8">
                {education.map((edu) => (
                  <li key={edu.institution}>
                    <FadeIn className="grid sm:grid-cols-8 sm:gap-8 md:gap-4">
                      <p className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-subtle sm:col-span-2">
                        {edu.period.replace(" – ", " — ")}
                      </p>
                      <div className="sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">{edu.degree}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                        {edu.note && <p className="mt-2 text-sm text-primary">{edu.note}</p>}
                        {edu.detail && <p className="mt-1 text-sm text-text-subtle">{edu.detail}</p>}
                      </div>
                    </FadeIn>
                  </li>
                ))}
              </ol>
            </Section>

            <Section id="skills" label="Skills">
              <div className="space-y-6">
                {skillGroups.map((g) => (
                  <FadeIn key={g.title} className="grid sm:grid-cols-8 sm:gap-8 md:gap-4">
                    <h3 className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-subtle sm:col-span-2">
                      {g.title}
                    </h3>
                    <ul className="flex flex-wrap gap-2 sm:col-span-6">
                      {g.items.map((s) => (
                        <Pill key={s}>{s}</Pill>
                      ))}
                    </ul>
                  </FadeIn>
                ))}
              </div>

              <h3 className="mb-6 mt-16 text-xs font-bold uppercase tracking-widest text-slate-200">
                Leadership &amp; volunteering
              </h3>
              <ul className="space-y-6">
                {leadershipAndVolunteering.map((item) => (
                  <li key={item.event}>
                    <FadeIn>
                      <p className="font-medium text-slate-200">
                        {item.event} <span className="text-muted-foreground">· {item.role}</span>
                      </p>
                      <p className="mt-1 text-xs text-text-subtle">{item.organization}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{item.details}</p>
                    </FadeIn>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="contact" label="Contact">
              <FadeIn>
                <p className="text-muted-foreground">
                  I am open to senior software engineering, technical lead, and cloud consulting roles. The best way to
                  reach me is by email.
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary/40 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary-soft"
                >
                  <Mail className="size-4" aria-hidden /> Say hello
                </a>
                <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Mail className="size-4 text-text-subtle" aria-hidden />
                    <a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="size-4 text-text-subtle" aria-hidden />
                    <a href={contact.phoneHref} className="hover:text-primary">{contact.phone}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <LinkedinIcon className="size-4 text-text-subtle" />
                    <a href={contact.linkedinHref} target="_blank" rel="noreferrer" className="hover:text-primary">
                      linkedin.com/in/{contact.linkedin}
                    </a>
                  </li>
                </ul>
              </FadeIn>
            </Section>

            <footer className="max-w-md pb-16 text-sm text-text-subtle sm:pb-0">
              <p>
                © {new Date().getFullYear()} {profile.name}.
              </p>
            </footer>
          </main>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
