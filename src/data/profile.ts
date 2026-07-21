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
    "As an Honors Computer Science & Engineering graduate from the University of Moratuwa, I bring over 5.5 years of rigorous analytical training and enterprise-scale execution to building high-throughput cloud architectures. I have built a career on technical adaptability, successfully pivoting from 2 years of developing low-latency market data backend infrastructure using Java, Spring Boot, and Solr at GTN, to 3.5 years of deep cloud engineering architecting serverless microservices and complex data hubs on AWS for global enterprises like Air Canada. Now, I am looking to scale my technical impact, drive architectural strategy, and take on end-to-end technical ownership as an Associate Technical Lead.",
  about:
    "As an Honors Computer Science & Engineering graduate from the University of Moratuwa, I bring over 5.5 years of rigorous analytical training and enterprise-scale execution to building high-throughput cloud architectures. I have built a career on technical adaptability, successfully pivoting from 2 years of developing low-latency market data backend infrastructure using Java, Spring Boot, and Solr at GTN, to 3.5 years of deep cloud engineering architecting serverless microservices and complex data hubs on AWS for global enterprises like Air Canada. Now, I am looking to scale my technical impact, drive architectural strategy, and take on end-to-end technical ownership as an Associate Technical Lead.",
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
      period: "02/2023 – Present",
      type: "Remote / Full-time",
      clientProject: "Air Canada Cloud Data Hub & Microservices",
      keyHighlights: [
        "Architected scalable serverless microservices and an enterprise cloud Data Hub for Air Canada using Serverless Framework, Node.js, and AWS Lambda.",
        "Engineered real-time event ingestion data pipelines integrating Apache Kafka topics and AWS Glue ETL jobs into Amazon S3.",
        "Managed search indexing and analytical querying patterns via Amazon OpenSearch Service.",
        "Led enterprise database migration from MySQL to PostgreSQL maintaining strict transactional integrity and zero downtime.",
        "Constructed CloudWatch monitoring dashboards and automated anomaly alarms, optimizing operational cloud costs.",
        "Implemented GraphQL API bridges unifying external enterprise storage like SharePoint.",
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
      ],
    },
    {
      company: "GTN Technologies (Global Market Technologies)",
      role: "Software Engineer",
      period: "04/2021 – 02/2023",
      location: "Colombo, Sri Lanka",
      keyHighlights: [
        "Engineered market-price backend components for real-time and backlog extraction of high-frequency stock exchange data.",
        "Designed data dissemination backend engines using Java, Spring Boot, WebSockets, and TCP Sockets serving thousands of concurrent enterprise clients.",
        "Optimized text-search indexing speeds across database nodes by architecting wrappers around Apache Solr instances.",
        "Built asynchronous decoupled message queues utilizing Apache Kafka, AWS SQS, and AWS SNS.",
        "Integrated CI/CD delivery pipelines using Bitbucket, Bamboo, and Litestream.",
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
      company: "GTN Technologies / Mubasher Technologies",
      role: "Intern Software Engineer",
      period: "06/2019 – 12/2019",
      location: "Colombo, Sri Lanka",
      keyHighlights: [
        "Engineered custom log analysis tools and anomaly detection utilities for financial price backend modules.",
        "Executed load and stress testing across high-frequency backend financial data pipelines to protect platform stability under peak traffic.",
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
      id: "air-canada-data-hub",
      name: "Air Canada Cloud Data Hub & Microservices",
      role: "Architect & Senior Serverless Engineer",
      context: "Serverless Guru Client Project",
      stack: [
        "AWS Lambda",
        "AWS Glue",
        "Amazon S3",
        "Serverless Framework",
        "Apache Kafka",
        "Amazon OpenSearch",
        "PostgreSQL",
        "CloudWatch",
        "GraphQL",
      ],
      summary:
        "Enterprise-grade cloud Data Hub and serverless microservices for Air Canada. Engineered real-time Apache Kafka event ingestion, AWS Glue ETL jobs, OpenSearch analytics, zero-downtime MySQL to PostgreSQL migration, and GraphQL enterprise bridges.",
      keyFeatures: [
        "Real-time event streaming pipelines consuming high-volume Apache Kafka topics into Amazon S3 storage buckets.",
        "Automated AWS Glue ETL transformation jobs for enterprise data harmonization.",
        "Amazon OpenSearch Service search indexing for sub-second analytical querying.",
        "Zero-downtime database migration from MySQL to PostgreSQL preserving transactional integrity.",
        "CloudWatch monitoring dashboards with automated anomaly alarms optimizing operational cloud expenditure.",
        "GraphQL API bridge unifying disparate enterprise storage platforms like SharePoint.",
      ],
      architecturalHighlights: [
        "Serverless-first architecture leveraging AWS Lambda for scalable event-driven processing.",
        "Infrastructure as Code (IaC) via Serverless Framework for reliable multi-stage deployments.",
        "Decoupled event-driven data flow protecting legacy upstream enterprise endpoints.",
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
