import React from "react";
import { CheckCircle2, Sliders, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function MasHoldingsDetail() {
  const stack = ["Flutter", "Dart", "Firebase"];

  return (
    <div className="space-y-6 rounded-2xl bg-card/60 p-6 md:p-8 border border-border/60 backdrop-blur-md">
      <div className="space-y-1">
        <Badge className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-bold uppercase tracking-wider mb-2">
          Fcode Labs Partnership · MAS Holdings
        </Badge>
        <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
          MAS Holdings Quality Process Automation & Smart Fashion App
        </h3>
        <p className="text-xs font-semibold text-muted-foreground">
          Cross-Platform Mobile Engineer
        </p>
      </div>

      <p className="text-sm text-foreground/85 leading-relaxed">
        Engineered a cross-platform mobile application utilizing Flutter, Dart, and Firebase to digitize garment quality inspection workflows across manufacturing lines, while introducing an interactive side-by-side apparel comparison engine for smart fashion evaluation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
            <CheckCircle2 className="size-4" /> Quality Process Automation
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Replaced manual paper audit checklists with structured mobile evaluation forms, accelerating quality reporting times.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-primary font-bold text-xs">
            <Sliders className="size-4" /> Smart Apparel Comparison
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Built synchronized split-screen image inspection controls allowing quality engineers to compare garment samples side-by-side.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5 sm:col-span-2">
          <div className="flex items-center gap-2 text-accent font-bold text-xs">
            <Layers className="size-4" /> Offline-First Cloud Sync
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Integrated Firebase Cloud Firestore for local offline-first persistence, ensuring uninterrupted inspection sessions on factory floors.
          </p>
        </div>
      </div>

      <div className="pt-2 flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <Badge key={tech} variant="outline" className="text-[10px] font-semibold bg-amber-500/10 text-amber-300 border-amber-500/20">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
