import { IconType } from "react-icons";

import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiJavascript,
  SiGoland,
} from "react-icons/si";

export const icons: IconType[] = [
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiGoland,
];

export const posts = [
  {
    id: 1,
    title: "Freelance",
    description:
      "Creating web application as Frontend Developer using React JS, and collaborate with Backend Developers to create a simple web for client.",
    date: "Feb 16, 2022 - Aug 20, 2022",
    category: { title: "Frontend Engineer" },
  },
  {
    id: 2,
    title: "PT. Dumbways Teknologi Indonesia",
    description:
      "Participated in bootcamp training to become a Fullstack Developer, learned to use React JS, React Native, Golang, Node JS technology for 2 months.",
    date: "Aug 10, 2022 - Okt 28, 2022",
    category: { title: "Fullstack Developer Talent" },
  },
  {
    id: 3,
    title: "PT. Orde Digital Intelektual",
    description:
      "Developing modules and build features in banking sector web applications, maintain web application in production, and working with agile scrum methods.",
    date: "Nov 1, 2022 - Mar 1, 2022",
    category: { title: "Frontend Developer" },
  },
  {
    id: 4,
    title: "Healstation Indonesia",
    description:
      "Create a Korean e-commerce web application, using Next JS and Tailwind CSS. And also, assisting in the Korean legal regulation website project as a Frontend Engineer.",
    date: "Mar 14, 2023 - Present",
    category: { title: "Frontend Engineer" },
  },
];

export const projects = [
  {
    id: 1,
    title: "Dumbflix (Netflix Clone)",
    href: "https://dumbflix-appsite.netlify.app/",
    description:
      "Creating an online-based movie streaming website such as Netflix has premium and free features, has a payment gateway using Midtrans. Using React JS tech for the Frontend, and Golang for the Backend.",
    imageUrl: "/svg/dumbflix.svg",
  },
  {
    id: 2,
    title: "Cinema Online",
    description:
      "Just like Dumbflix, this is an online cinema streaming project. However, it has a movie buying feature, unlike Dumbflix which has a premium feature. In this project, my final test was at my bootcamp.",
    imageUrl: "/svg/cinema-online.svg",
  },

  {
    id: 3,
    title: "Pokédex App",
    href: "https://pokedex-app-phi-nine.vercel.app/",
    description:
      "Create a pokedex web app to find pokemon data, use PokéAPI to get pokemon data. Using React JS technologies for the frontend. This is the application that I like the most when developing.",
    imageUrl: "/svg/pokedex.svg",
  },
  {
    id: 4,
    title: "Personal Web Portofolio",
    href: "https://fernands-portofolio.vercel.app/",
    description:
      "This is the first website I made when I first learned coding. Uses vanilla HTML and CSS. This is also my first time learning Javascript. This is the website where my journey as a frontend developer begin.",
    imageUrl: "/svg/first-portofolio.svg",
  },
  {
    id: 5,
    title: "Github Search Engine",
    href: "https://github-search-engine-two.vercel.app/",
    description:
      "One of my projects for fun, using the Github API to find users and repositories from other people's github accounts. Using ReactJS technology. A project that I do when it's relaxed on weekends.",
    imageUrl: "/svg/github-search.svg",
  },
  {
    id: 6,
    title: "Materiku",
    href: "https://website-sederhana-materiku.vercel.app/",
    description:
      "This is the second website that I created since I first learned coding. Using HTML and CSS without Javascript and only as a landing page. This is where I first started to like the world of Frontend Developer.",
    imageUrl: "/svg/materiku.svg",
  },
];

