
import {
  ChartConfig,
} from "@/components/ui/chart"

import { calculateAmounts } from "./skills";
import { CardContentInterface } from "@/types/cardContent";

export const distributionContent: CardContentInterface = {
  header: {
    title: "Category Strength",
    desc: "Averaged skill level / category",
  },
  footer: {
    title: "Combined scores",
  },
};


export const amounts = calculateAmounts();


export const chartData = [
  { stack: "backend", value: amounts.backend, fill: "#22c55e" },
  { stack: "frontend", value: amounts.frontend, fill: "#16a34a" },
  { stack: "devops", value: amounts.devops, fill: "#4ade80" },
]

export const chartConfig = {
  backend: {
    label: "Backend"
  },
  frontend: {
    label: "Frontend"
  },
  devops: {
    label: "Devops"
  }
} satisfies ChartConfig