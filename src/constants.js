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
    title: "Languages",
    skills: [
      { name: "C++" },
      { name: "Java" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
      { name: "Cypress" },
    ],
  },
  {
    title: "Libraries",
    skills: [
      { name: "React.js" },
      { name: "Clerk.js" },
      { name: "Email.js" },
      { name: "Shadcn/ui" },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "VS Code" },
    ],
  },
  {
    title: "Databases & Deployment",
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Vercel" },
      { name: "Render" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Effective Communication" },
      { name: "Team Collaboration" },
      { name: "Flexibility" },
      { name: "Adaptability" },
      { name: "Leadership Qualities" },
    ],
  },
];


export const experiences = [
  {
    id: 0,
    //img: gssoc, // import GSSoC logo or use placeholder
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code 2025 (GSSoC’25)",
    date: "2025 – Present",
    desc: "Actively contributing to the open-source project TravelGrid under GSSoC’25. Successfully merged more than 5 pull requests, enhancing features, fixing bugs, and improving overall code quality. Earned the GitHub Pull Shark badge for consistent open-source contributions.",
    skills: [
      "Open Source Contribution",
      "Git & GitHub",
      "Pull Requests",
      "Code Reviews",
      "React",
      "JavaScript",
      "Collaboration",
    ],
    links: {
      project: "https://travel-grid.vercel.app/",
      prs: [
        "https://github.com/Adarsh-Chaubey03/TravelGrid/pull/194",
        "https://github.com/Adarsh-Chaubey03/TravelGrid/pull/490",
        "https://github.com/Adarsh-Chaubey03/TravelGrid/pull/497",
        "https://github.com/Adarsh-Chaubey03/TravelGrid/pull/510",
        "https://github.com/Adarsh-Chaubey03/TravelGrid/pull/512",
      ],
    },
  },
  {
    id: 1,
    //img: codespace, // import CodeSpace Club logo or use placeholder
    role: "Co-Director, Technical Team",
    company: "CodeSpace Club, GLBITM",
    date: "2024 – Present",
    desc: "Spearheaded development of core website modules for the CodeSpace Club, contributing over 75% of the codebase across frontend UI and backend logic. Led implementation of key pages while coordinating with the technical team to ensure scalable and maintainable architecture.",
    skills: [
      "React.js",
      "JavaScript",
      "Frontend Development",
      "Backend Logic",
      "Git & GitHub",
      "Team Leadership",
      "Web Architecture",
    ],
    links: {
      contactUs:
        "https://github.com/mayankgaur0405/contactUspage_codeSpace.git",
      aboutUs:
        "https://github.com/mayankgaur0405/About_Us_Page_CodeSpace.git",
    },
  },
  {
    id: 2,
    img: bharatIntern, // import Bharat Intern logo
    role: "Full Stack MERN Developer Intern",
    company: "Bharat Intern",
    date: "September 2023",
    desc: "Completed a hands-on internship as a Full Stack Developer, building end-to-end web applications using the MERN stack. Developed responsive user interfaces, RESTful backend APIs, authentication flows, and database-driven features with seamless frontend–backend integration.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "JavaScript",
      "REST APIs",
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
    title: "Dev2Gether",
    subtitle: "Real-Time Collaborative IDE with AI",
    description:
      "A real-time collaborative IDE supporting JavaScript, Python, C++, and Java. Enables multi-user live editing, execution, and AI-assisted coding with error detection and code suggestions.",
    tags: [
      "MERN",
      "Socket.io",
      "Monaco Editor",
      "AI Assistant",
      "Real-Time Collaboration",
    ],
    github: "https://github.com/mayankgaur0405/Dev2Gether.git",
    webapp: "https://dev2gether-vaky.onrender.com",
  },
  {
    id: 1,
    title: "MG Virtual Line",
    subtitle: "QR-Based Digital Token Queue System",
    description:
      "A digital queue management platform replacing physical lines using QR-based tokens and real-time updates. Includes admin controls, notifications, and multi-vendor support.",
    tags: [
      "MERN",
      "Socket.io",
      "QR Code",
      "Real-Time Updates",
      "Authentication",
    ],
    github: "https://github.com/mayankgaur0405/MG-Virtual-Line.git",
    webapp: "https://mg-virtual-line.vercel.app/",
  },
  {
    id: 2,
    title: "GL PeerBajaj",
    subtitle: "Peer-to-Peer Resource & Referral Platform",
    description:
      "A platform connecting GL Bajaj students for mentorship, referrals, and collaboration. Features user profiles, learning roadmaps, interview experiences, and a community feed.",
    tags: [
      "MERN",
      "Tailwind CSS",
      "Mentorship",
      "Community Platform",
      "Student Network",
    ],
    github: "https://github.com/mayankgaur0405/GL-PeerBajaj.git",
    webapp: "https://gl-peer-bajaj.vercel.app/",
  },
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
];

