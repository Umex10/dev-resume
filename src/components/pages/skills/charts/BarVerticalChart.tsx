"use client";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartConfig, chartData } from "@/content/skills/skillLevelChart";
import { useEffect, useRef, useState } from "react";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const BarVerticalChart = () => {

    // Necessary for delayed animation
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
    <ChartContainer ref={chartRef}
      config={chartConfig}
      className="[&_.recharts-pie-label-text]:fill-foreground 
            mx-auto aspect-square w-full py-0 min-h-[250px]"
    >
      <BarChart 
        accessibilityLayer
        data={chartData}
        barCategoryGap="20%"
        barGap={4}
        barSize={22}
      >
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="type"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value: string) =>
            value.charAt(0).toUpperCase() + value.slice(1)
          }
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel={false} />}
        />

        <Bar
          dataKey="value"
          radius={8}
          fill="currentColor"
          isAnimationActive={isVisible} 
          animationBegin={isVisible ? 0 : 999999}
          animationDuration={1400}
          animationEasing="ease"
        >
          <LabelList
            dataKey="value"
            position="top"
            formatter={(value: number) => `${value}%`}
            offset={8}
            className="fill-foreground text-sm"
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
};

export default BarVerticalChart;
