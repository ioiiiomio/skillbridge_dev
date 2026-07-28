import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface TrustItem {
  label: string;
}

export interface FeatureBubble {
  icon: LucideIcon;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface ProblemItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  order: number;
}

export interface GameItem {
  icon: LucideIcon;
  title: string;
  description: string;
  meta: string;
  buttonLabel: string;
  accent: "blue" | "violet" | "yellow";
}

export interface ResultStory {
  studentName: string;
  college: string;
  speciality: string;
  result: string;
  isPlaceholder: boolean;
}

export interface PartnerCategory {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}
