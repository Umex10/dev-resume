"use client";
import SkillBar from "react-skillbars";

import { handleColor, skills } from "@/content/skills/skills";
import ChartCard from "./charts/ChartCard";
import KreisChart from "./charts/KreisChart";
import BarVerticalChart from "./charts/BarVerticalChart";
import {skillContent } from "@/content/skills/skillLevelChart";
import { distributionContent } from "@/content/skills/distributionChart";
import SectionHeading from "@/components/ui/section-heading";
import { BadgeCheck } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="md:min-h-[calc(100vh-4.563rem)]
     w-full py-12 flex flex-col gap-10">
     <SectionHeading icon={BadgeCheck} heading="Skills"></SectionHeading>

      <div className="h-full w-full flex flex-col gap-4 lg:flex-row
      lg:items-stretch">
        <div className="w-full flex flex-col gap-4 lg:h-full lg:flex-1">
            <ChartCard cardContent={skillContent}> <KreisChart></KreisChart> </ChartCard>
            <ChartCard cardContent={distributionContent}> <BarVerticalChart></BarVerticalChart> </ChartCard>
        </div>
        
           <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.type} className="w-full">
            {/* Icon + Titel */}
            <div className="flex items-center gap-4 mb-2 px-1">
              <skill.icon
                className="w-8 h-8 
             fill-black dark:fill-white 
             transition-colors"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-lg">
                  {skill.type.charAt(0).toUpperCase() + skill.type.slice(1,)}</span>
                <span className="text-muted-foreground text-sm">
                  {skill.level}%
                </span>
              </div>
            </div>
            {/* SkillBar - only for one skill */}
            <SkillBar
              skills={[{ type: skill.category.charAt(0).toUpperCase() + skill.category.slice(1,)
                , level: skill.level }]}
              colors={handleColor(skill.type)}
              height={20}
              animationDuration={1400}
              animationDelay={200}
            />
          </div>
        ))}
      </div>
      </div>
     
    </section>
  );
};

export default Skills;
