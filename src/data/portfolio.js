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
    id: "dashboard",
    number: "01",
    category: "FRONTEND APPLICATION",
    title: "React Admin Dashboard",
    description: "Data, structure, and a more considered workspace.",
    url: `${profile.github}/react-admin-dashboard`,
    tags: ["React", "Material UI"],
    wide: true,
  },
  {
    id: "wordle",
    number: "02",
    category: "INTERACTIVE PLAY",
    title: "Wordle",
    description: "A playful word-guessing experience.",
    url: `${profile.github}/wordle`,
    tags: [],
  },
  {
    id: "grid",
    number: "03",
    category: "DEVELOPER TOOL",
    title: "CSS Grid Generator",
    description: "Exploring the building blocks of layout.",
    url: `${profile.github}/css-grid-generator`,
    tags: [],
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
