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
  resume:
    "https://drive.google.com/file/d/17RHXjbgz1oZOiLEo8To4Jk8l_dqQUl_T/view",
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
      "Raghav Budhiraja’s portfolio with a lime-accented headline and professional avatar",
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
    description: ["My current chapter in software engineering."],
    skills: "Frontend architecture · Product delivery · Engineering quality",
  },
  {
    id: "vosyn",
    period: "2024",
    title: "Software Developer",
    company: "Vosyn",
    description: ["Software development experience at Vosyn."],
  },
  {
    id: "independent",
    period: "2023 — PRESENT",
    title: "Consultant & Freelance Developer",
    company: "Independent",
    description: ["Independent web development and consulting."],
  },
  {
    id: "foundation",
    period: "2018 — 2022",
    title: "Building the foundation",
    company: "Apexon · Deloitte · Freshworks",
    description: [
      "Senior Frontend Developer · Apexon · 2022",
      "Frontend Developer · Deloitte · 2021–2022",
      "Full Stack Developer · Freshworks · 2018–2021",
    ],
  },
];

export const education = [
  { title: "Computer Science & Engineering", institution: "SRM University" },
  {
    title: "Cloud Computing · Project Management",
    institution: "George Brown · Georgian ILAC",
  },
];
