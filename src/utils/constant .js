const skills = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
    level: 90,
    category: "Frontend",
  },
  { name: "React", icon: "logos:react", level: 85, category: "Frontend" },
  {
    name: "Next.js",
    icon: "skill-icons:nextjs-light",
    level: 80,
    category: "Frontend",
  },
  { name: "Node.js", icon: "logos:nodejs", level: 80, category: "Backend" },
  {
    name: "Express",
    icon: "simple-icons:express",
    level: 75,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
    level: 70,
    category: "Database",
  },
  {
    name: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
    level: 85,
    category: "Frontend",
  },
  { name: "Git", icon: "logos:git-icon", level: 90, category: "All" },
];

const projects = [
  {
    title: "Ink&Muse",
    image: "/project/inkandmuse.png",
    liveLink: "https://inkandmuse.vercel.app",
    techStackIcons: [
      "logos:react",
      "logos:tailwindcss-icon",
      "logos:nodejs",
      "logos:mongodb-icon",
    ],
  },
  {
    title: "Selllin",
    image: "/project/selllin.png",
    liveLink: "https://selllin.com",
    techStackIcons: [
      "skill-icons:nextjs-dark",
      "logos:tailwindcss-icon",
      "logos:nodejs",
      "logos:mongodb-icon",
    ],
  },
];

export { skills, projects };
