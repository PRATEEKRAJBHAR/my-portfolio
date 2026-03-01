/**
 * Portfolio configuration with personal information, skills, projects, and experience data.
 */

export const portfolioConfig = {
  // EmailJS Configuration
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
  },
  // Personal Information
  name: "Prasad Mhaske",
  title: "Full Stack Developer",
  bio: "Full Stack Web Developer with 2+ years of experience. Proficient in React, Node.js, Express.js, MongoDB, and PostgreSQL. Expertise in building scalable, user-centric applications, designing efficient APIs, and crafting responsive UIs. Specialization in Enterprise Resource Management (ERM) systems, focusing on clean architecture and performance optimization. Strong collaborator with a foundation in TypeScript, Next.js, and system design.",
  email: "prasadmhaske2001@gmail.com",
  location: "Mumbai, India",

  // Social Links
  socials: {
    github: "https://github.com/ProActive44",
    linkedin: "https://www.linkedin.com/in/prasad-mhaske-88a177247",
  },

  // Skills with categories
  skills: {
    "Frontend": [
      "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)",
      "Tailwind CSS", "HTML5", "CSS3",
      "Redux / Context API",
      "SSR / SSG / ISR",
      "Responsive Design"
    ],
    "Backend": [
      "Node.js", "Express.js",
      "REST API Development",
      "Authentication (JWT, OAuth)",
      "WebSockets (Socket.IO)",
      "Prisma ORM"
    ],
    "Databases": [
      "MongoDB", "PostgreSQL",
      "Database Design",
      "Indexing & Query Optimization"
    ],
    "DevOps & Tools": [
      "Git & GitHub",
      "Docker",
      "AWS (S3, EC2)",
      "CI/CD (GitHub Actions)",
      "Vercel", "Render"
    ],
    "Core Concepts": [
      "Data Structures & Algorithms",
      "OOPs",
      "System Design Basics",
      "Design Patterns",
      "API Design Principles"
    ],
    "Other Tools": [
      "Figma",
      "VS Code",
      "Webpack",
      "Vite"
    ]
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "Specialized Cycle Store (MERN Stack E-commerce App)",
      description: [
        "A fully responsive, multi-user e-commerce web application designed for cycling enthusiasts to browse, explore, and purchase modern bicycles and accessories. The platform delivers a seamless shopping experience with essential features like authentication, product browsing, wishlist management, cart functionality, and secure checkout.",
        "Built using the MERN stack, the application ensures efficient data handling, scalable backend architecture, and smooth user interactions across devices."
      ],
      images: [
        "/src/assets/Projects/01.png",
        "/src/assets/Projects/02.png",
        "/src/assets/Projects/03.png",
        "/src/assets/Projects/04.png",
        "/src/assets/Projects/05.png"
      ],
      keyFeatures: [
        "User authentication (Login/Signup)",
        "Product listing with detailed view",
        "Wishlist and cart management",
        "Secure checkout & payment flow",
        "Responsive UI for all devices",
        "Multi-user support with dynamic data handling"
      ],
      technologies: ["React.js", "Redux", "Chakra UI", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/ProActive44/specialized-bike-app",
      liveUrl: "https://specializedstore.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Employee Record Management System (ERMS)",
      description: [
        "A full-stack web application designed to manage employee records efficiently within an organization. The system allows administrators to perform CRUD operations on employee data, track records, and maintain structured information with role-based access control.",
        "The application focuses on building a scalable backend architecture with clean API design and efficient data handling, while providing an intuitive interface for managing organizational data.",
      ],
      images: [
        "/src/assets/Projects/erms/01.png",
        "/src/assets/Projects/erms/02.png",
        "/src/assets/Projects/erms/03.png",
        "/src/assets/Projects/erms/04.png",
        "/src/assets/Projects/erms/05.png",
      ],
      keyFeatures: [
        "Role-based access control (Admin/HR/Employee)",
        "Employee Management (CRUD)",
        "Attendance Tracking",
        "Leave Management",
        "Project & Task Management",
        "Dashboard & Reports",
        "Secure authentication system(OAuth2/JWT)",
      ],
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/ProActive44/ERMS",
      liveUrl: "https://erms-nu.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "Multi-Tenant SaaS Application (Tenant-Based Architecture)",
      description: [
        "A scalable multi-tenant SaaS application designed to support multiple organizations (tenants) within a single platform, ensuring secure data isolation and efficient resource sharing. Each tenant operates in an independent environment with its own users, roles, and data.",
        "The system implements tenant-aware authentication, role-based access control, and modular architecture to handle multiple clients seamlessly while maintaining performance and security."
      ],
      images: [
        "/src/assets/Projects/mtenant/01.png",
        "/src/assets/Projects/mtenant/02.png",
        "/src/assets/Projects/mtenant/03.png",
        "/src/assets/Projects/mtenant/04.png",
      ],
      keyFeatures: [
        "Multi-tenant architecture (single app, multiple organizations)",
        "Tenant-based data isolation",
        "User authentication & authorization (JWT-based)",
        "Role-based access control (Admin/User per tenant)",
        "Tenant-specific dashboards and data views",
        "Scalable backend structure for handling multiple clients"
      ],
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "PostgreSQL", "Prisma"],
      githubUrl: "https://github.com/ProActive44/Multi-Tenant-SaaS-APP",
      liveUrl: "https://multi-tenant-saa-s-app.vercel.app",
      featured: true
    },
    {
      id: 4,
      title: "TATA 1mg Clone (Healthcare E-commerce Platform)",
      description: [
        "A responsive healthcare e-commerce web application inspired by Tata 1mg, enabling users to browse medicines, healthcare products, and manage purchases efficiently. The platform replicates core functionalities of a real-world pharmacy system, including product search, filtering, cart management, and user authentication.",
        "The application focuses on delivering a seamless user experience with structured product categorization and optimized UI flows, while maintaining scalable frontend architecture and efficient API integration.",
      ],
      images: [
        "/src/assets/Projects/1mg/01.png",
        "/src/assets/Projects/1mg/02.png",
        "/src/assets/Projects/1mg/03.png",
        "/src/assets/Projects/1mg/04.png",
      ],
      keyFeatures: [
        "User authentication (Login/Signup)",
        "Product browsing with categories",
        "Search and filter functionality",
        "Cart management system",
        "Dynamic product pages",
        "Responsive design for mobile & desktop"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "REST APIs", "MongoDB"],
      githubUrl: "https://github.com/ProActive44/TATA-1mg-clone",
      liveUrl: "https://tata-1mg-store.netlify.app",
      featured: true
    },
    {
      id: 5,
      title: "Internal ERP & Inventory Management Platform (PrimeABGB)",
      description: [
        "Contributed to a production-grade enterprise dashboard used for managing inventory, warehouse operations, and business analytics for PrimeABGB. The system is built using React and TypeScript with a scalable architecture leveraging Redux Toolkit for state management and a centralized API layer for efficient data handling.",
        "Designed and worked on modular features such as inventory tracking, warehouse filtering, and real-time dashboard metrics, ensuring seamless interaction between UI, state, and backend services."
      ],
      images: [
        "https://media.licdn.com/dms/image/v2/C5612AQGcGjqCF0JYUQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1633073182640?e=2147483647&v=beta&t=MskMy1eBJ1wnlkbZ0MllrZjJMjQHi3lVXwb2QguU1A0",
        // "https://cdn.britannica.com/58/75458-050-97475945/Elephants-savanna-elephants-Adult-African-stream-species.jpg"
      ],
      keyFeatures: [
        "Implemented Redux Toolkit slices and async thunks for managing inventory, warehouse, and dashboard data",
        "Built and integrated API layer using Axios with interceptors for JWT-based authentication",
        "Developed dynamic data tables with inline editing (EditableCell, filters, pagination)",
        "Implemented advanced filtering (date range, global search, multi-filters) for inventory and warehouse modules",
        "Contributed to dashboard analytics with charts and KPI counters",
        "Worked on modular architecture with reusable components and helper layers",
        "Integrated PDF export functionality for reports"
      ],
      technologies: ["React.js", "TypeScript", "Redux Toolkit", "React Router", "Axios", "REST APIs", "JWT (JSON Web Tokens)", "Bootstrap", "Material-UI"],
      // githubUrl: "",
      // liveUrl: "",
      featured: false
    },
    {
      id: 6,
      title: "Mecord — Full-Stack ERP & Operations Platform",
      description: [
        "A full-stack business operations platform designed to manage inventory, warehouse fulfillment, procurement workflows, and sales lifecycle (enquiry → quotation → sales order) in a unified system.",
        "Built using React + TypeScript (frontend) and Node.js + Prisma (backend), the application follows a scalable layered architecture with modular domain-based design."
      ],
      images: [
        "https://media.licdn.com/dms/image/v2/C5612AQGcGjqCF0JYUQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1633073182640?e=2147483647&v=beta&t=MskMy1eBJ1wnlkbZ0MllrZjJMjQHi3lVXwb2QguU1A0",
        // "https://cdn.britannica.com/58/75458-050-97475945/Elephants-savanna-elephants-Adult-African-stream-species.jpg"
      ],
      keyFeatures: [
        "Inventory & warehouse management with packing and dispatch workflows",
        "End-to-end sales lifecycle (Enquiry → Quotation → Sales Order)",
        "Procurement system (Purchase Request → Purchase Order with approvals)",
        "Follow-up tracking and document/attachment management",
        "Dashboard with KPI metrics and analytics"
      ],
      technologies: ["React.js", "TypeScript", "Redux Toolkit", "React Router", "Axios", "Node.js", "Prisma ORM", "PostgreSQL", "JWT (JSON Web Tokens)", "Bootstrap", "Material-UI"],
      // githubUrl: "",
      // liveUrl: "",
      featured: false
    }
  ],

  // Work Experience
  experience: [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Metaphi Innovations",
      duration: "Sep 2025 - Present",
      description: [
        "Developed and maintained ERM system modules using React, Node.js, Express.js, MongoDB, PostgreSQL, and Prisma.",
        "Built scalable REST APIs and optimized backend workflows for efficient data handling across ERM components.",
        "Implemented secure authentication and authorization using JWT and OAuth.",
        "Improved front-end performance and ensured responsive, cross-browser compatibility.",
        "Collaborated with product, design, and QA teams to deliver reliable and production-ready features."
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Kalvium",
      duration: "Oct 2023 - May 2025",
      description: [
        "Built and improved full-stack features for internal platforms using React, Node.js, Express.js, MongoDB.",
        "Redesigned the Student Profile module, enhancing UI/UX and performance.",
        "Developed REST APIs and optimized database interactions for reliable data flow.",
        "Collaborated with product and engineering teams to deliver stable, production-ready features.",
        "Contributed to code quality through reviews and best-practice implementation."
      ]
    }
  ]
};