import { ChartConfig } from "@/components/ui/chart";
import { calculateSkillLevel } from "./skills";
import { CardContentInterface } from "@/types/cardContent";

export const skillContent: CardContentInterface = {
  header: {
    title: "Tech Distribution",
    desc: "Share of technologies / category",
  },
  footer: {
  title: "Category distribution overview",
},
};

export const levels = calculateSkillLevel();

export const chartData = [
  { type: "backend", value: levels.backend, fill: "#22c55e" },
  { type: "frontend", value: levels.frontend, fill: "#16a34a" },
  { type: "devops", value: levels.devops, fill: "#4ade80" },
];

export const chartConfig = {
  value: {
    label: "Skill Level",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
