import { ContactItem } from "@/components/ContactItem";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { SectionTitle } from "@/components/SectionTitle";
import { SiteNav } from "@/components/SiteNav";
import { SkillCategory } from "@/components/SkillCategory";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { FileDown } from "lucide-react";

export default function Home() {
  const { contact, education, skillCategories, experiences, extraCurricular, referees } = profile;

  return (
    <div className="min-h-screen bg-bg">
      <SiteNav />

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.52_0.14_245_/_0.12),transparent)]"
          aria-hidden
        />
        <section className="relative mx-auto max-w-5xl px-4 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:grid lg:grid-cols-[minmax(0,220px),1fr] lg:gap-14 lg:pt-20">
          <div className="flex flex-col items-center lg:items-start">
            <ProfileAvatar alt={profile.name} initials="PW" />
          </div>
          <div className="mt-10 text-center lg:mt-0 lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Software engineer</p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground sm:text-xl">{profile.subtitle}</p>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground lg:mx-0">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button size="lg" className="rounded-xl px-6 shadow-md" asChild>
                <a href={`mailto:${contact.email}`}>Email me</a>
              </Button>
              <Button variant="secondary" size="lg" className="rounded-xl px-6" asChild>
                <a
                  href={contact.resumePdfHref}
                  download="Resume_General_160670H.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown className="size-4" aria-hidden />
                  Download resume
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl px-6" asChild>
                <a href={contact.githubHref} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl px-6" asChild>
                <a href={contact.linkedinHref} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <main className="mx-auto max-w-5xl space-y-20 px-4 pb-20">
        <section id="about" className="scroll-mt-28" aria-labelledby="about-heading">
          <SectionTitle id="about-heading">About</SectionTitle>
          <p className="mt-6 max-w-3xl text-pretty leading-relaxed text-muted-foreground">{profile.about}</p>
        </section>

        <section id="experience" className="scroll-mt-28" aria-labelledby="experience-heading">
          <SectionTitle id="experience-heading">Experience & projects</SectionTitle>
          <div className="mt-8 space-y-6">
            {experiences.map((exp) => {
              if ("projects" in exp && exp.projects) {
                const key =
                  "company" in exp && exp.company
                    ? `${exp.company}-${exp.period}`
                    : `${exp.role}-${exp.period}`;
                return (
                  <ExperienceCard
                    key={key}
                    role={exp.role}
                    company={"company" in exp ? exp.company : undefined}
                    period={exp.period}
                    projects={exp.projects}
                  />
                );
              }
              if ("title" in exp && exp.title) {
                return (
                  <ExperienceCard
                    key={exp.title}
                    role={exp.role}
                    period={exp.period}
                    title={exp.title}
                    description={exp.description}
                    stack={exp.stack}
                  />
                );
              }
              return null;
            })}
          </div>
        </section>

        <section id="education" className="scroll-mt-28" aria-labelledby="education-heading">
          <SectionTitle id="education-heading">Education</SectionTitle>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {education.map((edu) => (
              <li key={edu.institution}>
                <Card className="h-full shadow-sm transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="font-serif text-lg text-primary">{edu.institution}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{edu.detail}</CardDescription>
                    {"note" in edu && edu.note && (
                      <p className="pt-1 text-sm font-medium text-accent">{edu.note}</p>
                    )}
                    {"period" in edu && edu.period && (
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {edu.period}
                      </p>
                    )}
                  </CardHeader>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="scroll-mt-28" aria-labelledby="skills-heading">
          <SectionTitle id="skills-heading">Skills</SectionTitle>
          <Card className="mt-8 shadow-sm">
            <CardContent className="pt-8 sm:pt-10">
              {skillCategories.map((cat) => (
                <SkillCategory key={cat.title} title={cat.title} items={cat.items} />
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="extra" className="scroll-mt-28" aria-labelledby="extra-heading">
          <SectionTitle id="extra-heading">Extra-curricular</SectionTitle>
          <ul className="mt-8 space-y-4">
            {extraCurricular.map((item) => (
              <li key={item.title}>
                <Card className="border-border/80 bg-surface-elevated shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-medium">{item.title}</CardTitle>
                    <CardDescription className="text-accent">{item.org}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        <section id="referees" className="scroll-mt-28" aria-labelledby="referees-heading">
          <SectionTitle id="referees-heading">Referees</SectionTitle>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {referees.map((referee) => (
              <li key={referee.email}>
                <Card className="h-full shadow-sm">
                  <CardHeader>
                    <CardTitle className="font-serif text-lg text-primary">{referee.name}</CardTitle>
                    <CardDescription>{referee.role}</CardDescription>
                    <CardDescription>{referee.org}</CardDescription>
                    <Button variant="link" className="h-auto px-0 pt-2 text-accent" asChild>
                      <a href={referee.href}>{referee.email}</a>
                    </Button>
                  </CardHeader>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        <Card
          id="contact"
          className="scroll-mt-28 border-primary bg-primary text-primary-foreground shadow-lg"
        >
          <CardHeader>
            <SectionTitle id="contact-heading" variant="inverse">
              Contact
            </SectionTitle>
          </CardHeader>
          <CardContent className="grid gap-8 pb-10 sm:grid-cols-2">
            <nav className="space-y-1" aria-label="Contact details">
              <ContactItem inverse icon="calendar" label="Date of birth" value={contact.dob} />
              <ContactItem
                inverse
                icon="phone"
                label="Phone"
                value={contact.phone}
                href={contact.phoneHref}
              />
              <ContactItem
                inverse
                icon="mail"
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactItem
                inverse
                icon="globe"
                label="Website"
                value={contact.website}
                href={contact.websiteHref}
              />
              <ContactItem
                inverse
                icon="github"
                label="GitHub"
                value={contact.github}
                href={contact.githubHref}
              />
              <ContactItem
                inverse
                icon="linkedin"
                label="LinkedIn"
                value={contact.linkedin}
                href={contact.linkedinHref}
              />
            </nav>
            <p className="self-center text-sm leading-relaxed text-primary-foreground/90">
              Open to software engineering roles and collaborations. Prefer email or LinkedIn for professional
              inquiries.
            </p>
          </CardContent>
        </Card>

        <footer className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.shortName}. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
