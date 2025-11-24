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
    id: 1,
    title: "Ink&Muse",
    image: "/inkandmuse.png",
    liveLink: "https://inkandmuse.vercel.app",
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Selllin",
    image: "/selllin.png",
    liveLink: "https://selllin.com",
    techStack: ["Next.js", "Tailwind CSS", "Stripe API", "MongoDB"],
  },
];

export { skills, projects };
