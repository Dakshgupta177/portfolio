import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import {
  RiCloudLine,
  RiCodeSSlashLine,
  RiCss3Line,
  RiDatabase2Line,
  RiGitBranchLine,
  RiHtml5Line,
  RiJavascriptLine,
  RiLayout4Line,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiSecurePaymentLine,
  RiShieldKeyholeLine,
  RiTailwindCssLine,
  RiTriangleLine,
} from "react-icons/ri";
import {
  TbBrandFramerMotion,
  TbBrandMongodb,
  TbBrandNodejs,
  TbBrandRedux,
  TbBrandSocketIo,
  TbBrandTypescript,
} from "react-icons/tb";

import React from "react";

const experienceInYears = new Date().getFullYear() - 2024;

export const profile = {
  avatar: "/profileavatar.png",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  name: "Daksh Gupta",
  title: "JavaScript FullStack Developer",
  experience: `${experienceInYears} years`,
  likes:
    "building scalable websites, learning new technologies, and solving complex problems.",
  resumeLink: `/resume.pdf`,
  linkedInLink: "https://www.linkedin.com/in/daksh-gupta-b51143372",
  githubLink: "https://github.com/Dakshgupta177",
} as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Journey",
    hash: "#journey",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const journeyData = [
  {
    title: "Started Web Development",
    description:
      "Began my journey in web development by learning HTML, CSS, and JavaScript while building small responsive projects and exploring modern web technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2024 - July 2024",
  },
  {
    title: "Frontend Development",
    description:
      "Focused on frontend development using React.js, Tailwind CSS, and Framer Motion to create interactive and responsive user interfaces.",
    icon: React.createElement(FaReact),
    date: "July 2024 - Oct 2024",
  },
  {
    title: "Full-Stack Development",
    description:
      "Expanded into backend development with Node.js, Express.js, MongoDB, and authentication systems while building complete full-stack applications.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 - Jan 2025",
  },
  {
    title: "Advanced Project Building",
    description:
      "Built scalable projects including ecommerce platforms, admin dashboards, Stripe integrations, real-time features, and AI-powered search systems.",
    icon: React.createElement(FaReact),
    date: "Jan 2025 - July 2025",
  },
  {
    title: "DSA & Problem Solving",
    description:
      "Focused on strengthening problem-solving skills by practicing data structures and algorithms, solving coding challenges, and improving logical thinking through consistent practice on coding platforms like Leetcode.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2025 - Present",
  },
  {
    title: "Modern Full-Stack Developer",
    description:
      "Currently focused on building polished full-stack applications with modern UI/UX, AI integrations, scalable systems, and performance-focused development.",
    icon: React.createElement(FaReact),
    date: "Mar 2026 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "FlowLedger AI",
    description:
      "An AI-powered expense tracker to manage daily spending, categorize transactions, and visualize financial insights. Built with scalable backend features like Redis caching, pagination, and rate limiting for performance optimization.",
    tags: [
      "React",
      "NodeJS",
      "MongoDB",
      "Redis",
      "TailwindCSS",
      "Recharts",
      "Gemini Ai",
    ],
    imageUrl: "/flowledgerai.png",
    url: "",
    status: "Currently Building",
  },
  {
    title: "NovaCart AI",
    description:
      "A full-stack AI-powered eCommerce platform with authentication, Stripe payments, smart product search, cart system, admin dashboard, and AI-based product recommendations.",
    tags: ["React", "NodeJS", "MongoDB", "Stripe", "TailwindCSS", "OpenAI"],
    imageUrl: "/novacart.png",
    url: "https://e-commerce-full-stack-frontend-gamma.vercel.app/",
    status: "Live",
  },
  {
    title: "StreamVerse",
    description:
      "A modern movie streaming platform inspired by JioCinema with movie browsing, category filtering, responsive UI, and video previews using TMDB API.",
    tags: ["React", "Next.js", "TailwindCSS", "TMDB API"],
    imageUrl: "/streamverse.png",
    url: "https://streamverse-87ux.vercel.app/",
    status: "Live",
  },
] as const;

export const skillsData = [
  { name: "HTML5", icon: RiHtml5Line },
  { name: "CSS3", icon: RiCss3Line },
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React.js", icon: RiReactjsLine },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "Redux Toolkit", icon: TbBrandRedux },
  { name: "Framer Motion", icon: TbBrandFramerMotion },
  { name: "Tailwind CSS", icon: RiTailwindCssLine },
  { name: "Node.js", icon: RiNodejsLine },
  { name: "Express.js", icon: TbBrandNodejs },
  { name: "Socket.IO", icon: TbBrandSocketIo },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "PostgreSQL", icon: RiDatabase2Line },
  { name: "Redis", icon: RiDatabase2Line },
  { name: "JWT Auth", icon: RiShieldKeyholeLine },
  { name: "Stripe", icon: RiSecurePaymentLine },
  { name: "Git & GitHub", icon: RiGitBranchLine },
  { name: "Vercel", icon: RiTriangleLine },
  { name: "Render", icon: RiCloudLine },
  { name: "REST APIs", icon: RiCodeSSlashLine },
  { name: "Responsive Design", icon: RiLayout4Line },
  { name: "...and more", icon: React.Fragment },
] as const;
