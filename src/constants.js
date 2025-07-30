// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import bharatIntern from "./assets/company_logo/bharatInternLogo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import swasthyaSetu from "./assets/work_logo/swasthyaSetuWebsite.png";
import SwasthyaSetuProImg from "./assets/work_logo/swasthyaSetuProWebsite.png";
import IntervueX from "./assets/work_logo/intervueX.png";
import TalkTownImg from "./assets/work_logo/TalkTownImg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: bharatIntern, // Replace with your imported logo variable
    role: "Fullstack MERN Developer Intern",
    company: "Bharat Intern",
    date: "September 2023",
    desc: "Completed a hands-on internship as a Fullstack Developer, building end-to-end web applications using the MERN stack. Focused on creating responsive UIs with React.js and Tailwind CSS, developing backend APIs using Node.js and Express, and managing data with MongoDB. Delivered a fully functional project demonstrating CRUD operations, authentication, and seamless frontend-backend integration.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "JavaScript",
      "REST API",
      "Git",
    ],
  },
];

export const education = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/eb/ac/63/ebac637e0055bf3e8a25ae2c2d012e74.jpg",
    degree: "Bachelor of Technology in Information Technology",
    school: "GL Bajaj Institute of Technology and Management, Greater Noida",
    date: "Ongoing",
    grade: "CGPA: 8.27",
    desc: "Currently pursuing B.Tech in Information Technology with a strong foundation in Data Structures and Algorithms, Web Development (MERN & Java Full Stack), and Database Management. Engaged in various projects and hackathons like Smart India Hackathon, gaining hands-on experience with modern technologies including React, Node.js, MongoDB, Java, and Spring Boot. Actively contributing to open-source and leading team projects, enhancing both technical and leadership skills. Also serving as the Co-Director of the Technical Team in CodeSpace Club, promoting peer learning and tech events.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXqcHQLHvublKLAmkhfw6ExRDindohslwoQ&s",
    degree: "Class XII, Non-Medical",
    school: "St. Joseph’s Sr. Sec. School, Greater Noida",
    date: "2021-22",
    grade: "Percentage: 90%",
    desc: "Studied core subjects including Physics, Chemistry, Mathematics, and Computer Science, developing a strong foundation in logical and analytical skills.",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXqcHQLHvublKLAmkhfw6ExRDindohslwoQ&s",
    degree: "Class X",
    school: "St. Joseph’s Sr. Sec. School, Greater Noida",
    date: "2019-20",
    grade: "Percentage: 80.8%",
    desc: "Completed secondary education with a focus on all-round academic excellence and foundational learning across all subjects.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Swasthya-Setu",
    description:
      "A MERN-based platform to bridge the rural-urban healthcare gap by enabling teleconsultations, e-prescriptions, and health record management for underserved communities.",
    img: swasthyaSetu,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "Maps API"],
    github: "https://github.com/mayankgaur0405/Swasthya-Setu",
    webapp: "https://Swasthya-Setu.vercel.app/",
  },
  {
    id: 1,
    title: "Swasthya-Setu Pro",
    description:
      "A full-stack AI healthcare platform featuring a real-time medical voice agent. Built with Next.js, React, TypeScript, AssemblyAI, Clerk, and NeonDB to enable voice-based symptom analysis, secure authentication, and health record management — transforming rural and urban telemedicine.",
    img: SwasthyaSetuProImg,
    tags: ["Next.js", "React", "TypeScript", "AssemblyAI", "Clerk", "NeonDB"],
    github: "https://github.com/mayankgaur0405/Swasthya-Setu-Pro",
    webapp: "https://swasthya-setu-pro.vercel.app/",
  },
   {
    id: 2,
    title: "TalkTown",
    description:
      "A real-time chat application enabling seamless communication using WebSockets. Built with React, Node.js, Express, Socket.io, and Zustand — offering features like instant messaging, typing indicators, and room-based chats. Scalable and perfect for modern web conversations.",
    img: TalkTownImg,
    tags: ["React", "Node.js", "Express", "Socket.io", "Zustand"],
    github: "https://github.com/mayankgaur0405/TalkTown",
    webapp: "https://talktown-8lif.onrender.com/",
  },
  {
    id: 3,
    title: "IntervueX",
    description:
      "MERN-based website where users can take mock interviews with AI, get evaluated responses, and receive feedback and tips. Uses OpenAI API for question generation and scoring.",
    img: IntervueX,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "OpenAI API"],
    github: "https://github.com/mayankgaur0405/IntervueX",
    webapp: "https://intervue-x.vercel.app/",
  },

    {
      id: 4,
    title: "TalkTownds",
    description:
      "A real-time chat application enabling seamless communication using WebSockets. Built with React, Node.js, Express, Socket.io, and Zustand — offering features like instant messaging, typing indicators, and room-based chats. Scalable and perfect for modern web conversations.",
    // img: TalkTownImg,
    tags: ["React", "Node.js", "Express", "Socket.io", "Zustand"],
    github: "https://github.com/mayankgaur0405/TalkTown",
    webapp: "https://talktown-8lif.onrender.com/",
  },
 
];

