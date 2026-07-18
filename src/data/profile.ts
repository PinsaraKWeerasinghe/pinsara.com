export const profile = {
  name: "Pinsara Weerasinghe",
  shortName: "Pinsara Weerasinghe",
  title: "Senior Software Engineer | Associate Technical Lead",
  subtitle:
    "Building systems that scale — AWS, Serverless, high-throughput data & cloud architecture.",
  summary:
    "Cloud Consultant and Senior Software Engineer with 5+ years delivering production-grade distributed systems for global enterprises. Led cloud data hub architecture at Serverless Guru for Air Canada. Engineered real-time market-price engines at GTN. Honors graduate in Computer Science & Engineering, University of Moratuwa. Now pursuing roles where technical depth drives product impact at scale.",
  about:
    "I architect and ship systems that have to work — reliably, at scale, under pressure. My focus is serverless cloud engineering, high-throughput APIs, and data pipeline design on AWS. I have built the Air Canada Cloud Data Hub from the ground up using Lambda, Glue, and S3. I have engineered low-latency real-time price streams serving thousands of concurrent clients in global financial markets. I thrive in cross-functional remote teams, care deeply about maintainable architecture, and move fast without cutting corners that matter.",
  contact: {
    dob: "24 Mar 1995",
    phone: "+94 71 959 6692",
    phoneHref: "tel:+94719596692",
    email: "pinsarakweerasinghe@gmail.com",
    website: "pinsara.com",
    websiteHref: "https://pinsara.com",
    github: "PinsaraKWeerasinghe",
    githubHref: "https://github.com/PinsaraKWeerasinghe",
    linkedin: "pinsara",
    linkedinHref: "https://www.linkedin.com/in/pinsara",
    resumePdfHref: "/Resume/Resume_General_160670H.pdf",
  },
  education: [
    {
      institution: "University of Moratuwa",
      detail: "BSc (Hons) in Computer Science and Engineering",
      period: "09/2016 — Expected 03/2021",
      note: "Graduated with Honors",
    },
    {
      institution: "Mo/Malwaththawala National School",
      period: "Jan 2001 — Aug 2014",
      detail:
        "Combined Mathematics (A), Physics (A), Chemistry (A). District rank 2 · Z-score 2.3135",
      note: "AAA | Z-Score: 2.3135 | District Rank: 2",
    },
  ],
  skillCategories: [
    {
      title: "Technical Fields",
      items: [
        "Serverless Architecture",
        "Microservices",
        "Data Pipelines",
        "API Dissemination",
        "Cloud Engineering",
        "Performance Testing",
      ],
    },
    {
      title: "Languages",
      items: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Java",
        "Dart",
        "PHP",
        "SQL",
      ],
    },
    {
      title: "Cloud & Databases",
      items: [
        "AWS (Lambda, S3, Glue, EC2)",
        "Serverless Framework",
        "DynamoDB",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
      ],
    },
    {
      title: "Frameworks & Tools",
      items: [
        "React",
        "Node.js",
        "Express",
        "NestJS",
        "Flutter",
        "Apache Spark",
        "Git",
        "CI/CD (Bitbucket Pipelines, Bamboo)",
        "JMeter / TestLink",
      ],
    },
  ],
  experiences: [
    {
      role: "Cloud Consultant / Developer",
      company: "Serverless Guru",
      period: "02/2023 — Present",
      projects: [
        {
          title: "Air Canada Cloud Data Hub",
          description:
            "Architected and built scalable microservices and an enterprise-grade cloud Data Hub for Air Canada, leveraging the Serverless Framework to optimize data processing and operational efficiency. Designed, implemented, and optimized distributed data integration workflows using AWS Glue, Lambda, and Amazon S3, managing high-volume data streams.",
          stack: ["AWS Lambda", "AWS Glue", "Amazon S3", "Serverless Framework", "MySQL"],
        },
      ],
    },
    {
      role: "Software Engineer",
      company: "Global Market Technologies (Pvt) Ltd. (GTN)",
      period: "04/2021 — 02/2023",
      projects: [
        {
          title: "Real-time Exchange Market-Price Engine",
          description:
            "Engineered core market-price backend components responsible for the real-time and backlog extraction of high-frequency market data from global stock exchanges. Designed data dissemination modules delivering low-latency streams securely to thousands of concurrent enterprise clients. Integrated automated testing and deployment flows using Bitbucket, Bamboo, and TestLink.",
          stack: ["Java", "Bitbucket", "Bamboo", "TestLink", "Low-latency API"],
        },
      ],
    },
    {
      role: "Intern Software Engineer",
      company: "Mubasher Technologies (Pvt) Ltd.",
      period: "06/2019 — 12/2019",
      projects: [
        {
          title: "Log Analysis & Load Testing Tools",
          description:
            "Developed a specialized component log analysis and anomaly behavior detection tool, reducing production issue troubleshooting times for backend price teams. Executed rigorous stress and load testing on core financial data modules to identify throughput bottlenecks and ensure platform stability under heavy market traffic.",
          stack: ["Java", "JMeter", "Multithreading", "Log analysis"],
        },
      ],
    },
    {
      role: "Projects & Academic Research",
      period: "Jan 2018 — Present",
      projects: [
        {
          title: "Data-Driven Taxi Driver QoS Evaluation",
          description:
            "Built an analytical framework using NLP and Apache Spark to calculate real-time quality-of-service scores and performance rankings for individual drivers in ride-hailing platforms.",
          stack: ["Apache Spark", "NLP", "Python", "Data analytics"],
        },
        {
          title: "Train Track Tracker",
          description:
            "Created a crowd-sourced train tracking Android application backed by a Python server and Firebase, utilizing user-permissioned GPS metrics to accurately display live transit routes.",
          stack: ["Android", "Java", "Python", "Firebase"],
        },
        {
          title: "Alt+it Automation System",
          description:
            "Developed a cross-platform mobile application using Flutter and Dart that automated scheduling, quality measurements, and data logging for garment evaluation sessions.",
          stack: ["Flutter", "Dart", "Firebase"],
        },
      ],
    },
  ],
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
