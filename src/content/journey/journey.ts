import {
  Rocket,
  GraduationCap,
  Code2,
  GitCommit,
  Trophy,
  Flame,
  Users,
  Sparkles,
} from "lucide-react";

export interface Milestone {
  date: string;
  title: string;
  description: string;
  icon: React.ElementType;
  highlight?: boolean;
}

// ──────────────────────────────────────────────
//  HIER KANNST DU DEINE MEILENSTEINE ANPASSEN!
//
//  highlight: true  → hebt die Karte grün hervor
//  Reihenfolge = Chronologisch (älteste oben)
// ──────────────────────────────────────────────
export const milestones: Milestone[] = [
  {
    date: "Oct 2024",
    title: "Started my Bsc at FH",
    description:
      "Began studying Mobile Software Development in Kapfenberg. A steep curve, but the right one.",
    icon: GraduationCap,
    highlight: true,
  },
  {
    date: "Dec 2024",
    title: "First Commit",
    description:
      "Pushed my very first line of code to GitHub — a small step, but the start of everything.",
    icon: GitCommit,
  },
  {
    date: "Aug 2025",
    title: "Tic-Tac-Toe with JavaFX",
    description:
      "Created a multiplayer game with an AI opponent, multithreading, and socket communication.",
    icon: Trophy,
  },
  {
    date: "Oct 2025",
    title: "First Web Apps",
    description:
      "Launched the Weather App and Umexis — my first React + Tailwind projects, both deployed on Vercel.",
    icon: Rocket,
    highlight: true,
  },
  {
    date: "Nov 2025",
    title: "Smart Kassa — Team",
    description:
      "Collaborated with two teammates to build a checkout system using Node.js, Vite, and SQL.",
    icon: Users,
  },
  {
    date: "Dez 2025",
    title: "Daily Commit Streak",
    description:
      "Started committing every single day — turned coding from a habit into a discipline.",
    icon: Flame,
    highlight: true,
  },
  {
    date: "Feb 2026",
    title: "Social Media Website",
    description:
      "Started to code a social media website, based on a S-Boot backend and Next.js frontend.",
    icon: Flame,
  },
  {
    date: "Mar 2026",
    title: "777+ Contributions & Counting (STREAK)",
    description:
      "1227 contributions on GitHub across my reps.",
    icon: Sparkles,
  },
];
