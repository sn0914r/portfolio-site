# Sivananda Reddy Yerragudi — Portfolio

Backend-focused full stack developer building reliable APIs, authentication systems, and data layers using Node.js, Express, PostgreSQL, and MongoDB.

🔗 Live Site: https://sivananda.is-a.dev/

---

## About

Backend is where I spend most of my time — authentication, data layers, business logic, and the decisions that quietly hold everything together. Currently in my final year of CS, building and shipping things along the way.

---

## Technical Skills

### Backend

- Node.js
- Express.js
- REST API Development

### Databases

- MongoDB, Mongoose
- PostgreSQL, Drizzle ORM

### Caching & Infrastructure

- Redis (Caching & Rate Limiting)
- Docker

### Authentication & Payments

- JWT (Access + Refresh Token Flow)
- Razorpay Integration

### Programming Languages

- JavaScript (ES6+)
- TypeScript
- Python

### Frontend

- React.js
- Zustand, TanStack Query
- HTML, CSS, Bootstrap, Emotion

### Tools & Platforms

- Git, GitHub
- Postman
- OpenAPI/Scalar
- Cloudinary
- Cloudflare Pages, Render, Northflank

---

## Projects

### eKart — Full Stack E-commerce Platform

Full-stack e-commerce platform built as three independent applications (customer store, admin dashboard, REST API backend) working through a centralized backend.

**Key Features**

- JWT authentication with access and refresh token flow — HTTP-only cookies with automatic token rotation
- Role-based access control enforced on all admin routes
- Server-side pricing — final price recalculated from DB on order creation
- Razorpay payment gateway with server-side signature verification
- Idempotency checks on payment routes to prevent duplicate charges
- Snapshot-based order items — price and product details frozen at time of purchase
- Transaction-safe stock reduction with automatic reversal on cancellation
- Shipping status management (Pending → Packed → Shipped → Delivered)
- Redis-backed product caching and rate limiting
- Email notifications via Nodemailer on order confirmation and status updates
- Revenue analytics, low stock alerts, and admin dashboard
- Containerized with Docker, documented via OpenAPI/Scalar

**Tech Stack**
Node.js, Express.js, MongoDB, Mongoose, Redis, Docker, React, Zustand, TanStack Query, JWT, Razorpay, Cloudinary, Nodemailer, Helmet, Joi, OpenAPI/Scalar

**Links**

- System: https://ekart-system.pages.dev
- Store: [https://ekart-frontend.pages.dev](https://ekart-frontend.pages.dev/auth/login?email=user123@gmail.com&password=user123)
- Admin: [https://ekart-admin-dashboard.pages.dev](https://ekart-admin-dashboard.pages.dev/auth/login?email=admin123@gmail.com&password=admin123)
- API Docs: https://ekart-backend-s0x7.onrender.com/docs
- Frontend Repo: https://github.com/sn0914r/ekart-frontend
- Backend Repo: https://github.com/sn0914r/ekart-backend
- Admin Repo: https://github.com/sn0914r/ekart-admin-panel

---

### Mock API AI — Dynamic Mock REST API Platform

Platform for generating, hosting, and testing dynamic mock REST APIs with persistent CRUD operations and an interactive playground.

**Key Features**

- Generate REST APIs from natural language prompts using Groq (Llama 3.3 70B)
- AI generates schema, routes, and mock seed data in a single request
- UUID-isolated APIs — each API operates in its own namespace via `/api/:apiId/:route`
- Full CRUD on any generated API without writing any code
- Runtime Zod schema validation on POST, PUT, and PATCH — schema fetched from DB and validated dynamically per request
- API metadata and records persisted in PostgreSQL using JSONB columns
- Interactive playground with real-time request editing and syntax-highlighted responses
- Centralized error handling with structured responses

**Tech Stack**
Node.js, Express.js, TypeScript, PostgreSQL, Drizzle ORM, Groq API, React, TanStack Query, Zod, Helmet

**Links**

- System: https://mock-api-ai-system.pages.dev
- Live: https://mock-api-ai.pages.dev
- API Docs: https://site--mock-api-ai-backend--gxd2ltpdfxvn.code.run/docs
- Frontend Repo: https://github.com/sn0914r/mock-api-ai-frontend
- Backend Repo: https://github.com/sn0914r/mock-api-ai-backend

---

## Contact

- Email: reddysivananda83@gmail.com
- LinkedIn: https://linkedin.com/in/sivananda-reddy-yerragudi-630076337
- GitHub: https://github.com/sn0914r
