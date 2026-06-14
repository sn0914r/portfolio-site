const DATA = {
  skills: {
    languages: {
      javascript: {
        title: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/js.png",
      },
      typescript: {
        title: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/ts.png",
      },
      python: {
        title: "Python",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/python.png",
      },
    },

    frontend: {
      html: {
        title: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/html.png",
      },
      css: {
        title: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/css.png",
      },
      react: {
        title: "React JS",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/react.png",
      },
      zustand: {
        title: "Zustand",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/zustand.png",
      },
      "react query": {
        title: "TanStack Query",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/react-query.png",
      },
    },

    backend: {
      node: {
        title: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/node.png",
      },
      express: {
        title: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/express.png",
      },
      "REST APIs": {
        title: "REST APIs",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/restapi-new.png",
      },
    },

    databases: {
      mongodb: {
        title: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/mongodb.png",
      },
      postgreSQL: {
        title: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/postgresql.png",
      },
      redis: {
        title: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/redis.png",
      },
    },

    // TOOLS & CLOUD
    "tools-and-cloud": {
      git: {
        title: "Git",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/git.png",
      },
      github: {
        title: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/github.png",
      },
      docker: {
        title: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/docker.png",
      },
      openapi: {
        title: "OpenAPI/Scalar",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/openapi.png",
      },
      postman: {
        title: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/postman.png",
      },
      cloudinary: {
        title: "Cloudinary",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/cloudinary.png",
      },
      firebase: {
        title: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/firebase.png",
      },
      // cloudflare: {
      //   title: "cloudflare",
      //   icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/cloudflare.png",
      // },
    },
  },

  projects: [
    {
      title: "eKart - Full Stack E-commerce Platform",
      category: "FULL STACK",
      description:
        "A full-stack e-commerce platform with secure authentication, role-based access control, backend-only pricing, and Razorpay payment integration with server-side verification.",
      image: "assets/images/eKart.png",
      links: [
        {
          label: "Customer Store",
          url: "https://ekart-frontend.pages.dev/auth/login?email=user123@gmail.com&password=user123",
        },
        {
          label: "Admin Panel",
          url: "https://ekart-admin-dashboard.pages.dev/auth/login?email=admin123@gmail.com&password=admin123",
        },
        {
          label: "API Docs",
          url: "https://ekart-backend-s0x7.onrender.com/docs",
        },
      ],
      githubLinks: [
        {
          label: "Frontend",
          url: "https://github.com/sn0914r/ekart-frontend",
        },
        {
          label: "Admin Panel",
          url: "https://github.com/sn0914r/ekart-admin-panel",
        },
        {
          label: "Backend",
          url: "https://github.com/sn0914r/ekart-backend",
        },
      ],
      features: [
        "JWT Authentication & Refresh Token Rotation",
        "RBAC & Backend-only Pricing",
        "Razorpay Payment Verification",
        "Snapshot-based Order Items & Idempotency Handling",
      ],
      techStack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/react.png",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/node.png",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/express.png",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/mongodb.png",
        },
        {
          name: "Razorpay",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/razorpay.png",
        },
        {
          name: "JWT",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/jwt.png",
        },
        {
          name: "Cloudinary",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/cloudinary.png",
        },
        {
          name: "Zustand",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/zustand.png",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/docker.png",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/redis.png",
        },
        {
          name: "OpenAPI/Scalar",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/openapi.png",
        },
      ],
      tags: ["React", "Node Js", "Razorpay", "Firebase", "Express"],
    },
    {
      title: "Mock API AI – Dynamic Mock REST API Platform",
      category: "FULLSTACK + AI Integration",
      description:
        "An AI-powered platform that generates mock REST APIs, schemas, and CRUD operations from natural language prompts, backed by PostgreSQL.",
      image: "assets/images/mock-api-ai.png",
      links: [
        {
          label: "Open App",
          url: "https://mock-api-ai.pages.dev",
        },
        {
          label: "API Docs",
          url: "https://site--mock-api-ai-backend--gxd2ltpdfxvn.code.run/docs",
        },
      ],
      githubLinks: [
        {
          label: "Frontend",
          url: "https://github.com/sn0914r/mock-api-ai-frontend",
        },
        {
          label: "Backend",
          url: "https://github.com/sn0914r/mock-api-ai-backend",
        },
      ],
      features: [
        "AI Generated Mock APIs using Groq AI",
        "Dynamic Schema & CRUD Route Generation",
        "Interactive Playground with Real-time Request Editing",
        "Runtime Validation with Zod",
      ],
      techStack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/react.png",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/node.png",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/express.png",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/postgresql.png",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/ts.png",
        },
        {
          name: "Groq AI",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/groq.webp",
        },
        {
          name: "Zod",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/zod.png",
        },
        {
          name: "OpenAPI/Scalar",
          icon: "https://cdn.jsdelivr.net/gh/coach500/images-portfolio-site@main/images/openapi.png",
        },
      ],
      tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    },
    // {
    //   title: "Crazy Self Drive Cars Website (Freelance)",
    //   description:
    //     "Built a multi-page SEO-optimized freelance rental website with real domain hosting, showcasing cars and bikes with pricing, clear service details, and direct WhatsApp contact for quick customer bookings",
    //   image: "assets/images/crazy-self-drive-cars.png",
    //   link: "https://www.crazyselfdrivecars.in/",
    //   tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    // },
  ],
};

export default DATA;
