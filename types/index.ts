import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

export type IconComponent = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface Skill {
  name: string;
  icon: IconComponent;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  githubUrl: string;
  liveUrl?: string;
  liveLabel: string;
}
