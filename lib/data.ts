import { Code2, Database, Server } from "lucide-react";

import {
  Css3Icon,
  GitIcon,
  GithubIcon,
  Html5Icon,
  JavaIcon,
  JsIcon,
  LinkedinIcon,
  NextjsIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  TelegramIcon,
} from "@/components/icons/brand-icons";
import type { NavLink, Project, Skill, SocialLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/jho-G", icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yohannes-girma-dev/",
    icon: LinkedinIcon,
  },
  { label: "Telegram", href: "https://t.me/jho_g", icon: TelegramIcon },
];

export const typingRoles = [
  "Django Developer",
  "Backend Developer",
  "API Builder",
];

export const skills: Skill[] = [
  { name: "HTML", icon: Html5Icon },
  { name: "CSS", icon: Css3Icon },
  { name: "JavaScript", icon: JsIcon },
  { name: "Python", icon: PythonIcon },
  { name: "Django", icon: Server },
  { name: "REST API", icon: Code2 },
  { name: "SQL", icon: Database },
  { name: "Java", icon: JavaIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "Git", icon: GitIcon },
];

export const projects: Project[] = [
  {
    title: "Kuriftu Hospitality",
    description: "Hospitality management platform built using Django.",
    image: "/images/project1.png",
    githubUrl: "https://github.com/jho-G/Kuriftu-Hospitality",
    liveUrl: "https://kuriftu-hospitality-1.onrender.com",
    liveLabel: "Live Demo",
  },
  {
    title: "School Management System",
    description:
      "Django-based system for managing students, courses, and attendance.",
    githubUrl: "https://github.com/jho-G/django_student_management_system",
    liveLabel: "Still Building",
  },
];
