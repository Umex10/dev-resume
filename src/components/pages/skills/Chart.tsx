"use client"
import { Pie, PieChart } from "recharts"
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { chartConfig, chartData } from "@/content/skills/chart"

export const description = "A pie chart with a label"

export function Chart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card
        className="w-full lg:max-w-[400px]
        lg:max-h-[400px]
        overflow-hidden flex flex-col 
        items-center md:flex-row md:items-stretch
        lg:flex-col lg:items-center p-4 gap-4 md:gap-0 lg:gap-8"
      >
        <CardHeader
          className="w-full p-0 flex flex-col items-center 
          justify-center md:w-1/4 lg:w-full lg:text-xl"
        >
          <CardTitle>Tech Stack Distribution</CardTitle>
          <CardDescription>My tech focus by category</CardDescription>
        </CardHeader>

        <CardContent
          className="md:flex-1 p-0 min-h-0
          flex flex-col items-center justify-start
          md:items-center md:justify-center"
        >
          <ChartContainer
            config={chartConfig}
            className="[&_.recharts-pie-label-text]:fill-foreground 
            mx-auto aspect-square w-full py-0 min-h-[250px]"
          >
            <PieChart className="text-base">
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey="value"
                label={({ value }) => `${value}%`}
                nameKey="stack"
              />
              <ChartLegend
                content={<ChartLegendContent nameKey="stack" />}
                className="-translate-y-2  flex-wrap gap-2 *:basis-1/4 *:justify-center
                pb-2"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>

        <CardFooter
          className="w-full pb-0 flex justify-center
          md:w-1/4 lg:w-full"
        >
          <div className="text-muted-foreground text-nowrap">
            Reflects my current learning focus.
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
