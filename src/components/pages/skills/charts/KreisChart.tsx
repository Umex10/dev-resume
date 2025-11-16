"use client";

import { Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartConfig, chartData } from "@/content/skills/distributionChart";
import { useEffect, useRef, useState } from "react";

const KreisChart = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!chartRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animation nur einmal
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(chartRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <ChartContainer
      ref={chartRef}
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
          outerRadius="80%"
          isAnimationActive={isVisible} 
          animationBegin={isVisible ? 0 : 999999} 
          animationDuration={1400}
          animationEasing="ease-out"
        />
        <ChartLegend
          content={<ChartLegendContent nameKey="stack" />}
          className="-translate-y-2  flex-wrap gap-2 *:basis-1/4 *:justify-center
                pb-2"
        />
      </PieChart>
    </ChartContainer>
  );
};

export default KreisChart;
