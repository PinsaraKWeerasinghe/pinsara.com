export const profile = {
  name: "Pinsara K. Weerasinghe",
  shortName: "Pinsara Weerasinghe",
  title: "Software Engineer",
  subtitle:
    "Computer Science & Engineering undergraduate · Full-stack, mobile & data-focused development",
  summary:
    "I am a motivated software engineer with hands-on experience across web and mobile development, backend systems, and data-driven research. I enjoy building reliable products, collaborating in teams, and deepening my skills in software engineering and analytics.",
  about:
    "I am an undergraduate in Computer Science and Engineering at the University of Moratuwa (Semester 7), with industry experience from internships at Global Market Technologies and Fcode Labs, ongoing research for my final-year project in ride-hailing analytics, and freelance delivery of mobile and web systems. I care about clear engineering, measurable quality, and software that stays maintainable as it grows.",
  contact: {
    dob: "24 Mar 1995",
    phone: "+94 71 959 6692",
    phoneHref: "tel:+94719596692",
    email: "pinsarakweerasinghe@gmail.com",
    website: "pinsara.com",
    websiteHref: "https://pinsara.com",
    github: "PinsaraKWeerasinghe",
    githubHref: "https://github.com/PinsaraKWeerasinghe",
    linkedin: "pinsaraw",
    linkedinHref: "https://www.linkedin.com/in/pinsaraw",
    resumePdfHref: "/Resume/Resume_General_160670H.pdf",
  },
  education: [
    {
      institution: "University of Moratuwa",
      detail: "BSc (Hons) Computer Science and Engineering",
      note: "Undergraduate — Semester 7",
    },
    {
      institution: "Mo/Malwaththawala National School",
      period: "Jan 2001 — Aug 2014",
      detail:
        "Combined Mathematics (A), Physics (A), Chemistry (A). District rank 2 · Z-score 2.3135",
    },
  ],
  skillCategories: [
    {
      title: "Technical fields",
      items: [
        "Mobile development",
        "OOP",
        "Web development",
        "Data mining",
        "Machine learning",
      ],
    },
    {
      title: "Languages & databases",
      items: [
        "Java",
        "Python",
        "Dart",
        "Android",
        "HTML",
        "PHP",
        "Firebase",
        "MySQL",
      ],
    },
    {
      title: "Tools, APIs & frameworks",
      items: [
        "Git",
        "Maven",
        "JMeter",
        "Solr",
        "Flutter",
        "Spring Boot",
        "Flask",
        "Spark",
      ],
    },
  ],
  extraCurricular: [
    {
      title: "“Decrypt” 2018 (CSE Open Day)",
      org: "University of Moratuwa",
      detail: "Member of the organizing committee for the CSE Open Day.",
    },
    {
      title: "Literature association",
      org: "University of Moratuwa",
      detail:
        "Member of the organizing committee for “Dedunu Ganthota” by the Literature association.",
    },
    {
      title: "School prefect — 2011",
      org: "Mo/Malwaththawala National School",
      detail: "Member of the school prefect board.",
    },
  ],
  referees: [
    {
      name: "Dr. Amal Shehan Perera",
      role: "Senior Lecturer, Department of Computer Science and Engineering",
      org: "University of Moratuwa, Sri Lanka",
      email: "shehan@cse.mrt.ac.lk",
      href: "mailto:shehan@cse.mrt.ac.lk",
    },
    {
      name: "Mr. Gayanath Senanayake",
      role: "Head of Market Data Services",
      org: "Global Market Technologies (Pvt) Ltd, Colombo 08, Sri Lanka",
      email: "s.gayanath@theglobalmarketaccess.com",
      href: "mailto:s.gayanath@theglobalmarketaccess.com",
    },
  ],
  experiences: [
    {
      role: "Final year project",
      period: "Apr 2020 — Present",
      title:
        "Data-driven individual taxi driver QoS analysis & evaluation in ride-hailing services",
      description:
        "Exploratory research for data-driven evaluation of individual taxi drivers in ride-hailing services. Evaluating quality of service individually and ranking drivers using scores derived from quality measurements.",
      stack: ["Spark", "Data analytics", "NLP"],
    },
    {
      role: "Internship",
      company: "Global Market Technologies (Pvt) Ltd",
      period: "Jun 2019 — Dec 2019",
      projects: [
        {
          title: "Search services system (Apache Solr)",
          description:
            "Built a fast search system using Apache Solr to reduce database retrieval cost, with REST APIs for upload and retrieval. Optimized performance using load tests.",
          stack: ["Solr", "Spring Boot", "Java", "Maven", "JMeter"],
        },
        {
          title: "Alert generation system",
          description:
            "Implemented backend alert generation for an existing product: reminder emails for user-subscribed events according to their criteria.",
          stack: ["Java", "Maven"],
        },
        {
          title: "Log reading tool",
          description:
            "Built a tool to extract readable reports from filtered, encoded log files for analysis and issue detection.",
          stack: ["Java", "Maven"],
        },
        {
          title: "Feed comparison tool",
          description:
            "Extended an existing feed comparison tool to additional message types used in the system.",
          stack: ["Java", "Maven"],
        },
        {
          title: "Data validation plugin",
          description:
            "Implemented a plugin to detect abnormal behaviour in data streams by consuming from the main source and validating using existing techniques.",
          stack: ["Java", "Maven"],
        },
      ],
    },
    {
      role: "Internship",
      company: "Fcode Labs (Pvt) Ltd",
      period: "Mar 2020 — Jul 2020",
      projects: [
        {
          title: "Alt+it — process automation for MAS Holdings",
          description:
            "Mobile app automating quality-evaluation sessions: scheduling, measurements, comments, recording, photo upload, and related workflows.",
          stack: ["Flutter", "Dart", "Firebase"],
        },
      ],
    },
    {
      role: "Semester projects",
      period: "Jun 2017 — Present",
      projects: [
        {
          title: "Train Track",
          description:
            "Android app with a Python backend and Firebase; shows train locations using GPS contributions from users.",
          stack: ["Android", "Java", "Python", "Firebase"],
        },
        {
          title: "E-commerce platform",
          description:
            "Single-vendor e-commerce platform with core storefront features; strong focus on database design across front-end and back-end.",
          stack: ["MySQL", "Node.js", "HTML"],
        },
        {
          title: "SEA system",
          description:
            "Online system for student and examination administration: exam registration, assignments, and related workflows with full stack implementation.",
          stack: ["HTML", "PHP", "MySQL"],
        },
      ],
    },
    {
      role: "Freelance",
      period: "Jan 2019 — Present",
      projects: [
        {
          title: "Electricity breakdown reporting system",
          description:
            "Android app and web portal to report breakdowns with location, comments, and photos; authorities can triage and assign work to maintenance staff.",
          stack: ["Android", "PHP", "MySQL"],
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
  { href: "#extra", label: "Activities" },
  { href: "#referees", label: "Referees" },
  { href: "#contact", label: "Contact" },
] as const;
