import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

export const skills = [
  {
    id: 1,
    name: "Java",
    icon: FaJava,
    color: "#F89820",
    level: "Advanced",
    experience: "2+ Years",
    percentage: 95,
    technologies: [
      "Spring Boot",
      "Hibernate",
      "JPA",
      "JDBC",
      "REST API",
      "Multithreading",
    ],
    projects: [
      "Referral System",
      "Wallet System",
      "Quick Commerce",
      "Portfolio",
    ],
  },

  {
    id: 2,
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
    level: "Advanced",
    experience: "2+ Years",
    percentage: 92,
    technologies: [
      "Spring MVC",
      "Spring Security",
      "JPA",
      "Hibernate",
      "REST API",
      "JWT",
    ],
    projects: [
      "Authentication",
      "Referral System",
      "Quick Commerce",
    ],
  },

  {
    id: 3,
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    level: "Advanced",
    experience: "2+ Years",
    percentage: 90,
    technologies: [
      "React Router",
      "Redux",
      "Tailwind CSS",
      "Framer Motion",
      "Axios",
    ],
    projects: [
      "Portfolio",
      "Admin Panel",
      "Quick Commerce UI",
    ],
  },

  {
    id: 4,
    name: "MySQL",
    icon: SiMysql,
    color: "#00758F",
    level: "Advanced",
    experience: "2 Years",
    percentage: 88,
    technologies: [
      "Joins",
      "Indexes",
      "Stored Procedures",
      "Optimization",
    ],
    projects: [
      "E-Commerce",
      "Wallet",
      "Referral",
    ],
  },

  {
    id: 5,
    name: "MongoDB",
    icon: SiMongodb,
    color: "#4DB33D",
    level: "Intermediate",
    experience: "1+ Year",
    percentage: 80,
    technologies: [
      "Aggregation",
      "Atlas",
      "Indexes",
      "Collections",
    ],
    projects: [
      "Analytics",
      "Logs",
    ],
  },

  {
    id: 6,
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED",
    level: "Intermediate",
    experience: "Learning",
    percentage: 65,
    technologies: [
      "Dockerfile",
      "Compose",
      "Volumes",
      "Containers",
    ],
    projects: [
      "Portfolio Deployment",
      "Spring Boot",
    ],
  },

  {
    id: 7,
    name: "Git",
    icon: FaGitAlt,
    color: "#F1502F",
    level: "Advanced",
    experience: "2+ Years",
    percentage: 90,
    technologies: [
      "GitHub",
      "Branching",
      "Merge",
      "Pull Request",
    ],
    projects: [
      "All Projects",
    ],
  },
];