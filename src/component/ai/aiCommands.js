const scrollToSection = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};

export const commands = [
  {
    keywords: [
      "home",
      "hero",
      "start",
      "landing",
    ],
    action: () => scrollToSection("hero"),
  },

  {
    keywords: [
      "about",
      "journey",
      "my journey",
      "introduction",
    ],
    action: () => scrollToSection("journey"),
  },

  {
    keywords: [
      "career",
      "experience",
      "work",
      "job",
      "company",
    ],
    action: () => scrollToSection("career"),
  },

  {
    keywords: [
      "skills",
      "tech",
      "technology",
      "frontend",
      "backend",
      "database",
    ],
    action: () => scrollToSection("skills"),
  },

  {
    keywords: [
      "project",
      "projects",
      "portfolio",
      "work",
    ],
    action: () => scrollToSection("projects"),
  },

  {
    keywords: [
      "contact",
      "email",
      "phone",
      "hire",
      "linkedin",
      "connect",
    ],
    action: () => scrollToSection("contact"),
  },

  {
    keywords: [
      "resume",
      "cv",
      "download resume",
      "download cv",
    ],
    action: () => {
      window.open("/resume.pdf", "_blank");
    },
  },

  {
    keywords: [
      "github",
      "source code",
      "repository",
      "repo",
    ],
    action: () => {
      window.open(
        "https://github.com/vikasgupta0423",
        "_blank"
      );
    },
  },

  {
    keywords: [
      "linkedin",
      "profile",
    ],
    action: () => {
      window.open(
        "https://linkedin.com/in/vikas-gupta",
        "_blank"
      );
    },
  },
];