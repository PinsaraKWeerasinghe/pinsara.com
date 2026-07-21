"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Sparkles, Layers, Cpu } from "lucide-react";
import { ProjectDetail } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-background border border-border/60 shadow-2xl p-6 sm:p-8 space-y-6 text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-foreground/50 hover:text-foreground hover:bg-secondary transition-colors"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            {project.context && (
              <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider text-accent border-accent/30 bg-accent/10">
                {project.context}
              </Badge>
            )}
            {project.role && (
              <span className="text-xs font-semibold text-muted-foreground">
                {project.role}
              </span>
            )}
          </div>
          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-sans">
            {project.name}
          </h2>
        </div>

        {/* Summary */}
        <p className="text-sm leading-relaxed text-foreground/80 font-normal">
          {project.summary}
        </p>

        {/* Live Link if available */}
        {project.url && (
          <div>
            <Button asChild size="sm" className="rounded-lg font-medium">
              <a href={project.url} target="_blank" rel="noreferrer">
                Visit Live Platform <ExternalLink className="ml-2 size-3.5" />
              </a>
            </Button>
          </div>
        )}

        {/* Tech Stack */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Cpu className="size-3.5 text-primary" /> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-[11px] font-semibold px-2.5 py-0.5 bg-primary-soft/40 text-primary border border-primary/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-border/40">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-accent" /> Key Capabilities & Features
            </h3>
            <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm text-foreground/80 leading-relaxed">
              {project.keyFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Architectural Highlights */}
        {project.architecturalHighlights && project.architecturalHighlights.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-border/40">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Layers className="size-3.5 text-primary" /> Architecture & Engineering
            </h3>
            <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm text-foreground/80 leading-relaxed">
              {project.architecturalHighlights.map((arch, i) => (
                <li key={i}>{arch}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-4 border-t border-border/30 flex justify-end">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close Detail View
          </Button>
        </div>
      </div>
    </div>
  );
}
