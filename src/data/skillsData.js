/**
 * Skills Data
 *
 * `icon` maps directly to standard icon component names from `react-icons`:
 * - Simple Icons (`react-icons/si`): e.g., SiReact, SiDocker, SiRoboflow, etc.
 * - FontAwesome / Tabler / Lucide (`react-icons/tb`, `react-icons/fa6`): for conceptual engineering skills
 */

export const skillCategories = [
  {
    title: "FRONTEND",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Redux", icon: "SiRedux" },
      { name: "HTML5 / CSS3", icon: "SiHtml5" },
    ],
  },
  {
    title: "BACKEND & APIS",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "Python", icon: "SiPython" },
      { name: "REST APIs", icon: "TbApi" },
      { name: "GraphQL", icon: "SiGraphql" },
    ],
  },
  {
    title: "DATABASES",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "Prisma ORM", icon: "SiPrisma" },
      { name: "Redis", icon: "SiRedis" },
    ],
  },
  {
    title: "AI & VISION",
    skills: [
      { name: "Roboflow", icon: "SiRoboflow" },
      { name: "OpenCV", icon: "SiOpencv" },
      { name: "PyTorch", icon: "SiPytorch" },
      { name: "TensorFlow", icon: "SiTensorflow" },
    ],
  },
  {
    title: "TOOLS & DEVOPS",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Linux / Bash", icon: "SiLinux" },
      { name: "Vercel", icon: "SiVercel" },
    ],
  },
  {
    title: "TESTING & ARCHITECTURE",
    skills: [
      { name: "Jest", icon: "SiJest" },
      { name: "Postman", icon: "SiPostman" },
      { name: "System Design", icon: "TbHierarchy2" },
      { name: "Clean Code", icon: "TbCodeCircle2" },
    ],
  },
];
