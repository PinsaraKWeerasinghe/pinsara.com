import React from "react";
import { Server, Database, Activity, Cpu, GitMerge } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AirCanadaDataHubDetail() {
  const stack = [
    "AWS Lambda",
    "AWS Glue",
    "Amazon S3",
    "Serverless Framework",
    "Apache Kafka",
    "Amazon OpenSearch",
    "PostgreSQL",
    "CloudWatch",
    "GraphQL",
  ];

  return (
    <div className="space-y-6 rounded-2xl bg-card/60 p-6 md:p-8 border border-border/60 backdrop-blur-md">
      <div className="space-y-1">
        <Badge className="bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[10px] font-bold uppercase tracking-wider mb-2">
          Serverless Guru Client Project · Air Canada
        </Badge>
        <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
          Air Canada Cloud Data Hub & Serverless Microservices
        </h3>
        <p className="text-xs font-semibold text-muted-foreground">
          Role: Senior Software Engineer / Cloud Consultant
        </p>
      </div>

      <p className="text-sm text-foreground/85 leading-relaxed">
        Enterprise-grade cloud Data Hub and serverless microservices for Air Canada. Designed to process high-volume real-time flight telemetry, passenger data streams, and internal enterprise storage seamlessly on AWS.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-xs">
            <Server className="size-4" /> Kafka Event Streaming Pipelines
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Engineered real-time data ingestion pipelines connecting Apache Kafka event topics to AWS Glue ETL jobs for automated S3 data lake storage.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-primary font-bold text-xs">
            <Database className="size-4" /> Zero-Downtime DB Migration
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Led enterprise database migration from legacy MySQL to PostgreSQL, maintaining strict transactional consistency, schema isolation, and zero operational downtime.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-accent font-bold text-xs">
            <Cpu className="size-4" /> OpenSearch Analytics Indexing
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Managed Amazon OpenSearch Service indexing patterns, enabling rapid sub-second search and analytical querying across massive dataset logs.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
            <Activity className="size-4" /> Cost & Performance Optimization
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Constructed CloudWatch dashboards and automated anomaly alarms, cutting operational cloud waste while safeguarding mission-critical reliability.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/40 border border-border/30 space-y-1.5 col-span-1 sm:col-span-2">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs">
            <GitMerge className="size-4" /> GraphQL SharePoint API Bridges
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Implemented GraphQL API bridges unifying external enterprise storage systems like SharePoint with internal serverless services.
          </p>
        </div>
      </div>

      <div className="pt-2 flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <Badge key={tech} variant="outline" className="text-[10px] font-semibold bg-sky-500/10 text-sky-300 border-sky-500/20">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
