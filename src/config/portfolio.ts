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
  name: "Prateek Rajbhar",
  title: "MERN Full Stack Developer",
  bio: "Full Stack Web Developer with 1.5 years of experience. Proficient in React, Node.js, Express.js, MongoDB . Expertise in building scalable, user-centric applications, designing efficient APIs, and crafting responsive UIs. Specialization in Enterprise Resource Management (ERM) systems, focusing on clean architecture and performance optimization. Strong collaborator with a foundation in TypeScript.",
  email: "prateekrajbhar3311@gmail.com",
  location: "Mumbai, India",

  // Social Links
  socials: {
    github: "https://github.com/PRATEEKRAJBHAR",
    linkedin: "https://www.linkedin.com/in/prateek-rajbhar-820010248",
  },

  // Skills with categories
  skills: {
    "Frontend": [
      "React.js", "TypeScript", "JavaScript (ES6+)",
      "Tailwind CSS", "HTML5", "CSS3",
      "Redux / Context API",
      "SSR / SSG / ISR",
      "Responsive Design"
    ],
    "Backend": [
      "Node.js", "Express.js",
      "REST API Development",
      "Authentication (JWT, OAuth)",

    ],
    "Databases": [
      "MongoDB",
      "Database Design",
      "Indexing & Query Optimization"
    ],
    "DevOps & Tools": [
      "Git & GitHub",
      "Vercel", "Render",
      "Netlify"
    ],
    "Core Concepts": [
      "Data Structures & Algorithms",
      "OOPs",
      "Design Patterns",
      "API Design Principles"
    ],
    "Other Tools": [
      "Figma",
      "VS Code",
      "Vite"
    ]
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "Service Management Portal (MERN Stack | Full Stack Web Application)",
      description: [
        "Built a comprehensive service center management system enabling customer management, service tracking, technician assignment, inventory management, automated email notifications, and PDF report generation with role-based access control."
      ],
      images: [
        "/src/assets/Projects/img1.png",
        "/src/assets/Projects/img2.png",
        "/src/assets/Projects/img3.png",
        "/src/assets/Projects/img4.png",
        "/src/assets/Projects/img5.png",
        "/src/assets/Projects/img6.png",
        "/src/assets/Projects/img7.png",
        "/src/assets/Projects/img8.png"
      ],
      keyFeatures: [
        "User authentication (Login/Signup,forget password)",
        "Service listing with detailed view",
        " Authentication & Authorization",
        " Customer Management",
        " Service Request Tracking",
        " Technician Assignment",
        " Inventory Management",
        " PDF Reports",
        " Email Notifications",
        " Dashboard & Analytics",
        " Responsive Design",
        "Multi-user support with dynamic data handling"
      ],
      technologies: [
        " React.js",
        " Redux Toolkit",
        "Redux Thunk",
        " Node.js",
        " Express.js",
        " MongoDB",
        " JWT Authentication",
        " Material UI",
        " Nodemailer",
        " Puppeteer (PDF Generation)"],
      // githubFrontEndUrl: "https://github.com/PRATEEKRAJBHAR/Service_Center_frontend",
      // githubBackEndUrl: "https://github.com/PRATEEKRAJBHAR/Service_Center_backend",
      githubUrl: "https://github.com/PRATEEKRAJBHAR/Service_Center_frontend",
      liveUrl: "https://service-center-frontend.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "MERN Stack Movie Collection Application ",
      description: [
        "This is a full-stack MERN Movie Collection application with JWT-based authentication and role-based access control. Users can browse, search, and sort movies, while administrators can add, edit, and delete movie records."
      ],
      images: [
        "/src/assets/Projects/erms/01.png",
        "/src/assets/Projects/erms/02.png",
        "/src/assets/Projects/erms/03.png",
        "/src/assets/Projects/erms/04.png",
        "/src/assets/Projects/erms/05.png",
      ],
       keyFeatures: [
  "👤 User Features",
  "View all movies with pagination",
  "Search movies by name or description",
  "Sort movies by Name",
  "Sort movies by Rating",
  "Sort movies by Release Date",

  "🛡 Admin Features",
  "Add new movie",
  "Edit movie details",
  "Delete movies",
  "Access secured admin routes",

  "🔐 Authentication & Authorization",
  "JWT-based authentication",
  "Role-based access control (Admin & User)",
  "Admin-only protected routes",
  "Default role for all users is USER",

  "👨‍💼 Admin Credentials",
  "Email: admin@gmail.com",
  "Password: admin"
],
      technologies: [
         " React.js",
"Material-UI (MUI)",
"Redux / Context API",
"React Router DOM",
"Axios",
"Backend",
"Node.js",
"Express.js",
"MongoDB (MongoDB Atlas / Local)",
"JWT Authentication",
"Authentication & Authorization",
"JWT-based authentication",
"Role-based access control (Admin & User)",
"Admin-only protected routes",
"Default role for all users is USER",
"Admin Credentials Email: admin@gmail.com Password: admin",
      ],
      githubUrl: "https://github.com/PRATEEKRAJBHAR/mern-movie-collection-frontend",
      liveUrl: "https://mern-movie-collection-frontend.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "Expense Tracker App",
      description: [
        `A simple Expense Tracker application built using Vanilla JavaScript, HTML, CSS, and LocalStorage.
This app allows users to track their daily expenses, manage records, and persist data in the browser without using any backend.`
      ],
      images: [
        "/src/assets/Projects/expence/1.png",
        "/src/assets/Projects/expence/2.png",
        "/src/assets/Projects/expence/3.png",
        "/src/assets/Projects/expence/4.png",
      ],
     keyFeatures: [
 " Add new expenses with amount and description",
"View all added expenses in a list",
"Delete individual expenses",
"Automatically calculate total expenses",
"Data stored using browser LocalStorage",
"Responsive and beginner-friendly UI"
],
      technologies:[
        "HTML5",
"CSS3",
"JavaScript (ES6)",
"Browser LocalStorage"
      ],
      githubUrl: "https://github.com/PRATEEKRAJBHAR/expence-tracker-app",
      liveUrl: "https://expence-tracker-app-seven.vercel.app",
      featured: true
    },
    {
      id: 4,
      title: "Smart Quiz Management System",
      description: [
        "Developed a Smart Quiz Management System that allows examiners to create and manage quizzes by adding multiple questions, options, correct answers, marks, and timers. ",
        "Implemented countdown-based quiz execution and auto-save functionality to prevent data loss when the quiz is not manually submitted."
      ],
      images: [
        "/src/assets/Projects/quize/a.png",
        "/src/assets/Projects/quize/b.png",
        "/src/assets/Projects/quize/c.png",
        "/src/assets/Projects/quize/d.png",
         "/src/assets/Projects/quize/e.png",
        "/src/assets/Projects/quize/f.png",
      ],
      keyFeatures: [
        "Create multiple quizzes",
"Add unlimited questions dynamically",
"Add multiple options for each question",
"Set correct answers",
"Assign marks to each question",
"Configure quiz duration and timer",
"Edit and manage quiz questions",
"Start and monitor quizzes",
      ],
      technologies:[
        "HTML5",
  "CSS3",
  "JavaScript (ES6)",
  "DOM Manipulation",
  "Event Handling",
  "Dynamic Form Management",
  "CRUD Operations",
  "Timers and Intervals",
  "Local Storage",
  "Form Validation",
  "Array and Object Manipulation",
  "State Management",
  "Responsive Web Design",
  "Problem Solving",
  "Algorithmic Thinking"
      ],
      githubUrl: "https://github.com/PRATEEKRAJBHAR/quize-app",
      liveUrl: "https://quize-app-gilt.vercel.app",
      featured: true
    },
    {
      id: 5,
      title: "E-Commerce Website",
      description: [
        "A simple and responsive e-commerce website built using only HTML and CSS. This project is designed to showcase a basic online shopping interface, including product listings, navigation bar, banners, and a clean user interface."
      ],
      images: [
        // "https://media.licdn.com/dms/image/v2/C5612AQGcGjqCF0JYUQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1633073182640?e=2147483647&v=beta&t=MskMy1eBJ1wnlkbZ0MllrZjJMjQHi3lVXwb2QguU1A0",
        // "https://cdn.britannica.com/58/75458-050-97475945/Elephants-savanna-elephants-Adult-African-stream-species.jpg"
          "/src/assets/Projects/ecommerce/x.png",
        "/src/assets/Projects/ecommerce/y.png",
        "/src/assets/Projects/ecommerce/z.png",
      ],
      keyFeatures: [
        " Responsive design",
" Home page with product display",
" Navigation bar and footer",
" Product cards and categories",
" Pure HTML and CSS implementation",
" No JavaScript or backend functionality"
      ],
      technologies:["Html","CSS"],
      githubUrl: "https://github.com/PRATEEKRAJBHAR/Simple-E-Commerce-Website",
      liveUrl: "simple-e-commerce-website-tan.vercel.app",
      featured: false
    },
     {
      id: 6,
      title: "Digital-Visiting-Card",
      description: [
        " Developed a responsive digital visiting card showcasing professional profile, contact details, portfolio, and social links"
      ],
      images: [

          "/src/assets/Projects/ecommerce/card.png",

      ],
      keyFeatures: [
       "Professional profile card",
"Responsive design",
"Contact information",
"Social media links",
"Portfolio website link",
"Modern UI with hover effects"
      ],
      technologies:["React.js",
"CSS3",
"React Icons",
"Vite"],
      githubUrl: "https://github.com/PRATEEKRAJBHAR/Digital-Visiting-Card",
      liveUrl: "https://digital-visiting-card-jade.vercel.app",
      featured: false
    },
    {
      id: 7,
      title: "Mecord — Full-Stack ERP & Operations Platform",
      description: [
        "Enterprise Resource Planning (ERP) system developed using MERN Stack and TypeScript. The platform streamlines procurement",
        " inventory, warehouse management, quotations, orders, payments, and user administration. Implemented dynamic PDF generation for Purchase Orders, Quotations, and business reports with real-time data integration."
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
      technologies: ["React.js", "TypeScript", "Redux Toolkit", "React Router", "Axios", "Node.js",  "JWT (JSON Web Tokens)", "Bootstrap", "Material-UI"],
      // githubUrl: "",
      // liveUrl: "",
      featured: false
    },
    {
      id: 8,
      title: "HRMS & Payroll Management System",
      description: [
        "A comprehensive Human Resource Management and Payroll platform developed using MERN Stack and TypeScript.",
         "The system streamlines employee onboarding, payroll processing, leave management, salary calculations, deductions,",
          "and automated salary slip generation. It supports multi-step employee registration, salary history tracking, PDF generation,",
           "and email automation for efficient workforce management."
      ],
      images: [
        "https://media.licdn.com/dms/image/v2/C5612AQGcGjqCF0JYUQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1633073182640?e=2147483647&v=beta&t=MskMy1eBJ1wnlkbZ0MllrZjJMjQHi3lVXwb2QguU1A0",
        // "https://cdn.britannica.com/58/75458-050-97475945/Elephants-savanna-elephants-Adult-African-stream-species.jpg"
      ],
      keyFeatures: [
        " Employee Onboarding & Management",
" Multi-Step Employee Registration",
" Payroll Processing & Salary Calculation",
" Leave & Attendance Management",
" Loss of Pay (LOP) Tracking",
" Salary Deduction Management",
" Automated Salary Slip Generation",
" PDF Export Functionality",
" Salary Slip History & Records",
" Email Notification & Salary Slip Delivery",
" Employee Profile Management",
" Role-Based Access Control",
" Responsive Dashboard & Reporting"
      ],
      technologies: ["React.js", "TypeScript", "Redux Toolkit", "React Router", "Axios", "Node.js",  "JWT (JSON Web Tokens)", "Bootstrap", "Material-UI","Express.js","MongoDB","Tailwind CSS","SweetAlert2","PDF Generation","Email Automation"],
      // githubUrl: "",
      // liveUrl: "",
      featured: false
    },
     {
      id: 9,
      title: "TOPL",
      description: [
        "TOPL Employee Management System is an enterprise-level workforce management application developed using the MERN Stack.",
         "The platform provides secure role-based access control (RBAC) allowing different user types such as Super Admin, Admin, User, and Client to access features based on assigned permissions.",
        " The system enables employee management, profile access, permission handling, and secure data visibility across organizational roles."

      ],
      images: [
        "https://media.licdn.com/dms/image/v2/C5612AQGcGjqCF0JYUQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1633073182640?e=2147483647&v=beta&t=MskMy1eBJ1wnlkbZ0MllrZjJMjQHi3lVXwb2QguU1A0",
        // "https://cdn.britannica.com/58/75458-050-97475945/Elephants-savanna-elephants-Adult-African-stream-species.jpg"
      ],
      keyFeatures: [
      " Role-Based Access Control (RBAC)",
" Super Admin, Admin, User & Client Roles",
" Dynamic Permission Management",
" Employee Profile Management",
" User Creation & Management",
" View, Edit & Delete Access Control",
" Secure API Authorization",
" Role-Based UI Rendering",
" Employee Listing & Tracking",
" Dashboard Access Restrictions",
" Modular Backend Architecture",
" Responsive Admin Panel"
      ],
      technologies: ["React.js", "Redux Toolkit", "React Router", "Axios", "Node.js",  "JWT (JSON Web Tokens)", "Bootstrap", "Material-UI","Express.js","MongoDB","Tailwind CSS","SweetAlert2","PDF Generation","Email Automation"],
      // githubUrl: "",
      // liveUrl: "",
      featured: false
    }
  ],

  // Work Experience
  experience: [
    {
      id: 1,
      title: "Mern Full Stack Developer",
      company: "K DigitalCurry",
      duration: "Oct 2024 - March 2026",
      description: [
        "Developed scalable frontend applications using React.js, TypeScript, Material UI, and Tailwind CSS.",
        "Built and integrated REST APIs using Node.js, Express.js, and MongoDB.",
        "Developed dynamic PDF generation modules for Purchase Orders, Salary Slips, Quotations, and business reports.",
        "Implemented payroll management features including salary calculations, deductions, leave tracking, and automated email delivery.",
        "Designed role-based authentication and authorization systems with secure permission management.",
        "Worked on enterprise modules including User Management, Inventory, Warehouse, Procurement, and Employee Management.",
        "Collaborated with cross-functional teams to deliver business-critical solutions and improve operational efficiency.",
        "Improved front-end performance and ensured responsive, cross-browser compatibility.",
        "Collaborated with product, design, and QA teams to deliver reliable and production-ready features."
      ]
    },

  ]
};