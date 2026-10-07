const baseUrl = import.meta.env.BASE_URL || './';
const resolveAsset = (path) => {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const portfolioData = {
  personal: {
    name: "Pravin Rajendra Bedare",
    shortName: "Pravin Bedare",
    title: "Java Full Stack Developer",
    statusBadge: "Available for Full-Time Roles • 2026 Batch",
    batch: "2026 Batch",
    degree: "Bachelor of Computer Science (2026)",
    college: "Dr. Ganpatrao Deshmukh Mahavidyalaya, Sangola",
    location: "Pune, Maharashtra, India",
    email: "pravinbedare20@gmail.com",
    phone: "+91 9356823717",
    phoneRaw: "+919356823717",
    github: "https://github.com/pravinbedare",
    linkedin: "https://www.linkedin.com/in/pravin",
    resumePdf: resolveAsset('assets/Pravin_Bedare_Resume.pdf'),
    profileImg: resolveAsset('assets/images/profile.jpg'),
    bioShort:
      "Motivated Java Full Stack fresher with strong foundational knowledge of front-end and back-end development. Passionate about building robust web applications, exploring clean architectures, and contributing to real-world software engineering projects.",
    objectiveQuote:
      "Motivated Java Full Stack fresher with knowledge of front-end and back-end development and an interest in learning and contributing to real-world projects.",
    typewriterPhrases: [
      "Java Full Stack Developer",
      "Spring Boot & Spring MVC",
      "RESTful APIs & Backend Logic",
      "MySQL Database Specialist",
      "Clean Code & OOP Advocate"
    ]
  },

  pillars: [
    {
      id: "backend",
      title: "Backend Architecture",
      icon: "Server",
      accent: "primary",
      desc: "Robust server-side application logic built with Java, Spring Boot, Spring MVC, Servlets, and JDBC.",
      tags: ["Java", "Spring Boot", "REST API"]
    },
    {
      id: "database",
      title: "Database Systems",
      icon: "Database",
      accent: "info",
      desc: "Relational schema design, SQL querying, CRUD operations, indexing, and PL/SQL stored logic with MySQL.",
      tags: ["MySQL", "SQL", "PL/SQL"]
    },
    {
      id: "frontend",
      title: "Responsive UI",
      icon: "Layers",
      accent: "warning",
      desc: "Modern, accessible, user-centric interfaces crafted with HTML5, CSS3, JavaScript, Flexbox, Grid, and Bootstrap 5.",
      tags: ["HTML5 / CSS3", "JavaScript", "Bootstrap 5"]
    },
    {
      id: "concepts",
      title: "Core Concepts",
      icon: "Cpu",
      accent: "success",
      desc: "Strong grounding in Object-Oriented Programming (OOP), MVC architectural separation, and full CRUD lifecycles.",
      tags: ["OOP", "MVC", "CRUD"]
    }
  ],

  skillCategories: [
    { id: "all", label: "All Skills", icon: "Grid" },
    { id: "backend", label: "Backend", icon: "Coffee" },
    { id: "frontend", label: "Frontend", icon: "Layout" },
    { id: "database", label: "Database", icon: "Database" },
    { id: "tools", label: "Tools & Platforms", icon: "Wrench" },
    { id: "concepts", label: "Concepts", icon: "Brain" }
  ],

  skills: [
    // Backend
    {
      name: "Java",
      category: "backend",
      icon: "Coffee",
      accent: "warning",
      desc: "Core Java, OOP, Collections, Multithreading & Exception Handling",
      level: "Proficient"
    },
    {
      name: "Spring Boot",
      category: "backend",
      icon: "Zap",
      accent: "success",
      desc: "Enterprise microservices, Auto-configuration & Spring Starters",
      level: "Intermediate"
    },
    {
      name: "Spring MVC",
      category: "backend",
      icon: "Network",
      accent: "success",
      desc: "Model-View-Controller architecture & DispatcherServlet",
      level: "Intermediate"
    },
    {
      name: "RESTful APIs",
      category: "backend",
      icon: "Cloud",
      accent: "primary",
      desc: "HTTP Methods, JSON responses, Status codes & Endpoint routing",
      level: "Proficient"
    },
    {
      name: "JDBC",
      category: "backend",
      icon: "Plug",
      accent: "info",
      desc: "Java Database Connectivity, Statements & ResultSets",
      level: "Proficient"
    },
    {
      name: "Servlet",
      category: "backend",
      icon: "Server",
      accent: "danger",
      desc: "Server-side request/response processing & Session handling",
      level: "Proficient"
    },

    // Frontend
    {
      name: "HTML5",
      category: "frontend",
      icon: "FileCode",
      accent: "danger",
      desc: "Semantic document structure, Forms, Audio/Video & SEO tags",
      level: "Proficient"
    },
    {
      name: "CSS3",
      category: "frontend",
      icon: "Palette",
      accent: "primary",
      desc: "Modern layout styling, Animations, Transitions & Custom properties",
      level: "Proficient"
    },
    {
      name: "JavaScript",
      category: "frontend",
      icon: "Code",
      accent: "warning",
      desc: "DOM manipulation, ES6+ features, Events & Async Fetch API",
      level: "Proficient"
    },
    {
      name: "Bootstrap",
      category: "frontend",
      icon: "Box",
      accent: "purple",
      desc: "Responsive grid system, Utilities & UI components",
      level: "Proficient"
    },
    {
      name: "Responsive Design",
      category: "frontend",
      icon: "Smartphone",
      accent: "info",
      desc: "Mobile-first fluid layouts adapting seamlessly to all screen sizes",
      level: "Proficient"
    },
    {
      name: "Flexbox",
      category: "frontend",
      icon: "Columns",
      accent: "teal",
      desc: "1D layout alignment, distribution & container responsiveness",
      level: "Proficient"
    },
    {
      name: "CSS Grid",
      category: "frontend",
      icon: "LayoutGrid",
      accent: "info",
      desc: "2D two-dimensional grid layouts, template areas & tracks",
      level: "Proficient"
    },
    {
      name: "Media Queries",
      category: "frontend",
      icon: "Sliders",
      accent: "warning",
      desc: "Conditional CSS rules targeting mobile, tablet & desktop viewports",
      level: "Proficient"
    },

    // Database
    {
      name: "MySQL",
      category: "database",
      icon: "Database",
      accent: "primary",
      desc: "Relational database design, Foreign keys & normalization",
      level: "Proficient"
    },
    {
      name: "SQL",
      category: "database",
      icon: "Table",
      accent: "info",
      desc: "DDL, DML, Complex Joins, Subqueries & Aggregations",
      level: "Proficient"
    },
    {
      name: "PL/SQL",
      category: "database",
      icon: "GitBranch",
      accent: "success",
      desc: "Stored procedures, Functions, Cursors, Triggers & Exception blocks",
      level: "Intermediate"
    },

    // Tools & Platforms
    {
      name: "Git",
      category: "tools",
      icon: "GitBranch",
      accent: "danger",
      desc: "Distributed version control, branching, merging & conflict resolution",
      level: "Proficient"
    },
    {
      name: "GitHub",
      category: "tools",
      icon: "Github",
      accent: "secondary",
      desc: "Code repository hosting, Pull requests & Project management",
      level: "Proficient"
    },
    {
      name: "Eclipse",
      category: "tools",
      icon: "Moon",
      accent: "purple",
      desc: "Java Enterprise IDE, Maven build integration & Debugger",
      level: "Proficient"
    },
    {
      name: "Visual Studio Code",
      category: "tools",
      icon: "Terminal",
      accent: "primary",
      desc: "Integrated code editing, debugging & extension ecosystem",
      level: "Proficient"
    },
    {
      name: "Postman",
      category: "tools",
      icon: "Send",
      accent: "warning",
      desc: "REST API endpoint testing, header inspection & JSON payload verification",
      level: "Proficient"
    },
    {
      name: "MySQL Workbench",
      category: "tools",
      icon: "Layers",
      accent: "info",
      desc: "Visual database modeling, SQL querying & schema administration",
      level: "Proficient"
    },
    {
      name: "CMD / CLI",
      category: "tools",
      icon: "Terminal",
      accent: "secondary",
      desc: "Command line execution, environment variables & build tools",
      level: "Proficient"
    },

    // Concepts
    {
      name: "Object-Oriented Programming",
      category: "concepts",
      icon: "Boxes",
      accent: "success",
      desc: "Inheritance, Polymorphism, Encapsulation, Abstraction & Interfaces",
      level: "Proficient"
    },
    {
      name: "MVC Architecture",
      category: "concepts",
      icon: "Boxes",
      accent: "primary",
      desc: "Model-View-Controller separation of presentation, business & data layers",
      level: "Proficient"
    },
    {
      name: "CRUD Operations",
      category: "concepts",
      icon: "RefreshCw",
      accent: "info",
      desc: "Full lifecycle Create, Read, Update & Delete data manipulation",
      level: "Proficient"
    }
  ],

  featuredProject: {
    id: "naukri-clone",
    title: "Naukari.com – Job Portal Clone",
    category: "Full Stack Web Application",
    badge: "Featured Project",
    tagline: "Java • Spring MVC • Spring Boot • MySQL",
    previewImg: resolveAsset('assets/images/naukri_clone_preview.jpg'),
    description:
      "A full-stack job portal web application enabling job posting, job search, user registration, authentication, and profile management.",
    detailedDescription:
      "Designed and implemented adhering strictly to MVC architecture with Spring Boot backend, MySQL relational database, and responsive frontend. Provides a seamless platform connecting job seekers with recruiters.",
    features: [
      {
        title: "Job Posting",
        desc: "Employers can create, edit, and manage comprehensive job openings with salary ranges, required skill tags, and location details."
      },
      {
        title: "Job Search & Filters",
        desc: "Candidates can quickly query positions with live search filtering across designation, industry, experience, and location."
      },
      {
        title: "User Registration",
        desc: "Role-based account registration for both job seekers and corporate recruiters with secure credential validations."
      },
      {
        title: "Authentication & Security",
        desc: "Robust session authentication, password hashing, and role-protected endpoint access."
      },
      {
        title: "Profile Management",
        desc: "Comprehensive profile update portal for updating resumes, educational qualifications, skills, and viewing applied job history."
      },
      {
        title: "Responsive UI",
        desc: "Custom styled responsive interface built for clean readability on smartphones, tablets, and desktop displays."
      },
      {
        title: "Backend Integration",
        desc: "Modular Spring Boot REST endpoints communicating with MySQL using structured service and DAO layers."
      }
    ],
    techStack: [
      "Java",
      "Spring MVC",
      "Spring Boot",
      "MySQL",
      "JSP",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    architecture: {
      view: {
        title: "View Layer",
        tech: "JSP / HTML5 / CSS3 / JavaScript / Bootstrap",
        desc: "Responsive user interface delivering dynamic job search & application pages."
      },
      controller: {
        title: "Controller & Service Layer",
        tech: "Spring MVC • Spring Boot",
        desc: "DispatcherServlet, business rules, authentication filters, and REST controllers."
      },
      model: {
        title: "Model & Data Layer",
        tech: "MySQL • JDBC • Relational Entities",
        desc: "Normalized database tables for users, roles, jobs, and applications."
      }
    },
    githubUrl: "https://github.com/pravinbedare"
  },

  education: [
    {
      id: "bcs",
      degree: "Bachelor of Computer Science",
      institution: "Dr. Ganpatrao Deshmukh Mahavidyalaya, Sangola",
      year: "2026",
      status: "Current Degree (Graduating 2026)",
      score: null,
      desc: "Comprehensive coursework covering Data Structures, Object-Oriented Programming with Java, Database Management Systems (DBMS/SQL), Operating Systems, Software Engineering, and Full Stack Web Architectures.",
      icon: "GraduationCap",
      current: true
    },
    {
      id: "hsc",
      degree: "Higher Secondary Certificate (H.S.C. Science)",
      institution: "Yelpale-Patil Jr. College, Yedrav",
      year: "2023",
      status: "Distinction Score",
      score: "75.83%",
      desc: "Rigorous foundation in Science stream, analytical mathematics, physics, logic building, and computational problem solving. Secured distinction score of 75.83%.",
      icon: "Award",
      current: false
    },
    {
      id: "ssc",
      degree: "Secondary School Certificate (S.S.C.)",
      institution: "Shri Siddeshwar Vidyamandir Jr. College, Machnur",
      year: "2021",
      status: "High Distinction Score",
      score: "80.20%",
      desc: "Core foundational schooling covering Mathematics, General Sciences, and Computer Fundamentals. Achieved high distinction score of 80.20%.",
      icon: "BookOpen",
      current: false
    }
  ],

  strengths: [
    {
      id: "hardworking",
      title: "Hardworking & Dedicated",
      desc: "Committed to delivering reliable, high-quality code, maintaining focus through challenging development phases, and achieving rigorous milestones.",
      icon: "HeartHandshake",
      color: "primary"
    },
    {
      id: "quick-learner",
      title: "Quick Learner",
      desc: "Rapidly comprehends modern technologies, programming paradigms, frameworks, and tools to accelerate development workflows.",
      icon: "Zap",
      color: "info"
    },
    {
      id: "teamwork",
      title: "Teamwork & Collaboration",
      desc: "Effective communicator, enthusiastic team contributor with positive synergy in group projects, peer code reviews, and pair programming.",
      icon: "Users",
      color: "success"
    },
    {
      id: "positive-attitude",
      title: "Positive Attitude",
      desc: "Approaches complex debugging scenarios with optimism, constructive problem-solving, resilience, and an eagerness to grow continuously.",
      icon: "Smile",
      color: "warning"
    }
  ]
};
