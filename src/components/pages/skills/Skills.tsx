"use client";
import SkillBar from "react-skillbars";
import { motion } from "framer-motion";


import { Chart } from "./Chart";
import { handleColor, skills } from "@/content/skills/skills";

const Skills = () => {
  return (
    <section id="skills" className="md:min-h-[calc(100vh-4.5rem)] scroll-mt-[64px]
     w-full py-12 flex flex-col gap-10">
      <motion.h2
        className="text-3xl font-bold tracking-tight text-center"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="h-full w-full flex flex-col gap-4 lg:flex-row">
        <Chart></Chart>
           <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
        {skills.map((skill, index) => (
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
              animationDelay={index * 150}
            />
          </div>
        ))}
      </div>
      </div>
     
    </section>
  );
};

export default Skills;
