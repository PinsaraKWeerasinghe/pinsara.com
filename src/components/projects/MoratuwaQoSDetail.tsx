import React from "react";
import { Cpu, BarChart3, Award, MessageSquareText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function MoratuwaQoSDetail() {
  const stack = ["Apache Spark", "NLP", "Python", "Machine Learning", "Data Analytics"];

  return (
    <div className="space-y-6 rounded-2xl bg-card/60 p-6 md:p-8 border border-border/60 backdrop-blur-md">
      <div className="space-y-1">
        <Badge className="bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] font-bold uppercase tracking-wider mb-2">
          University of Moratuwa · Final Year Research
        </Badge>
        <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
          Taxi Driver QoS Analysis & Dynamic Ranking Platform
        </h3>
        <p className="text-xs font-semibold text-muted-foreground">
          Department of Computer Science & Engineering, UoM
        </p>
      </div>

      <p className="text-sm text-foreground/85 leading-relaxed">
        An advanced ML analytics framework developed to evaluate taxi driver Quality-of-Service (QoS) in real-time. By coupling Natural Language Processing (NLP) sentiment extraction with distributed Apache Spark stream processing, the system computes fair, dynamic driver rankings from telemetry and unstructured rider feedback.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-purple-400 font-bold text-xs">
            <MessageSquareText className="size-4" /> NLP Sentiment Extraction
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Custom text mining pipeline extracting granular sentiment polarity and domain-specific feedback signals from qualitative rider comments.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-primary font-bold text-xs">
            <Cpu className="size-4" /> Apache Spark Stream Processing
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            High-throughput distributed stream computation calculating continuous QoS metric vectors across large-scale ride datasets.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-accent font-bold text-xs">
            <BarChart3 className="size-4" /> Dynamic Multi-Attribute Ranking
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Algorithmic scoring model combining GPS route telemetry, punctual arrival rates, and NLP feedback scores for real-time leaderboards.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
            <Award className="size-4" /> Academic Research Rigor
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Completed as part of B.Sc. (Hons) degree requirements at CSE, University of Moratuwa with validated experimental benchmarking.
          </p>
        </div>
      </div>

      <div className="pt-2 flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <Badge key={tech} variant="outline" className="text-[10px] font-semibold bg-purple-500/10 text-purple-300 border-purple-500/20">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
