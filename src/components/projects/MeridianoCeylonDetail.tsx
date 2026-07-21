import React from "react";
import { ExternalLink, Compass, ShieldCheck, Zap, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function MeridianoCeylonDetail() {
  const stack = ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS"];

  return (
    <div className="space-y-6 rounded-2xl bg-card/60 p-6 md:p-8 border border-border/60 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider mb-2">
            Full-Stack Production Platform
          </Badge>
          <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
            Meridiano Ceylon
          </h3>
          <p className="text-xs font-semibold text-muted-foreground">
            Role: Full-Stack Creator & Architect
          </p>
        </div>
        <Button asChild size="sm" className="rounded-xl shadow-sm">
          <a href="https://www.meridianoceylon.com/" target="_blank" rel="noreferrer">
            Visit meridianoceylon.com <ExternalLink className="ml-2 size-3.5" />
          </a>
        </Button>
      </div>

      <p className="text-sm text-foreground/85 leading-relaxed">
        Meridiano Ceylon is a luxury production travel booking platform architected from scratch using Next.js and Firebase. It powers dynamic tour package management, real-time customer enquiry workflows, user authentication, and secure media storage for Sri Lankan travel experiences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-primary font-bold text-xs">
            <Compass className="size-4" /> Tour Package Management
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Dynamic package creation with multi-day itinerary timelines, interactive maps, pricing tiers, and rich media galleries.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-accent font-bold text-xs">
            <Zap className="size-4" /> Real-time Booking Enquiries
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Instant booking request processing integrated with automated email dispatch and Cloud Firestore live updates.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-primary font-bold text-xs">
            <ShieldCheck className="size-4" /> Firebase Auth & Security
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Secure client authentication flows and Firebase Storage CDN asset delivery optimized for high-bandwidth media.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
            <Globe className="size-4" /> Modern SSR & SEO
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Next.js App Router server-side rendering for instant page loads, rich open-graph meta tags, and top Lighthouse SEO scores.
          </p>
        </div>
      </div>

      <div className="pt-2 flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <Badge key={tech} variant="outline" className="text-[10px] font-semibold bg-primary-soft/30 text-primary border-primary/20">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
