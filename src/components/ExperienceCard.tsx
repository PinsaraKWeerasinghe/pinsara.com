import { Separator } from "@/components/ui/separator";

type ExperienceCardProps = {
  role: string;
  period: string;
  title?: string;
  company?: string;
  description?: string;
  stack?: readonly string[];
  projects?: ReadonlyArray<{
    title: string;
    description: string;
    stack: readonly string[];
  }>;
};

export function ExperienceCard({
  role,
  period,
  company,
  description,
  stack,
  projects,
}: ExperienceCardProps) {
  return (
    <div className="group/exp-card relative rounded-xl p-4 md:p-6 transition-all duration-300 hover:bg-secondary/40 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] hover:backdrop-blur-sm">
      {/* Decorative outline glow on card hover */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover/exp-card:border-border/30 group-hover/exp-card:bg-primary-soft/5 transition-all duration-300 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h4 className="font-sans text-sm md:text-base font-bold text-foreground group-hover/exp-card:text-primary transition-colors duration-200">
              {role} {company ? ` · ${company}` : ""}
            </h4>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
            {period}
          </span>
        </div>

        {description && (
          <p className="mt-2 text-xs md:text-sm leading-relaxed text-muted-foreground/80">{description}</p>
        )}
        
        {stack && stack.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <span 
                key={tech} 
                className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-secondary text-secondary-foreground border border-border/40"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {projects && (
          <div className="mt-4 space-y-4">
            <Separator className="bg-border/20" />
            <ul className="space-y-4">
              {projects.map((p) => (
                <li key={p.title} className="group/proj relative pl-3 border-l border-primary/20 hover:border-primary transition-all duration-200">
                  <h5 className="font-semibold text-foreground text-xs md:text-sm group-hover/proj:text-primary transition-colors">
                    {p.title}
                  </h5>
                  <p className="mt-1 text-[11px] md:text-xs leading-relaxed text-muted-foreground/90">
                    {p.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-bold bg-primary-soft/50 text-primary border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
