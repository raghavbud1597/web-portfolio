import neumorphismImage from "../assets/projects/neumorphism-generator.jpg";
import youtubeImage from "../assets/projects/youtube-clone.jpg";
import portfolioImage from "../assets/projects/web-portfolio.jpg";
import wordleImage from "../assets/projects/wordle.jpg";
import bankImage from "../assets/projects/hoobank.jpg";
import ticTacToeImage from "../assets/projects/tic-tac-toe.jpg";

export const profile = {
  name: "Raghav Budhiraja",
  email: "raghavbudhiraja78@gmail.com",
  emailHref: "mailto:raghavbudhiraja78@gmail.com",
  resume: `${import.meta.env.BASE_URL}raghav-budhiraja-resume.pdf`,
  github: "https://github.com/raghavbud1597",
  codepen: "https://codepen.io/raghavbudhiraja",
  linkedin: "https://www.linkedin.com/in/raghav-budhiraja/",
};

export const projects = [
  {
    id: "neumorphism-generator",
    number: "01",
    category: "DESIGN TOOL",
    title: "Neumorphism Generator",
    description:
      "Shape light and shadow, generate CSS, and explore a library of interactive components.",
    repositoryUrl: `${profile.github}/neumorphism-generator`,
    liveUrl: "https://raghavbud1597.github.io/neumorphism-generator/",
    image: neumorphismImage,
    imageAlt:
      "Neumorphism Generator with a live surface preview, styling controls, and generated CSS",
    tags: ["React", "CSS", "Vite"],
  },
  {
    id: "youtube-clone",
    number: "02",
    category: "VIDEO APPLICATION",
    title: "YouTube Clone",
    description:
      "Browse videos, search for a topic, and keep a personal library with typed API services and Redux.",
    repositoryUrl: `${profile.github}/youtube-clone`,
    image: youtubeImage,
    imageAlt:
      "YouTube Clone home feed with video thumbnails, search, and sidebar navigation",
    tags: ["React", "TypeScript", "Redux"],
  },
  {
    id: "web-portfolio",
    number: "03",
    category: "PERSONAL WEBSITE",
    title: "Personal Portfolio",
    description:
      "A home for my work, with responsive layouts, thoughtful motion, and an animated avatar.",
    repositoryUrl: `${profile.github}/web-portfolio`,
    liveUrl: "https://raghavbud1597.github.io/web-portfolio/",
    image: portfolioImage,
    imageAlt:
      "Raghav Budhiraja’s portfolio with a lime-accented headline and illustrated hoodie avatar",
    tags: ["React", "CSS", "Vite"],
  },
  {
    id: "wordle",
    number: "04",
    category: "INTERACTIVE PLAY",
    title: "Wordle",
    description:
      "Six chances, five letters. A word-guessing game with an on-screen keyboard, themes, and game statistics.",
    repositoryUrl: `${profile.github}/wordle`,
    liveUrl: "https://wordle-eight-rosy.vercel.app/",
    image: wordleImage,
    imageAlt:
      "Wordle game with a five-letter guess, six-row board, and keyboard",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "bank-modern-app",
    number: "05",
    category: "LANDING PAGE",
    title: "HooBank",
    description:
      "A modern banking landing page with a dark interface, responsive sections, and bold visual details.",
    repositoryUrl: `${profile.github}/bank_modern_app`,
    liveUrl: "https://raghavbud1597.github.io/bank_modern_app/",
    image: bankImage,
    imageAlt:
      "HooBank landing page with a next-generation payments headline and floating bank cards",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    id: "tic-tac-toe",
    number: "06",
    category: "INTERACTIVE PLAY",
    title: "Tic Tac Toe",
    description:
      "A two-player classic with custom React hooks, turn tracking, and a running score.",
    repositoryUrl: `${profile.github}/tic-tac-toe`,
    liveUrl: "https://raghavbud1597.github.io/tic-tac-toe/",
    image: ticTacToeImage,
    imageAlt:
      "Tic Tac Toe board with X and O moves, a reset button, and game scores",
    tags: ["React", "Custom Hooks", "CSS"],
  },
];

export const capabilities = [
  {
    icon: "⌘",
    title: "Built to scale.",
    description:
      "React, Next.js, and TypeScript foundations. Reusable systems that stay clear as products grow.",
  },
  {
    icon: "↗",
    title: "Fast by intention.",
    description:
      "Performance, accessibility, and reliable testing woven into the experience from the start.",
  },
  {
    icon: "✳",
    title: "Better with AI.",
    description:
      "AI-enhanced workflows for development, review, and testing. More room for the work that matters.",
  },
];

export const toolkit = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind",
  "Node.js",
];

