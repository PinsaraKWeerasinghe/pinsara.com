"use client";

import React from "react";
import { ProjectDetail } from "@/data/profile";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Layers } from "lucide-react";

interface ProjectCardProps {
  project: ProjectDetail;
  onOpenDetail: (project: ProjectDetail) => void;
}

export function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  return (
    <Card className="group relative rounded-2xl glassmorphism border-border/50 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md flex flex-col justify-between overflow-hidden">
      <CardHeader className="p-6 pb-3 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          {project.context ? (
            <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider text-accent border-accent/30 bg-accent/10">
              {project.context}
            </Badge>
          ) : (
            <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider text-primary border-primary/30 bg-primary-soft/30">
              Featured Project
            </Badge>
          )}

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-foreground/60 hover:text-primary transition-colors"
              aria-label={`Visit ${project.name} live platform`}
            >
              <span>Live Site</span>
              <ExternalLink className="size-3" />
            </a>
          )}
        </div>

        <div>
          <CardTitle className="text-xl font-extrabold text-foreground group-hover:text-primary transition-colors font-sans">
            {project.name}
          </CardTitle>
          {project.role && (
            <CardDescription className="text-xs font-medium text-muted-foreground mt-1">
              {project.role}
            </CardDescription>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-0 space-y-4 flex-1 flex flex-col justify-between">
        <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
          {project.summary}
        </p>

        <div className="space-y-3 pt-2 border-t border-border/30">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-secondary text-secondary-foreground border border-border/40"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="text-[10px] font-semibold text-muted-foreground self-center">
                +{project.stack.length - 5}
              </span>
            )}
          </div>

          <Button
            onClick={() => onOpenDetail(project)}
            variant="ghost"
            size="sm"
            className="w-full justify-between h-9 rounded-xl bg-primary-soft/30 text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-xs transition-all duration-200"
          >
            <span className="flex items-center gap-1.5">
              <Layers className="size-3.5" /> Project Deep Dive
            </span>
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
