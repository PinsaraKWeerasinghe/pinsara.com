"use client";

import { useEffect, useState, useRef } from "react";
import { ContactItem } from "@/components/ContactItem";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { SiteNav } from "@/components/SiteNav";
import { SkillCategory } from "@/components/SkillCategory";
import { SectionTitle } from "@/components/SectionTitle";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { profile, ProjectDetail } from "@/data/profile";
import { FileDown, MapPin, Sparkles, Award } from "lucide-react";

const GithubIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default function Home() {
  const { contact, education, technicalProficiency, workExperiences, featuredProjects, leadershipAndVolunteering } = profile;
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Selected project for modal popups
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const avatarRef = useRef<HTMLDivElement>(null);

  const openProjectModal = (proj: ProjectDetail) => {
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  const openProjectById = (id: string) => {
    const found = featuredProjects.find((p) => p.id === id);
    if (found) {
      setSelectedProject(found);
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!avatarRef.current) return;
      const rect = avatarRef.current.getBoundingClientRect();
      const navbarHeight = 54;
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

      {/* Hero Section */}
      <div className="flex min-h-[calc(100vh-64px)] flex-col justify-center items-center w-full relative py-12">
        {/* Profile Avatar resting on line */}
        <div ref={avatarRef} className="w-full flex justify-center relative pb-[1px]">
          <ProfileAvatar alt={profile.name} initials="PW" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>

        {/* Info content */}
        <header className="flex flex-col items-center text-center pt-8 pb-8 px-6 max-w-3xl">
          <h1 className="pb-2 text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground font-sans">
            {profile.name}
          </h1>
          
          <h2 className="mt-2 text-sm font-semibold tracking-wide text-foreground/70 sm:text-base max-w-lg">
            {profile.title}
          </h2>

          {/* Target Roles */}
          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            {profile.targetRoles.map((role) => (
              <Badge key={role} variant="outline" className="text-[10px] font-bold bg-primary-soft/30 text-primary border-primary/20">
                {role}
              </Badge>
            ))}
          </div>

          <p className="mt-4 text-xs sm:text-sm text-foreground/60 leading-relaxed max-w-xl font-medium tracking-wide">
            {profile.subtitle}
          </p>

          {/* Action Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button className="h-11 rounded-xl px-6 shadow-md font-semibold text-xs sm:text-sm" asChild>
              <a href={contact.resumePdfHref} download target="_blank" rel="noreferrer">
                <FileDown className="size-4 mr-2" />
                Download Resume
              </a>
            </Button>
            
            <a
              href={contact.githubHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 bg-secondary/40 text-xs font-semibold text-foreground/80 hover:bg-secondary hover:text-foreground transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="size-4" />
              github.com/{contact.github}
            </a>

            <a
              href={contact.linkedinHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 bg-secondary/40 text-xs font-semibold text-foreground/80 hover:bg-secondary hover:text-foreground transition-all"
              aria-label="LinkedIn"
            >
              <svg className="size-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/>
              </svg>
              in/{contact.linkedin}
            </a>
          </div>
        </header>
      </div>

      {/* Main Content Sections */}
      <div className="mx-auto max-w-4xl px-6 pb-24 space-y-24">

        {/* About Section */}
        <section id="about" className="scroll-mt-28 space-y-6" aria-label="About me">
          <SectionTitle id="about-title">About</SectionTitle>
          <Card className="glow-card glassmorphism border-none shadow-sm">
            <CardContent className="p-6 sm:p-8 md:p-10 space-y-4">
              <p className="text-sm md:text-base leading-relaxed text-foreground/80 font-normal">
                {profile.about}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground">
                <span className="flex items-center gap-1.5 text-foreground/80">
                  <MapPin className="size-4 text-primary" /> {profile.location}
                </span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section with Interactive Timeline */}
        <section id="experience" className="scroll-mt-28 space-y-6" aria-labelledby="experience-heading">
          <SectionTitle id="experience-heading">Experience</SectionTitle>
          <ExperienceTimeline
            experiences={workExperiences}
            onOpenProjectDetail={openProjectById}
          />
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="scroll-mt-28 space-y-6" aria-labelledby="projects-heading">
          <SectionTitle id="projects-heading">Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((proj) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                onOpenDetail={openProjectModal}
              />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-28 space-y-6" aria-labelledby="education-heading">
          <SectionTitle id="education-heading">Education</SectionTitle>
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.institution} className="glow-card glassmorphism border-none shadow-sm">
                <CardHeader className="p-6 sm:p-8 md:p-10">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-base font-bold text-primary">{edu.institution}</CardTitle>
                      <CardDescription className="text-sm font-semibold text-foreground/95 mt-1">
                        {edu.degree}
                      </CardDescription>
                    </div>
                    <span className="text-[10px] font-semibold text-muted-foreground whitespace-nowrap bg-secondary px-2.5 py-1 rounded-full border border-border/40">
                      {edu.period}
                    </span>
                  </div>
                  {edu.detail && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      {edu.detail}
                    </p>
                  )}
                  {edu.note && (
                    <p className="pt-2 text-[11px] font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="size-3" /> {edu.note}
                    </p>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="scroll-mt-28 space-y-6" aria-labelledby="skills-heading">
          <SectionTitle id="skills-heading">Technical Proficiency</SectionTitle>
          <Card className="glow-card glassmorphism border-none shadow-sm">
            <CardContent className="p-6 sm:p-8 md:p-10 space-y-8">
              <SkillCategory title="Core Languages" items={technicalProficiency.coreLanguages} />
              <SkillCategory title="Cloud & Serverless (AWS)" items={technicalProficiency.cloudAndServerless} />
              <SkillCategory title="Frameworks & Libraries" items={technicalProficiency.frameworks} />
              <SkillCategory title="Databases & Event Streaming" items={technicalProficiency.databasesAndStreaming} />
              <SkillCategory title="DevOps & Tooling" items={technicalProficiency.devopsAndTools} />
            </CardContent>
          </Card>
        </section>

        {/* Leadership & Volunteering Section */}
        <section id="leadership" className="scroll-mt-28 space-y-6" aria-labelledby="leadership-heading">
          <SectionTitle id="leadership-heading">Leadership & Volunteering</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {leadershipAndVolunteering.map((item) => (
              <Card key={item.event} className="glow-card glassmorphism border-none shadow-sm">
                <CardHeader className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-accent text-xs font-bold">
                    <Award className="size-4" />
                    <span>{item.role}</span>
                  </div>
                  <CardTitle className="text-base font-extrabold text-foreground">
                    {item.event}
                  </CardTitle>
                  <p className="text-xs font-medium text-muted-foreground">
                    {item.organization}
                  </p>
                  <p className="text-xs text-foreground/75 leading-relaxed pt-2 border-t border-border/30">
                    {item.details}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-28 space-y-6" aria-labelledby="contact-heading">
          <SectionTitle id="contact-heading">Contact & Connect</SectionTitle>
          <Card className="glow-card glassmorphism border-none shadow-sm">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <p className="text-sm leading-relaxed text-foreground/75 mb-6">
                I am open to senior software engineering, technical lead, and cloud consulting roles.
              </p>
              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Contact information">
                <ContactItem icon="mail" label="Email" value={contact.email} href={`mailto:${contact.email}`} />
                <ContactItem icon="phone" label="Phone" value={contact.phone} href={contact.phoneHref} />
                <ContactItem icon="globe" label="Location" value={contact.location} />
                <ContactItem icon="linkedin" label="LinkedIn" value={`/in/${contact.linkedin}`} href={contact.linkedinHref} />
              </nav>
            </CardContent>
          </Card>
        </section>

        <footer className="pt-8 text-center text-[11px] text-muted-foreground/70">
          <p>© {new Date().getFullYear()} Pinsara Weerasinghe. Built with Next.js & Tailwind CSS.</p>
        </footer>

      </div>

      {/* Global Project Modal Popup */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
