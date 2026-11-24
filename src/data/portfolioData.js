export const portfolioData = {
  personal: {
    name: "Bomik Ansari",
    role: "Senior Software Engineer | Mobile Full Stack (Flutter & Java)",
    tagline: "5+ years engineering high-performance cross-platform Flutter & Android apps, backed by Java Spring Boot services.",
    location: "Hyderabad, India (Open to Remote & Global)",
    status: "Available for High-Impact Roles",
    yearsOfExp: "5+ Years",
    phone: "+91 8979317348",
    bio: "Senior Software Engineer and Mobile Full Stack Developer with 5+ years of experience building and shipping cross-platform applications end-to-end using Flutter, Dart, and native Android (Java), paired with backend development in Java, Spring Boot, and .NET. Proven track record delivering mission-critical applications for enterprise clients including ICICI Bank and GAIL India (Maharatna PSU), owning the full lifecycle from pixel-perfect UI and reactive architecture to secure APIs and releases.",
    avatarText: "BA",
  },
  socials: {
    github: "https://github.com/Bomik897931",
    linkedin: "https://www.linkedin.com/in/bomik-ansari-555980192",
    email: "ansaribomik@gmail.com",
    phone: "+91 8979317348",
    resume: "./Bomik_Ansari_CV_v2.docx", // Downloadable CV
  },
  stats: [
    { label: "Years Experience", value: "5+ Yrs" },
    { label: "Production Apps Shipped", value: "10+" },
    { label: "Enterprise Clients", value: "ICICI & GAIL" },
    { label: "Post-Launch Defect Rate", value: "0 Critical" }
  ],
  skills: {
    mobile: {
      category: "Mobile Architecture & Client",
      description: "Engineering 60/120fps reactive mobile applications with Clean Architecture and strict state isolation.",
      items: [
        { name: "Flutter", level: "Expert", highlight: true },
        { name: "Dart", level: "Expert", highlight: true },
        { name: "BLoC & GetX", level: "Expert", highlight: true },
        { name: "Provider & State Management", level: "Advanced" },
        { name: "Clean Architecture / MVVM", level: "Advanced", highlight: true },
        { name: "Native Android (Java)", level: "Advanced", highlight: true },
        { name: "FlutterFlow Enterprise", level: "Advanced" },
        { name: "Firebase Suite & Push Notifications", level: "Advanced" },
        { name: "Google Maps SDK & Geolocation", level: "Advanced" },
        { name: "Sqflite & Offline Persistence", level: "Advanced" },
      ]
    },
    backend: {
      category: "Java, Spring Boot & APIs",
      description: "Developing robust backend APIs, secure microservices, and enterprise data integrations.",
      items: [
        { name: "Java", level: "Advanced", highlight: true },
        { name: "Spring Boot", level: "Advanced", highlight: true },
        { name: "REST API Design & Integration", level: "Expert", highlight: true },
        { name: "Oracle DB", level: "Advanced", highlight: true },
        { name: "MySQL & Database Optimization", level: "Advanced" },
        { name: "Node.js & JavaScript", level: "Intermediate" },
        { name: ".NET Framework", level: "Intermediate" },
        { name: "Angular Web Marketplace", level: "Intermediate" },
        { name: "Enterprise Encryption & AES", level: "Advanced", highlight: true },
      ]
    },
    toolsAndPractices: {
      category: "DevOps, Tools & Certifications",
      description: "Agile methodologies, CI/CD automation, and modern engineering practices.",
      items: [
        { name: "Git & GitHub Actions CI/CD", level: "Advanced", highlight: true },
        { name: "BASH Scripting & Linux", level: "Advanced" },
        { name: "Agile / Scrum Delivery", level: "Expert" },
        { name: "OOP & Design Patterns", level: "Expert", highlight: true },
        { name: "Postman & API Testing", level: "Advanced" },
        { name: "Claude Certified Suite", level: "Certified", highlight: true },
        { name: "FlutterFlow Enterprise Expert", level: "Certified", highlight: true },
      ]
    }
  },
  projects: [
    {
      id: "icici-dashboard",
      title: "Dashboard 360 & Trade Emerge",
      subtitle: "Enterprise Banking Telemetry & Trade Requisition Portal",
      category: "Enterprise Fintech (ICICI Bank Ltd)",
      featured: true,
      description: "Engineered corporate transaction reporting and trade requisition systems for ICICI Bank using Flutter, Oracle-backed Java services, JavaScript, and BASH scripting. Implemented strict banking-grade encryption protocols and secure handling of sensitive financial transactions.",
      tags: ["Flutter", "Dart", "Spring Boot", "Java", "Oracle DB", "BASH", "AES Encryption"],
      metrics: ["Real-time corporate telemetry", "100% compliance with banking security", "High-throughput data parsing"],
      github: "https://github.com/Bomik897931",
      demo: "#",
      type: "Full Stack"
    },
    {
      id: "gail-connect",
      title: "GAIL Connect & Suvidha Travel Suite",
      subtitle: "Employee Engagement Platform & Enterprise Bus Booking Engine",
      category: "Enterprise (GAIL India - PSU)",
      featured: true,
      description: "Built and maintained GAIL Connect (company-wide employee directory, call/SMS/search, step counter, and chat module) and the SUVIDHA bus seat booking app from architecture through release for GAIL's pan-India workforce with zero critical post-launch defects.",
      tags: ["Flutter", "BLoC Pattern", "Dart", "Java APIs", "Firebase", "Sqflite", "Push Notifications"],
      metrics: ["10,000+ enterprise users", "Zero critical defects reported", "Seamless end-to-end booking flow"],
      github: "https://github.com/Bomik897931",
      demo: "#",
      type: "Mobile Application"
    },
    {
      id: "prms-gail",
      title: "PRMS: Digital Prescription & Health Tracker",
      subtitle: "Prescription Management System for Retired Employees",
      category: "Healthcare Mobile (GAIL India)",
      featured: true,
      description: "Designed and shipped PRMS for retired enterprise employees. Features automated medication refill reminders, dosage telemetry tracking, medication history, and streamlined digital prescription approval requests.",
      tags: ["Flutter", "GetX", "REST APIs", "Firebase Cloud Messaging", "Sqflite", "MVVM"],
      metrics: ["Automated refill reminders", "Offline medication history", "Sub-second search indexing"],
      github: "https://github.com/Bomik897931",
      demo: "#",
      type: "Mobile Application"
    },
    {
      id: "meatinda-myspm",
      title: "Meatinda & MY SPM Operations Suite",
      subtitle: "On-Demand Delivery Platform & Industrial Manufacturing App",
      category: "On-Demand & Industry",
      featured: false,
      description: "Built Meatinda, a doorstep on-demand delivery app featuring real-time Google Maps store locators and live order-tracking flows. Also engineered MY SPM, an operations app for a medical device and disposable apparel manufacturing facility.",
      tags: ["Flutter", "Google Maps SDK", "Provider", "Android (Java)", "Firebase", "Sqflite"],
      metrics: ["Real-time GPS tracking", "Delivered ahead of schedule", "60 FPS fluid ordering UX"],
      github: "https://github.com/Bomik897931",
      demo: "#",
      type: "Mobile Application"
    }
  ],
  experience: [
    {
      period: "Dec 2024 — Present",
      role: "Senior Software Engineer",
      company: "Eleserv Softech Pvt Ltd",
      client: "Client: ICICI Bank Ltd",
      projects: "Dashboard 360, Trade Emerge, ICMS, Web CMS",
      description: "Architecting and developing corporate transaction dashboards and trade requisition portals using Flutter, Oracle-backed Java services, and JavaScript. Working directly with ICICI Bank on production financial systems meeting rigorous security and compliance standards."
    },
    {
      period: "Apr 2022 — Dec 2024",
      role: "Software Engineer",
      company: "Coforge Ltd.",
      client: "Client: GAIL India (Maharatna PSU)",
      projects: "GAIL Connect, Suvidha, PRMS, CGD Permit, GTONS, HSE Bytes, Prastaav",
      description: "Engineered and maintained a suite of 6+ enterprise mobile and web applications for GAIL India, including GAIL Connect (employee engagement with call/SMS/step counter/chat), PRMS (prescription management), and SUVIDHA (seat booking). Delivered all releases on schedule with zero critical post-launch defects."
    },
    {
      period: "Oct 2020 — Apr 2022",
      role: "Flutter Developer",
      company: "Codiant Biztech",
      client: "Projects: MY SPM, Meatinda, WinerBox, AstroJuno",
      description: "Delivered on-demand mobile applications and manufacturing operational tools using Flutter and native Android. Implemented live Google Maps tracking, responsive ordering flows, offline caching with Sqflite, and push notifications."
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Institute of Management Studies, Ghaziabad",
      period: "Aug 2017 — Jul 2020"
    }
  ],
  certifications: [
    "FlutterFlow Enterprise Expert Course",
    "Claude 101, Claude Code 101, Claude Cowork, Claude Platform 101"
  ]
};
