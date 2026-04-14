import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  title,
  company,
  description,
  stack,
  projects,
}: ExperienceCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {role}
              {company ? ` · ${company}` : ""}
            </p>
            {title && (
              <CardTitle className="mt-2 font-serif text-lg leading-snug text-primary">
                {title}
              </CardTitle>
            )}
          </div>
          <Badge variant="secondary" className="shrink-0 font-medium">
            {period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {description && (
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        )}
        {stack && stack.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li key={tech}>
                <Badge variant="default" className="font-normal">
                  {tech}
                </Badge>
              </li>
            ))}
          </ul>
        )}
        {projects && (
          <>
            <Separator />
            <ul className="space-y-5">
              {projects.map((p) => (
                <li key={p.title}>
                  <h4 className="font-medium text-foreground">{p.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <li key={tech}>
                        <Badge variant="outline" className="font-normal text-muted-foreground">
                          {tech}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  );
}
