"use client";

import { useEffect, useState, useRef } from "react";
import { ContactItem } from "@/components/ContactItem";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { SiteNav } from "@/components/SiteNav";
import { SkillCategory } from "@/components/SkillCategory";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { FileDown } from "lucide-react";

const GithubIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default function Home() {
  const { contact, education, skillCategories, experiences } = profile;
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!avatarRef.current) return;
      const rect = avatarRef.current.getBoundingClientRect();
      const navbarHeight = 54; // SiteNav height
      
      const triggerStart = navbarHeight;
      const progress = (triggerStart - rect.top) / rect.height;
      const clampedProgress = Math.max(0, Math.min(1, progress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      <SiteNav activeSection={activeSection} scrollProgress={scrollProgress} />

      {/* Full-viewport Hero Intro */}
      <div className="flex min-h-[calc(100vh-64px)] flex-col justify-center items-center w-full relative">
        {/* Top: Avatar resting directly on the line */}
        <div ref={avatarRef} className="w-full flex justify-center relative pb-[1px]">
          <ProfileAvatar alt={profile.name} initials="PW" />
          {/* Full-width screen horizontal line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>

        {/* Bottom: Info content below the line */}
        <header className="flex flex-col items-center text-center pt-8 pb-12 px-6 max-w-2xl">
          <h1 className="mt-4 pb-2 text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground font-sans">
            {profile.name}
          </h1>
          <h2 className="mt-3 text-sm font-semibold tracking-wide text-foreground/55 sm:text-base max-w-md">
            {profile.title}
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-foreground/50 leading-relaxed max-w-lg font-medium tracking-wide">
            {profile.subtitle}
          </p>

          {/* Resume download + GitHub link */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <Button className="w-fit h-12 rounded-xl px-8 shadow-md font-semibold text-sm" asChild>
              <a href={contact.resumePdfHref} download target="_blank" rel="noreferrer">
                <FileDown className="size-4 mr-2" />
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
        </header>
      </div>

      {/* Scrollable sections container */}
      <div className="mx-auto max-w-3xl px-6 pb-24 space-y-24">

        {/* About Section */}
        <section id="about" className="scroll-mt-28 space-y-6" aria-label="About me">
          <SectionTitle id="about-title">About</SectionTitle>
          <Card className="glow-card glassmorphism border-none shadow-sm">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <p className="text-sm md:text-base leading-relaxed text-foreground/65 font-normal">
                Result-driven Senior Software Engineer and Cloud Consultant with over 5 years of post-graduation experience designing high-throughput data pipelines, microservices, and serverless architectures for global enterprises, including Air Canada. Graduated with Honors from the University of Moratuwa with a deep foundation in computer science and system engineering. Proven track record of operating independently in distributed, cross-functional remote teams and ready to step into high-impact technical ownership and leadership roles.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Experience & Projects Section */}
        <section id="experience" className="scroll-mt-28 space-y-6" aria-labelledby="experience-heading">
          <SectionTitle id="experience-heading">Experience</SectionTitle>
          <Card className="glow-card glassmorphism border-none shadow-sm">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <div className="space-y-8">
                {experiences.map((exp) => {
                  const key = "company" in exp ? exp.company : exp.role;
                  return (
                    <div key={key} className="relative group">
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
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-28 space-y-6" aria-labelledby="education-heading">
          <SectionTitle id="education-heading">Education</SectionTitle>
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.institution} className="glow-card glassmorphism border-none shadow-sm">
                <CardHeader className="p-6 sm:p-8 md:p-10">
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
        <section id="skills" className="scroll-mt-28 space-y-6" aria-labelledby="skills-heading">
          <SectionTitle id="skills-heading">Skills</SectionTitle>
          <Card className="glow-card glassmorphism border-none shadow-sm">
            <CardContent className="p-6 sm:p-8 md:p-10 space-y-8">
              {skillCategories.map((cat) => (
                <SkillCategory key={cat.title} title={cat.title} items={cat.items} />
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-28 space-y-6" aria-labelledby="contact-heading">
          <SectionTitle id="contact-heading">Contact</SectionTitle>
          <Card className="glow-card glassmorphism border-none shadow-sm">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <p className="text-sm leading-relaxed text-foreground/65 mb-6">
                I am open to senior roles, consulting opportunities, and systems collaboration. Contact me via:
              </p>
              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Contact information">
                <ContactItem icon="mail" label="Email" value={contact.email} href={`mailto:${contact.email}`} />
                <ContactItem icon="phone" label="Phone" value={contact.phone} href={contact.phoneHref} />
                <ContactItem icon="globe" label="Location" value="Colombo, Sri Lanka" />
                <ContactItem icon="linkedin" label="LinkedIn" value={`/in/${contact.linkedin}`} href={contact.linkedinHref} />
              </nav>
            </CardContent>
          </Card>
        </section>

        <footer className="pt-8 text-center text-[11px] text-muted-foreground/70">
          <p>© {new Date().getFullYear()} Pinsara Weerasinghe.</p>
        </footer>

      </div>
    </div>
  );
}
