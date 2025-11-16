
import {
  ChartConfig,
} from "@/components/ui/chart"

import { calculateAmounts } from "./skills";

export const amounts = calculateAmounts();


export const chartData = [
  { stack: "backend", value: amounts.backend, fill: "#22c55e" },
  { stack: "frontend", value: amounts.frontend, fill: "#8b5cf6" },
  { stack: "devops", value: amounts.devops, fill: "#9ca3af" },
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