export const experience = [
  {
    id: "mpac",
    period: "2024 — PRESENT",
    title: "Senior Software Developer",
    company: "MPAC",
    description: [
      "Designed Next.js and TypeScript application architecture with server-side rendering and server components, improving page-load time by 25%.",
      "Built complex workflows with coordinated state management and REST API integration, reducing data latency by 20%.",
      "Created reusable form architecture with React Hook Form, Zod, and AJV to standardize validation and reduce boilerplate.",
      "Architected Claude Code workflows with reusable skills and agents, helping double sprint velocity while automating unit-test generation and validation to maintain 90%+ coverage.",
      "Cut GitHub Actions test runs from 20 minutes to under 4 minutes and accelerated release cycles by 40% through CI/CD improvements.",
      "Led code reviews, defined engineering practices, and mentored developers to improve consistency and maintainability across the team.",
    ],
    skills: "Next.js · TypeScript · AI-assisted engineering · GitHub Actions",
  },
  {
    id: "vosyn",
    period: "2024",
    title: "Senior Software Developer",
    company: "Vosyn",
    description: [
      "Led application architecture for a real-time AI video translation platform, partnering with product and engineering to shape scalable feature roadmaps.",
      "Migrated React to Next.js with server-side rendering, dynamic routing, and code splitting, improving page-load time by 30%.",
      "Built streaming interfaces with React, Redux Toolkit, and Material UI, optimizing rendering and state updates for real-time data.",
      "Integrated REST APIs and Python/Django services to reduce response time by 20%, collaborating on API contracts, SQL queries, and deployment reliability.",
      "Established unit and component testing standards with Jest and React Testing Library to strengthen regression protection and application stability.",
    ],
    skills: "React · Next.js · Redux Toolkit · Jest · React Testing Library",
  },
  {
    id: "independent",
    period: "2023 — 2025",
    title: "Consultant & Freelance Software Developer",
    company: "Independent",
    description: [
      "Delivered 20+ client projects through Fiverr and Upwork, translating startup and business requirements into working web experiences.",
      "Architected responsive applications with React, TypeScript, Node.js, Redux, and Tailwind, with a focus on performance and maintainable software.",
      "Advised clients on UI/UX, page performance, and digital presence to improve usability, engagement, and online visibility.",
    ],
    skills: "React · TypeScript · Node.js · Tailwind · Client consulting",
  },
  {
    id: "apexon",
    period: "2022",
    title: "Senior Software Developer",
    company: "Apexon",
    description: [
      "Led application architecture and a team of 5 developers building a warehouse management system, establishing maintainable patterns and state-management practices.",
      "Built 30+ reusable React and TypeScript components for use across multiple products, accelerating feature development.",
      "Optimized rendering and asset loading to cut page-load time by approximately 2 seconds and achieve 90+ Lighthouse performance and accessibility scores.",
      "Built and tested Node.js REST APIs, connecting backend services to React and TypeScript applications.",
    ],
    skills:
      "React · TypeScript · Redux Toolkit · Node.js · Technical leadership",
  },
  {
    id: "deloitte",
    period: "2021 — 2022",
    title: "Software Developer",
    company: "Deloitte",
    description: [
      "Built 50+ reusable, responsive components across 4 e-commerce marketing campaigns, using BrowserStack to verify cross-browser behavior.",
      "Partnered with UX/UI designers on web experiences that contributed to a 2% increase in registrations and a 20% increase in average session duration.",
      "Implemented and tested keyboard navigation, focus management, semantic HTML, and screen-reader support against AODA/WCAG 2.0 AA requirements.",
      "Maintained a post-deployment bug rate below 1% and achieved Lighthouse SEO scores above 90 through testing and application improvements.",
    ],
    skills:
      "Reusable UI · Accessibility · BrowserStack · SEO · Design collaboration",
  },
  {
    id: "freshworks",
    period: "2018 — 2021",
    title: "Software Developer",
    company: "Freshworks",
    description: [
      "Redesigned the FreshBot training dashboard in React for 500+ clients, improving customer satisfaction by 10%.",
      "Delivered 10+ AI-integrated Freshdesk features with React and Ember.js, contributing to 20% customer-base growth.",
      "Documented and integrated 100+ backend APIs and workflows, collaborating with backend engineers across Java and Spring services.",
      "Achieved a 95% defect-detection rate with Mocha and Selenium testing and resolved 100+ customer-reported issues in one month, earning performance recognition.",
    ],
    skills: "React · Ember.js · API integration · Mocha · Selenium",
  },
];

export const education = [
  { title: "Computer Science & Engineering", institution: "SRM University" },
  {
    title: "Cloud Computing",
    institution: "George Brown",
  },
  {
    title: "Project Management",
    institution: "Georgian ILAC",
  },
];
