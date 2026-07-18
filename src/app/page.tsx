"use client";

import { useEffect, useState } from "react";
import { ContactItem } from "@/components/ContactItem";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { SiteNav } from "@/components/SiteNav";
import { SkillCategory } from "@/components/SkillCategory";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { profile, navLinks } from "@/data/profile";
import { FileDown } from "lucide-react";

const GithubIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);


export default function Home() {
  const { contact, education, skillCategories, experiences } = profile;
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id='contact']");
    
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg relative transition-colors duration-300">
      {/* Background spotlights */}
      <div 
        className="pointer-events-none absolute left-[10%] top-[5%] h-[500px] w-[500px] rounded-full bg-primary-soft opacity-30 blur-[130px]" 
        aria-hidden 
      />
      <div 
        className="pointer-events-none absolute right-[10%] top-[40%] h-[400px] w-[400px] rounded-full bg-accent-soft opacity-20 blur-[110px]" 
        aria-hidden 
      />

      <SiteNav />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-24">
        <div className="lg:flex lg:justify-between lg:gap-16">
          
          {/* Sticky Left Column */}
          <header className="lg:sticky lg:top-28 lg:flex lg:h-[calc(100vh-200px)] lg:w-1/2 lg:flex-col lg:justify-between lg:py-4">
            <div>
              <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                <ProfileAvatar alt={profile.name} initials="PW" />
                <div className="mt-2">
                  <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                    {profile.name}
                  </h1>
                  <h2 className="mt-2 text-sm font-medium tracking-wide text-foreground/55 sm:text-base">
                    {profile.title}
                  </h2>
                </div>
              </div>
              
              <p className="mt-5 text-sm text-foreground/50 leading-relaxed max-w-sm font-medium tracking-wide">
                {profile.subtitle}
              </p>

              {/* Resume download + GitHub link (Above menu) */}
              <div className="mt-6 flex flex-col gap-3">
                <Button size="sm" className="w-fit rounded-xl px-5 shadow-md font-semibold" asChild>
                  <a href={contact.resumePdfHref} download target="_blank" rel="noreferrer">
                    <FileDown className="size-3.5 mr-2" />
                    Download Resume
                  </a>
                </Button>
                <a
                  href={contact.githubHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-foreground/45 hover:text-foreground/80 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="size-3.5" />
                  github.com/{contact.github}
                </a>
              </div>

              {/* Scrollspy Desktop Navigation */}
              <nav className="mt-10 hidden lg:block" aria-label="Page sections">
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={`nav-link-item ${
                          activeSection === link.href.substring(1) ? "active" : ""
                        }`}
                      >
                        <span className="nav-indicator-line" />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>

          {/* Scrollable Right Column */}
          <main className="mt-16 lg:mt-4 lg:w-1/2 lg:py-4 space-y-24">
            
            {/* About Section */}
            <section id="about" className="scroll-mt-28" aria-label="About me">
              <p className="text-sm md:text-base leading-relaxed text-foreground/65 font-normal">
                Result-driven Senior Software Engineer and Cloud Consultant with over 5 years of post-graduation experience designing high-throughput data pipelines, microservices, and serverless architectures for global enterprises, including Air Canada. Graduated with Honors from the University of Moratuwa with a deep foundation in computer science and system engineering. Proven track record of operating independently in distributed, cross-functional remote teams and ready to step into high-impact technical ownership and leadership roles.
              </p>
            </section>

            {/* Experience & Projects Section */}
            <section id="experience" className="scroll-mt-28" aria-labelledby="experience-heading">
              <h3 id="experience-heading" className="text-xs font-bold uppercase tracking-wider text-accent mb-6 lg:hidden">
                Experience
              </h3>
              <div className="relative border-l border-border/40 pl-6 ml-2 space-y-8">
                {experiences.map((exp) => {
                  const key = "company" in exp ? exp.company : exp.role;
                  return (
                    <div key={key} className="relative work-timeline-item group">
                      {/* Timeline elements */}
                      <div className="work-timeline-dot" />
                      <div className="work-timeline-line" />
                      
                      <ExperienceCard
                        role={exp.role}
                        company={"company" in exp ? exp.company : undefined}
                        period={exp.period}
                        projects={exp.projects}
                      />
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="scroll-mt-28" aria-labelledby="education-heading">
              <h3 id="education-heading" className="text-xs font-bold uppercase tracking-wider text-accent mb-6 lg:hidden">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <Card key={edu.institution} className="glow-card glassmorphism border-none shadow-sm">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle className="text-base font-bold text-primary">{edu.institution}</CardTitle>
                        <span className="text-[10px] font-semibold text-muted-foreground whitespace-nowrap">
                          {edu.period || "09/2016 — 03/2021"}
                        </span>
                      </div>
                      <CardDescription className="text-sm font-medium text-foreground/95 mt-1">
                        {edu.detail}
                      </CardDescription>
                      {edu.note && (
                        <p className="pt-2 text-[11px] font-semibold text-accent uppercase tracking-wider">
                          {edu.note}
                        </p>
                      )}
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="scroll-mt-28" aria-labelledby="skills-heading">
              <h3 id="skills-heading" className="text-xs font-bold uppercase tracking-wider text-accent mb-6 lg:hidden">
                Skills
              </h3>
              <Card className="glow-card glassmorphism border-none shadow-sm">
                <CardContent className="pt-6 space-y-6">
                  {skillCategories.map((cat) => (
                    <SkillCategory key={cat.title} title={cat.title} items={cat.items} />
                  ))}
                </CardContent>
              </Card>
            </section>

            {/* Contact Bento Card */}
            <div
              id="contact"
              className="scroll-mt-28 glow-card border-none bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground shadow-2xl relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute right-0 bottom-0 h-36 w-36 rounded-full bg-white/5 blur-2xl pointer-events-none" />
              <h4 className="text-lg font-bold text-white mb-2">Let&apos;s Work Together</h4>
              <p className="text-xs text-white/80 leading-relaxed mb-6">
                I am open to senior roles, consulting opportunities, and systems collaboration. Contact me via:
              </p>
              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2" aria-label="Contact information">
                <ContactItem inverse icon="mail" label="Email" value={contact.email} href={`mailto:${contact.email}`} />
                <ContactItem inverse icon="phone" label="Phone" value={contact.phone} href={contact.phoneHref} />
                <ContactItem inverse icon="globe" label="Location" value="Colombo, Sri Lanka" />
                <ContactItem inverse icon="linkedin" label="LinkedIn" value={`/in/${contact.linkedin}`} href={contact.linkedinHref} />
              </nav>
            </div>

            <footer className="pt-8 text-center lg:text-left text-[11px] text-muted-foreground/70">
              <p>© {new Date().getFullYear()} Pinsara Weerasinghe. Built with Next.js, Shadcn & Tailwind.</p>
            </footer>

          </main>

        </div>
      </div>
    </div>
  );
}
