import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export const projects = [
  {
    title: "Shopping Manager",
    subtitle: "React app",
    description:
      "You can manage your shopping by scanning the QR code from the block. App is in further development. I used API spreadsheets to store data.  ",
    image: "./s-m.png",
    link: "https://shopping-manager-lukas.netlify.app/",
    github: "https://github.com/lukasZelinka/Shopping-manager.git",
  },
  {
    title: "PORTFOLIO",
    subtitle: "React web site",
    description:
      "This is my responzive Portfolio. I used also tailwind technology. You can download my source code by clicking the icon below. ",
    image: "./portfoli.png",
    link: "https://lukas-zelinka-portfolio.netlify.app/",
    github: "https://github.com/lukasZelinka/Portfolio.git",
  },
  {
    title: "SAUNA",
    subtitle: "HTML, CSS, Javascript - web site",
    description:
      "I created the web site by using HTML, CSS and Javascript. It is fully responsive. I used Photoshop to optimize the images.",
    image: "./sauna1png.png",
    link: "https://sauna.pages.dev/#home",
    github: "https://github.com/lukasZelinka/Sauna.git",
  },
  {
    title: "The Rock Paper Scissors Game",
    subtitle: "Javascript, HTML, CSS",
    description:
      "Playing the game against the computer. Just choose rock , paper or scissors. You can download my source code by clicking the icon below. ",
    image: "./rock paper scissors.png",
    link: "https://rock-paper-scissors-game-4pb.pages.dev/",
    github: "https://github.com/lukasZelinka/Rock-Paper-Scissors-game.git",
  },
];

export const testimonials = [
  {
    quote:
      "Lukas has demonstrated drive and ability to learn and understand various technologies like CSS, HTML, JS and React. He is creative in problem-solving and striving to write clean code.",
    image: "./marek1.png",
    name: "Marek Rigan",
    position: "Tech Arch Delivery Assoc Manager",
    contactLink:
      "https://sk.linkedin.com/in/marekrigan?trk=people-guest_people_search-card",
    contactIcon: <FaLinkedin />,
  },
  {
    quote:
      "I have known Lukas for over 15 years and I know him as the man fully dedicated to his goals. It was showing when he studied music and it is showing now, when starting a career as front-end developer. Daily hard work for hours, job related or in free time, is something he considers normal. He is outgoing, tolerant, open to meet new people and eager to learn. I am sure he can become valuable asset in any kind of co-operation he will be part of.",
    image: "./jaro.jpg",
    name: "Jaroslav Weiss",
    position: "Actuarial Risk Analyst in Insurance",
    contactLink: "mailto:jardofp@centrum.sk",
    contactIcon: <FaEnvelope />,
  },
];

export const skills = ["HTML", "CSS", "JavaScript", "React", "Photoshop"];
