export const portfolioData = {
  personal: {
    name: "Alex Morgan", // Replace with your name
    role: "Full-Stack Mobile & Microservices Engineer",
    tagline: "Bridging seamless Flutter mobile experiences with resilient Java microservices architecture.",
    location: "Available for Remote & Global Opportunities",
    status: "Open to new challenges",
    yearsOfExp: "2+ Years",
    bio: "Passionate software engineer specializing in mobile-first applications and high-throughput backend systems. With 2+ years of experience engineering Java Spring Boot microservices and architecting cross-platform Flutter applications, I design end-to-end digital experiences from pixel-perfect client UI to distributed cloud infrastructures.",
    avatarText: "AM",
  },
  socials: {
    github: "https://github.com/Bomik897931",
    linkedin: "https://linkedin.com",
    email: "developer@example.com",
    resume: "#", // Add link or drop resume.pdf into public folder
  },
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Production Apps", value: "8+" },
    { label: "Microservices Deployed", value: "15+" },
    { label: "Code Quality / Test Coverage", value: "95%" }
  ],
  skills: {
    mobile: {
      category: "Mobile Architecture & Client",
      description: "Crafting fluid 60/120fps cross-platform mobile apps with clean, decoupled architecture.",
      items: [
        { name: "Flutter", level: "Expert", highlight: true },
        { name: "Dart", level: "Expert", highlight: true },
        { name: "Bloc / Riverpod", level: "Advanced", highlight: true },
        { name: "Clean Architecture", level: "Advanced", highlight: true },
        { name: "Android / Kotlin", level: "Intermediate" },
        { name: "iOS / Swift Interop", level: "Intermediate" },
        { name: "Firebase Suite", level: "Advanced" },
        { name: "Offline Sync & SQLite/Hive", level: "Advanced" },
      ]
    },
    backend: {
      category: "Java Microservices & APIs",
      description: "Designing fault-tolerant, scalable REST & asynchronous distributed microservices.",
      items: [
        { name: "Java (17 / 21)", level: "Advanced", highlight: true },
        { name: "Spring Boot 3", level: "Advanced", highlight: true },
        { name: "Microservices Architecture", level: "Advanced", highlight: true },
        { name: "Spring Cloud / Eureka / Gateway", level: "Intermediate", highlight: true },
        { name: "RESTful & GraphQL APIs", level: "Advanced" },
        { name: "Spring Security & OAuth2/JWT", level: "Advanced" },
        { name: "JPA / Hibernate", level: "Advanced" },
        { name: "WebSockets & Event-Driven", level: "Intermediate" }
      ]
    },
    cloudAndDevOps: {
      category: "Databases, Cloud & DevOps",
      description: "Deploying containerized services and building resilient automated pipelines.",
      items: [
        { name: "PostgreSQL & MySQL", level: "Advanced" },
        { name: "Redis Caching", level: "Intermediate" },
        { name: "Docker & Containerization", level: "Intermediate", highlight: true },
        { name: "GitHub Actions CI/CD", level: "Intermediate", highlight: true },
        { name: "Postman & API Testing", level: "Advanced" },
        { name: "AWS (S3, EC2, RDS)", level: "Familiar" },
        { name: "Kafka / RabbitMQ", level: "Familiar" },
        { name: "Linux / Bash", level: "Intermediate" }
      ]
    }
  },
  projects: [
    {
      id: "pulsemart",
      title: "PulseMart: Distributed Commerce Ecosystem",
      subtitle: "End-to-End Flutter Mobile Storefront & Java Microservices Backend",
      category: "Full Stack (Flutter + Java)",
      featured: true,
      description: "A production-grade e-commerce ecosystem featuring a blazing-fast Flutter app connected to a decomposed Java Spring Boot microservices backend (Auth, Catalog, Cart, Order, Notification services) with JWT security and Redis caching.",
      tags: ["Flutter", "Dart", "Java 21", "Spring Boot", "Docker", "PostgreSQL", "Redis"],
      metrics: ["Sub-80ms API response", "60 FPS smooth animations", "Decoupled 5-service cluster"],
      github: "https://github.com",
      demo: "#",
      type: "Mobile + Backend"
    },
    {
      id: "fintrack",
      title: "FinTrack Pro: Enterprise Expense & Wealth Monitor",
      subtitle: "Cross-Platform Financial Tracker with Real-Time Telemetry",
      category: "Mobile Application",
      featured: true,
      description: "A high-performance personal finance and asset tracking application built using Flutter & BLoC state management. Syncs securely with enterprise banking webhook APIs through an encrypted Java Spring Boot gateway.",
      tags: ["Flutter", "BLoC Pattern", "Java APIs", "Clean Architecture", "Biometric Auth", "Hive DB"],
      metrics: ["100% offline-first capability", "Zero state leaks", "Bank-grade AES encryption"],
      github: "https://github.com",
      demo: "#",
      type: "Mobile Application"
    },
    {
      id: "telecare-live",
      title: "TeleCare Health & Real-Time Consultation",
      subtitle: "Interactive Telemedicine Suite with Live WebSockets & Video",
      category: "Full Stack (Flutter + Java)",
      featured: true,
      description: "Telehealth app connecting doctors and patients for digital appointments. Features real-time appointment scheduling, encrypted chat over Spring Boot WebSockets, and secure medical document storage on AWS S3.",
      tags: ["Flutter", "Spring Boot", "WebSockets", "AWS S3", "PostgreSQL", "Firebase Messaging"],
      metrics: ["Real-time message latency < 50ms", "HIPAA-conscious data flow", "Push notification suite"],
      github: "https://github.com",
      demo: "#",
      type: "Full Stack"
    },
    {
      id: "gateway-auth",
      title: "Sentinel: Microservices Cloud Gateway & Auth Engine",
      subtitle: "High-Throughput Centralized Authentication and Route Protection",
      category: "Backend & Cloud",
      featured: false,
      description: "Lightweight API Gateway built with Spring Cloud Gateway and Spring Security. Handles rate-limiting with Redis Token Bucket algorithm, central JWT validation, and dynamic routing to downstream Flutter client endpoints.",
      tags: ["Java", "Spring Cloud", "Spring Security", "Redis", "Docker", "REST API"],
      metrics: ["10k+ concurrent req/s capability", "Distributed rate limiting", "Zero-trust verification"],
      github: "https://github.com",
      demo: "#",
      type: "Backend Microservices"
    }
  ],
  experience: [
    {
      period: "2024 — Present",
      role: "Microservices & Mobile Software Engineer",
      company: "Enterprise Cloud Solutions",
      description: "Architecting backend microservices in Java Spring Boot while driving Flutter cross-platform mobile app initiatives. Optimizing API response times, setting up automated CI/CD pipelines, and establishing Clean Architecture standards across teams."
    },
    {
      period: "2022 — 2024",
      role: "Flutter Mobile Developer",
      company: "Digital Product Studio",
      description: "Developed and shipped high-performance Android and iOS applications with Flutter. Implemented complex reactive state management, integrated RESTful APIs, and maintained offline persistence systems."
    }
  ]
};
