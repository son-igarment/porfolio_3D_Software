import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  iGarment,
  HCMUT,
  VUS,
  ESTEC,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "HCMUT",
    icon: HCMUT,
    iconBg: "#383E56",
    date: "June 2022 - May 2024",
    points: [
      "Assisted in designing and developing web applications, collaborating with engineers to implement new features and enhance existing systems.",
      "Contributed to building and optimizing backend services for better performance and scalability.",
      "Improved user interfaces using front-end best practices for a seamless experience.",
      "Worked in an Agile environment and gained hands-on experience in DevOps, streamlining deployment and integrating continuous development practices.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "VUS",
    icon: VUS,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - May 2022",
    points: [
      "Support instructors in delivering high-quality English language lessons to students of various ages and levels.",
      "Facilitate classroom activities, ensure smooth lesson flow, and provide personalized assistance to students during learning sessions.",
      "Successfully helped students improve their communication skills and confidence in English.",
      " Monitor and evaluate student progress, providing feedback to both instructors and learners to optimize outcomes.",
    ],
  },
  {
    title: "Software Engineer Internship",
    company_name: "ESTEC",
    icon: ESTEC,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Collaborated with the development team to design and implement web-based solutions, focusing on both front-end and back-end features.",
      "Contributed to optimizing application performance, ensuring the system could handle high traffic and scale efficiently.",
      "Assisted in managing and optimizing databases, improving data access speeds and storage efficiency.",
      "Engaged in troubleshooting and debugging processes, ensuring the delivery of high-quality software.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "iGarment",
    icon: iGarment,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sơn proved me wrong.",
    name: "Nghĩa",
    designation: "CFO",
    company: "ESTEC",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sơn does.",
    name: "Lợi",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sơn optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Sang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie_Land_React",
    description:
      "Web-based platform that allows users to Design using the React programming language to build a movie streaming website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
