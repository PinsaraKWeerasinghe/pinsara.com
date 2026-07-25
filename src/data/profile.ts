export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  type?: string;
  location?: string;
  clientProject?: string;
  keyHighlights: string[];
  stack: string[];
}

export interface ProjectDetail {
  id: string;
  name: string;
  role?: string;
  context?: string;
  url?: string;
  stack: string[];
  summary: string;
  keyFeatures?: string[];
  architecturalHighlights?: string[];
}

export interface LeadershipItem {
  event: string;
  organization: string;
  role: string;
  details: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  note?: string;
  detail?: string;
}

export const profile = {
  name: "Pinsara Weerasinghe",
  shortName: "Pinsara Weerasinghe",
  title: "Senior Software Engineer / Cloud Consultant",
  bio: "Specializing in AWS Serverless Architecture, Microservices, and High-Throughput Data Systems.",
  targetRoles: [
    "Associate Technical Lead",
    "Software Engineer III",
    "Senior Cloud Consultant",
  ],
  location: "Colombo, Sri Lanka",
  subtitle:
    "Specializing in AWS Serverless Architecture, Microservices, and High-Throughput Data Systems.",
  summary:
    "University of Moratuwa Computer Science and Engineering Honors graduate with 6 years of experience architecting high-performance backend systems across the Fintech and Aviation domains. Spent 2.5 years in Fintech delivering low-latency Java and Spring Boot backend infrastructure to optimize transactional data processing. Advanced into Aviation tech for 3.5 years, designing cloud-native microservices and enterprise data hubs on AWS utilizing the Serverless Framework and AWS CDK. Combines deep server-side logic mastery with automated cloud provisioning to deliver fault-tolerant, high-throughput microservice architectures. Seeking to leverage scalable system design and cloud engineering expertise as a Senior Backend Engineer.",
  about:
    "University of Moratuwa Computer Science and Engineering Honors graduate with 6 years of experience architecting high-performance backend systems across the Fintech and Aviation domains. Spent 2.5 years in Fintech delivering low-latency Java and Spring Boot backend infrastructure to optimize transactional data processing. Advanced into Aviation tech for 3.5 years, designing cloud-native microservices and enterprise data hubs on AWS utilizing the Serverless Framework and AWS CDK. Combines deep server-side logic mastery with automated cloud provisioning to deliver fault-tolerant, high-throughput microservice architectures. Seeking to leverage scalable system design and cloud engineering expertise as a Senior Backend Engineer.",
  contact: {
    email: "pinsarakweerasinghe@gmail.com",
    phone: "+94 71 959 6692",
    phoneHref: "tel:+94719596692",
    location: "Colombo, Sri Lanka",
    portfolio: "https://pinsara.com",
    github: "kaushalpkw",
    githubHref: "https://github.com/kaushalpkw",
    linkedin: "pinsara",
    linkedinHref: "https://linkedin.com/in/pinsara",
    resumePdfHref: "/Resume/Resume_General_160670H.pdf",
  },
  education: [
    {
      institution: "University of Moratuwa",
      degree: "B.Sc. (Hons) in Computer Science and Engineering",
      period: "09/2016 – 03/2021",
      note: "Graduated with Honors",
    },
    {
      institution: "Mo/Malwaththawala National School",
      degree: "G.C.E. A/L Physical Science",
      period: "Jan 2001 – Aug 2014",
      note: "AAA | Z-Score: 2.3135 | District Rank: 2",
      detail: "Combined Mathematics (A), Physics (A), Chemistry (A)",
    },
  ] as EducationItem[],
  technicalProficiency: {
    coreLanguages: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Java",
      "Python",
      "SQL",
      "Dart",
    ],
    cloudAndServerless: [
      "AWS Lambda",
      "AWS Glue",
      "Amazon S3",
      "Amazon DynamoDB",
      "Amazon OpenSearch",
      "Amazon CloudWatch",
      "AWS SQS",
      "AWS SNS",
      "Serverless Framework",
    ],
    frameworks: [
      "Express.js",
      "NestJS",
      "Spring Boot",
      "React",
      "Next.js",
      "Apache Solr",
      "Flutter",
    ],
    databasesAndStreaming: [
      "PostgreSQL",
      "MySQL",
      "Amazon DynamoDB",
      "Apache Kafka",
      "Firebase",
    ],
    devopsAndTools: [
      "Git",
      "Docker",
      "Bitbucket",
      "Bamboo",
      "Litestream",
    ],
  },
  workExperiences: [
    {
      company: "Serverless Guru",
      role: "Senior Software Engineer / Cloud Consultant",
      period: "02/2023 - Present",
      type: "Remote / Full-time",
      clientProject: "Air Canada Cloud Data Hub & Microservices",
      keyHighlights: [
        "Architected a reusable Python utility library for AWS Glue ETL jobs, optimizing data transformation workflows and reducing AWS cloud compute costs by 20%.",
        "Engineered a cost-effective CloudWatch alarm triggering mechanism utilizing log metric filters, streamlining automated alerting and reducing CloudWatch expenditure by 2%.",
        "Engineered a real-time event persistence engine using Kafka Connect and AWS Athena, enabling instant event debugging, rapid failure recovery, and significantly enhancing overall system availability and fault tolerance.",
        "Optimized enterprise data migration pipelines, refining execution logic and reducing total data migration processing time by 30%.",
        "Led the development of a real-time customer data ingestion platform, utilizing AWS Lambda and Apache Kafka topics to seamlessly process over 75% of total enterprise customer event workloads.",
        "Integrated OpenSearch indexing for high-traffic API endpoints, offloading query patterns from primary databases to reduce database load by 40% and unblock downstream database integrations.",
      ],
      stack: [
        "AWS Lambda",
        "AWS Glue",
        "Amazon S3",
        "Serverless Framework",
        "Node.js",
        "TypeScript",
        "Apache Kafka",
        "Amazon OpenSearch",
        "PostgreSQL",
        "MySQL",
        "CloudWatch",
        "GraphQL",
        "Python",
        "Kafka Connect",
        "AWS Athena",
      ],
    },
    {
      company: "GTN Technologies (Previously Global Market Technologies)",
      role: "Software Engineer",
      period: "04/2021 - 02/2023",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      keyHighlights: [
        "Engineered real-time OHLC data extraction components to offloading high-concurrency traffic from legacy monolithic systems, reducing processing latency by 15%.",
        "Architected real-time data dissemination engines using Java, Spring Boot, WebSockets, and TCP Sockets, streaming concurrent market feeds to enterprise trading clients while reducing overall data latency by 20%.",
        "Engineered value-added price data pipelines for FinHub integration, enhancing market data extraction workflows and expanding real-time analytical capabilities for financial end-users.",
        "Optimized database performance by wrapping Apache Solr instances to handle non-critical API read queries, accelerating text-search indexing speeds and reducing primary database load by 25%.",
        "Mentored and guided software engineering interns in architecting an automated anomaly detection tool, elevating team engineering standards and accelerating internal diagnostic capabilities.",
      ],
      stack: [
        "Java",
        "Spring Boot",
        "WebSockets",
        "TCP Sockets",
        "Apache Solr",
        "Apache Kafka",
        "AWS SQS",
        "AWS SNS",
        "Bitbucket",
        "Bamboo",
        "Litestream",
      ],
    },
    {
      company: "GTN Technologies (Previously Global Market Technologies)",
      role: "Intern Software Engineer",
      period: "06/2019 - 12/2019",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      keyHighlights: [
        "Engineered automated log analysis and anomaly detection tool for real-time market price backends, streaming live health telemetry to internal monitoring dashboards to streamline incident response and maintain high availability.",
      ],
      stack: [
        "Java",
        "JMeter",
        "Multithreading",
        "Log Analysis",
        "Stress Testing",
      ],
    },
  ] as WorkExperience[],
  get experiences() {
    return this.workExperiences;
  },
  featuredProjects: [
    {
      id: "meridiano-ceylon",
      name: "Meridiano Ceylon",
      role: "Full-Stack Creator & Architect",
      url: "https://www.meridianoceylon.com/",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Firebase",
        "Tailwind CSS",
      ],
      summary:
        "Full-stack production travel booking platform built with Next.js and Firebase featuring dynamic tour package management, real-time booking enquiries, user authentication, and secure media storage.",
      keyFeatures: [
        "Dynamic tour package management with rich media galleries and itinerary details.",
        "Real-time customer booking enquiry workflow with instant email notification integration.",
        "Firebase Authentication and Firestore real-time database indexing.",
        "Custom responsive design with dark mode, luxury aesthetic, and micro-interactions.",
      ],
      architecturalHighlights: [
        "Built with Next.js App Router for optimal SSR rendering speed and SEO performance.",
        "Modular UI design powered by Tailwind CSS and client-side reactive state management.",
        "Optimized asset delivery pipeline utilizing Firebase Storage CDN.",
      ],
    },
    {
      id: "moratuwa-qos-research",
      name: "Taxi Driver QoS Analysis & Ranking Platform",
      role: "Lead ML Researcher & Developer",
      context: "University of Moratuwa Final Year Research Project",
      stack: [
        "Apache Spark",
        "NLP",
        "Python",
        "Machine Learning",
        "Data Analytics",
      ],
      summary:
        "Developed an ML analytics framework using NLP and Apache Spark to evaluate individual taxi driver Quality-of-Service (QoS) and compute real-time dynamic rankings from telemetry and customer feedback datasets.",
      keyFeatures: [
        "Natural Language Processing (NLP) sentiment engine extracting nuanced driver feedback from unstructured user reviews.",
        "Distributed Apache Spark stream processing computing real-time driver performance vectors.",
        "Dynamic multi-attribute ranking algorithm blending telemetry metrics with customer QoS scores.",
        "Interactive analytics dashboard visualizing score distributions and anomaly drivers.",
      ],
      architecturalHighlights: [
        "Scalable distributed data engine capable of handling high-velocity streaming ride metrics.",
        "Sentiment analysis pipeline optimized for domain-specific transport terminology.",
        "Published academic research contribution from the Department of Computer Science & Engineering, UoM.",
      ],
    },
    {
      id: "mas-holdings-app",
      name: "MAS Holdings Quality Process Automation & Smart Fashion App",
      role: "Cross-Platform Mobile Engineer",
      context: "Fcode Labs Partnership",
      stack: [
        "Flutter",
        "Dart",
        "Firebase",
      ],
      summary:
        "Engineered a cross-platform Flutter/Dart app with Firebase backend to digitize garment evaluation workflows while introducing a smart fashion feature for side-by-side apparel comparison.",
      keyFeatures: [
        "Digitized quality check workflows replacing manual paper sessions with structured mobile evaluations.",
        "Smart side-by-side apparel comparison engine with synchronized high-resolution image inspect controls.",
        "Offline-first evaluation sync powered by Firebase Cloud Firestore.",
        "Automated audit report generation exporting real-time quality analytics.",
      ],
      architecturalHighlights: [
        "Single-codebase Flutter app targeting iOS and Android with custom high-performance canvas controls.",
        "Seamless cloud synchronization ensuring zero data loss in factory floor environments.",
      ],
    },
  ] as ProjectDetail[],
  leadershipAndVolunteering: [
    {
      event: "Decrypt 2018 (CSE Open Day)",
      organization: "Department of Computer Science & Engineering, University of Moratuwa",
      role: "Organizing Committee Member",
      details:
        "Coordinated event logistics, technical department showcases, and visitor engagement for the flagship CSE exhibition.",
    },
    {
      event: "Dedunu Ganthota",
      organization: "Literature Association, University of Moratuwa",
      role: "Organizing Committee Member",
      details:
        "Contributed to event planning, cultural program coordination, and community execution.",
    },
  ] as LeadershipItem[],
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
