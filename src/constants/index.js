import { link } from "framer-motion/client";
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like Angular and React, as well as back-end technologies like Django, Node.js, .NET, PostgreSQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "jan 2025 - jul 2025",
    role: "Full Stack Developer (Internship)",
    company: "RedRiver Consulting AB",
    description: `Contributed to the development of web applications using TypeScript, Angular, and C#. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: [".NET8", "Angular", "TypeScript", "C#"],
    reference: "/RR Consulting-resume.pdf",
  },
];

export const EDUCATION = [
  { year: "jan 2025 - sep 2025",
    degree: "Full Stack Engineer",
    institution: "Codecademy", 
    description: "An intensive program covering both front-end and back-end development, including HTML, CSS, JavaScript, React, Node.js, Express, and databases like PostgreSQL and MongoDB.",
    certificate: "https://www.codecademy.com/profiles/method9414298083/certificates/ffd0f42cce1a44e9a0108b365047a0a6"
  },

  { year: "jan 2025 - jul 2025",
    degree: "Microsoft Full Stack Developer",
    institution: "Coursera", 
    description: "A comprehensive course focusing on full stack development using Microsoft technologies, including C#, .NET, ASP.NET Core, and Azure.",
    certificate: "https://www.coursera.org/account/accomplishments/specialization/DVU1VV5JUDH9"
  },
    
  { year: "nov 2024 - dec 2024",
    degree: "Front-End Developer",
    institution: "FreeCodeCamp", 
    description: "A detailed curriculum covering front-end development fundamentals, including HTML, CSS, JavaScript, and popular frameworks like React.",
    certificate: "https://www.freecodecamp.org/certification/fcca0ed6cb7-f319-44af-b2ee-a2407dac03ad/front-end-development-libraries"
  },
  
  { year: "sep 2023 - sep 2024",
    degree: "Full Stack Software Developer",
    institution: "Code Institute",
    description: "A comprehensive program covering full stack development, including HTML, CSS, JavaScript, Python, Django and databases.",
    certificate: "https://www.credential.net/9bd8fd02-d55e-4edb-bc2c-2cb8b1592a40#acc.5KIwxEuO"
  },

];

export const PROJECTS = [
  {
    title: "F1 1992 Season PERN Web App",
    image: project5,
    description:
      "A fullstack PERN web application dedicated to the 1992 Formula 1 World Championship season. Explore all drivers, teams, and races from one of the most iconic years in F1 history.",
    technologies: ["React", "Express", "Node.js", "PostgreSQL"],
    link: "https://github.com/Askeran17/f1-1992-project",
  },
  {
    title: "Fullstack CRUD App",
    image: project1,
    description:
      "A fullstack CRUD application that allows users to create, read, update, and delete records. Built with Angular for the frontend and C# for the backend.",
    technologies: ["Angular", "C#", "TypeScript", "PostgreSQL"],
    link: "https://github.com/Askeran17/book-app-angular18-net8",
  },
  {
    title: "LawForYou - Legal Consultation Platform",
    image: project2,
    description:
      "E-commerce platform connecting clients with legal professionals for consultations and advice.",
    technologies: ["Python", "Django", "PostgreSQL"],
    link: "https://github.com/Askeran17/lawforyou",
  },
  {
    title: "90´s Football Quiz",
    image: project3,
    description:
      "The quiz is dedicated to football fans of the 90s.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Askeran17/90s-football-quiz",
  },
  {
    title: "The Brotherhood of Saint elder Joseph",
    image: project4,
    description:
      "The Brotherhood of Saint Joseph is site which is dedicated to the saint of our days and his disciples. On this site a person will also find the answer to the question of how to deal with bad thoughts.",
    technologies: ["HTML", "CSS"],
    link: "https://github.com/Askeran17/st-josephs-brotherhood",
  },
];

export const CONTACT = {
  email: "m.ataev@mail.ru",
};
