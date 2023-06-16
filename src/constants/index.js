import {
    api1,
    backend,
    dbms,
    web,
    javascript,
    rails,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    c,
    git,
    ruby,
    alx,
    mysql,
    FCC,
    bootstrap,
    postgresql,
    mydropbox,
    mybasecamp2,
    myapi,
    threejs,
    Qwasar,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Works",
      title: "Works",
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
      title: "API Developer",
      icon: api1,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Manager",
      icon: dbms,
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
      name: "Rails",
      icon: rails,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
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
      name: "C",
      icon: c,
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
      name: "ruby",
      icon: ruby,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
  ];
  
  const experiences = [
    {
      title: "Responsive Web Design",
      company_name: "FreeCodeCamp",
      icon: FCC,
      iconBg: "#B3974F",
      date: "Jan 2022 - July 2022",
      points: [
        "Covered the fundamental concepts of web design using Html and Css",
        "Attempted and completed 300 hours of coursework",
        "Completed personal projects (survey form, tribute page, technical documentation page, product landing page, personal portfolio webpage)",
      ],
    },
    {
      title: "Fullstack Web Development",
      company_name: "Qwasar Silicon Valley",
      icon: Qwasar,
      iconBg: "#EADEBA",
      date: "Aug 2022 - Oct 2022",
      points: [
        "Covered the fundamental concepts of fullstack engineering in Javascript Programming",
        "Attempted and completed 15 projects in addition to exercises",
        "Collaborated with fellow colleagues to complete some projects (My movingbox realtime)",
        "Completed personal projects (my spaceship, my first backend, my levenshtein)",
      ],
    },
    {
      title: "Software Engineering",
      company_name: "Qwasar Silicon Valley",
      icon: Qwasar,
      iconBg: "#B3974F",
      date: "Oct 2022 - April 2023",
      points: [
        "Covered the fundamental concepts of software engineering in C programming",
        "Attempted and completed 16 projects in addition to exercises",
        "Collaborated with fellow colleagues to complete some projects (My Ngram)",
        "Completed personal projects (my spaceship, my printf, my mastermind, my square)",
      ],
    },
    {
      title: "Fullstack Engineering",
      company_name: "Qwasar Silicon Valley",
      icon: Qwasar,
      iconBg: "#EADEBA",
      date: "April 2023 - June 2023",
      points: [
        "Covered the fundamental concepts of fullstack engineering programming including backend, frontend and database technologies",
        "Attempted and completed 58 projects in addition to exercises",
        "Collaborated with fellow colleagues to complete some projects (my basecamp 1, my dropbox, my sqlite)",
        "Completed personal projects (my portfolio, my basecamp 2, my api, my yelp, my tetris, my usersapp)",
      ],
    },
    {
      title: "Software Engineering Student",
      company_name: "ALX",
      icon: alx,
      iconBg: "#B3974F",
      date: "Aug 2022 - Present",
      points: [
        "Covered the fundamental concepts required in shell navigation",
        "Covered the fundamental concepts of software engineering in C programming language",
        "Covered the fundamental concepts of software engineering in Python programming language",
        "Collaborated with fellow colleagues to complete some projects (printf, simple shell, airbnb)",
      ],
    },
  ];
  
  const projects = [
    {
      name: "My Dropbox",
      description:
        "Serverless Web application that allows users to upload different kinds of files and also view the content of the files uploaded",
      tags: [
        {
          name: "ruby",
          color: "blue-text-gradient",
        },
        {
          name: "rails",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "orange-text-gradient",
        },
      ],
      image: mydropbox,
      source_code_link: "https://github.com/sophap/My_dropbox",
      deployment_link: "https://mydropboxproject.fly.dev",
    },
    {
      name: "My Basecamp2",
      description:
        "Web application that enables users to create, update, delete, and show projects with discussions within and comments withing the discussions",
      tags: [
        {
          name: "ruby",
          color: "blue-text-gradient",
        },
        {
          name: "rails",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "orange-text-gradient",
        },
      ],
      image: mybasecamp2,
      source_code_link: "https://github.com/sophap/My-Basecamp-2",
      deployment_link: "https://my-basecamp2.fly.dev",
    },
    {
      name: "My api",
      description:
        "An api application that creates, edits, deletes, and shows volcanoes and the information gathered by each of them",
      tags: [
        {
          name: "sql",
          color: "blue-text-gradient",
        },
        {
          name: "ruby",
          color: "green-text-gradient",
        },
        {
          name: "rails",
          color: "orange-text-gradient",
        },
      ],
      image: myapi,
      source_code_link: "https://github.com/sophap/My-API",
      deployment_link: "https://my-api-volcano.fly.dev",
    },
  ];
  
  export { services, technologies, experiences, projects };