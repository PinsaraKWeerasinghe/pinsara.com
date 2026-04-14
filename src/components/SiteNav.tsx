import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/profile";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="#"
          className="font-serif text-lg font-semibold tracking-tight text-primary transition-colors hover:text-accent"
        >
          Pinsara Weerasinghe
        </Link>
        <nav className="flex flex-wrap gap-1" aria-label="Page sections">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" className="text-muted-foreground" asChild>
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
