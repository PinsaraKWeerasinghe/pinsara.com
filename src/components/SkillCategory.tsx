import { Badge } from "@/components/ui/badge";

type SkillCategoryProps = {
  title: string;
  items: readonly string[];
};

export function SkillCategory({ title, items }: SkillCategoryProps) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <Badge variant="outline" className="font-normal">
              {item}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
