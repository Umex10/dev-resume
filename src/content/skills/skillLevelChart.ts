import { ChartConfig } from "@/components/ui/chart";
import { calculateSkillLevel } from "./skills";
import { CardContentInterface } from "@/types/cardContent";

export const skillContent: CardContentInterface = {
  header: {
    title: "Skill Level",
    desc: "Based on selected technologies",
  },
  footer: {
    title: "Summed up skill levels per category",
  },
};

export const levels = calculateSkillLevel();

export const chartData = [
  { type: "backend", value: levels.backend, fill: "#22c55e" },
  { type: "frontend", value: levels.frontend, fill: "#8b5cf6" },
  { type: "devops", value: levels.devops, fill: "#9ca3af" },
];

export const chartConfig = {
  value: {
    label: "Skill Level",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
