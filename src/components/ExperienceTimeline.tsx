"use client";

import React, { useState } from "react";
import { WorkExperience } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  Briefcase,
  MapPin,
  Building2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface ExperienceTimelineProps {
  experiences: WorkExperience[];
  onOpenProjectDetail?: (projectId: string) => void;
}

export function ExperienceTimeline({
  experiences,
  onOpenProjectDetail,
}: ExperienceTimelineProps) {
  // Track expanded state for each experience item (by index)
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0]);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const expandAll = () => {
    setExpandedIndices(experiences.map((_, i) => i));
  };

  const collapseAll = () => {
    setExpandedIndices([]);
  };

  return (
    <div className="space-y-6">
      {/* Controls header */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-muted-foreground font-medium">
          <Briefcase className="size-4 text-primary" />
          <span>Interactive Career History</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={expandAll}
            className="text-[11px] h-7 px-2.5 rounded-lg border-border/50 text-muted-foreground hover:text-foreground"
          >
            Expand All
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={collapseAll}
            className="text-[11px] h-7 px-2.5 rounded-lg border-border/50 text-muted-foreground hover:text-foreground"
          >
            Collapse All
          </Button>
        </div>
      </div>

      {/* Vertical Timeline container */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/20 space-y-10">
        {experiences.map((exp, idx) => {
          const isExpanded = expandedIndices.includes(idx);
          const isCurrent = exp.period.includes("Present");

          return (
            <div key={`${exp.company}-${idx}`} className="relative group">
              {/* Timeline Node Icon/Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 size-6 sm:size-7 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  isCurrent
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_12px_rgba(59,130,246,0.5)] animate-pulse"
                    : "bg-background text-primary border-primary/60 group-hover:border-primary group-hover:bg-primary-soft/30"
                }`}
              >
                <Briefcase className="size-3" />
              </div>

              {/* Main Timeline Card */}
              <div className="rounded-xl border border-border/40 bg-card/60 p-5 sm:p-6 backdrop-blur-sm shadow-sm transition-all duration-200 hover:border-border/80 hover:bg-card/90">
                {/* Top header info */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-sans text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      {exp.type && (
                        <Badge variant="secondary" className="text-[10px] bg-secondary/80 text-secondary-foreground">
                          {exp.type}
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground font-medium">
                      <span className="flex items-center gap-1 text-foreground/80 font-semibold">
                        <Building2 className="size-3.5 text-primary" />
                        {exp.company}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="size-3.5" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Period Badge */}
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary-soft/50 text-primary border border-primary/20 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Air Canada / Special Client Tag */}
                {exp.clientProject && (
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold">
                    <Sparkles className="size-3.5" />
                    <span>Client Project: {exp.clientProject}</span>
                    {onOpenProjectDetail && (
                      <button
                        onClick={() => onOpenProjectDetail("air-canada-data-hub")}
                        className="ml-2 underline text-[11px] text-sky-300 hover:text-sky-100"
                      >
                        View Deep Dive
                      </button>
                    )}
                  </div>
                )}

                {/* Toggle Button for Key Highlights */}
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-border/30">
                  <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                    {exp.stack.slice(0, isExpanded ? exp.stack.length : 5).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-secondary text-secondary-foreground border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {!isExpanded && exp.stack.length > 5 && (
                      <span className="text-[10px] text-muted-foreground self-center font-medium">
                        +{exp.stack.length - 5} more
                      </span>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(idx)}
                    className="text-xs h-8 px-2 text-muted-foreground hover:text-foreground"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? (
                      <>
                        Less <ChevronUp className="ml-1 size-3.5" />
                      </>
                    ) : (
                      <>
                        Highlights ({exp.keyHighlights.length}){" "}
                        <ChevronDown className="ml-1 size-3.5" />
                      </>
                    )}
                  </Button>
                </div>

                {/* Collapsible Key Highlights List */}
                {isExpanded && (
                  <div className="mt-4 pt-3 border-t border-border/30 space-y-2.5 animate-in fade-in slide-in-from-top-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Key Engineering Contributions
                    </h4>
                    <ul className="space-y-2">
                      {exp.keyHighlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85 leading-relaxed"
                        >
                          <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
