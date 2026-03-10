"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { milestones } from "@/content/journey/journey";

const INITIAL_COUNT = 4;

export default function Journey() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const displayed = milestones.slice(0, visibleCount);

  return (
    <section
      id="journey"
      className="md:min-h-[calc(100vh-4.563rem)] w-full py-12 flex flex-col gap-10"
    >
      <SectionHeading icon={Route} heading="Journey" />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

        <div className="flex flex-col gap-8 md:gap-12">
          {displayed.map((milestone, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex items-start gap-4
                  md:gap-0 md:items-center
                  ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot on the line */}
                <div
                  className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full
                    flex items-center justify-center border-2 transition-colors duration-300
                    ${
                      milestone.highlight
                        ? "bg-green-500/20 border-green-500 text-green-500"
                        : "bg-background border-border text-muted-foreground"
                    }
                    md:absolute md:left-1/2 md:-translate-x-1/2`}
                >
                  <milestone.icon className="w-4 h-4" />
                </div>

                {/* Card */}
                <div
                  className={`flex-1 md:w-[calc(50%-2.5rem)]
                    ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}
                    ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className={`group relative rounded-xl border p-4 bg-card
                      overflow-hidden transition-all duration-300
                      hover:shadow-lg
                      ${milestone.highlight ? "border-green-500/30" : "border-border"}`}
                  >
                    {/* Hover overlay */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0
                        group-hover:opacity-100 transition-opacity duration-500
                        bg-gradient-to-br from-emerald-400/10 via-green-500/5 to-emerald-500/10"
                    />

                    <div className="relative z-10">
                      <span
                        className={`inline-block text-xs font-medium tracking-wide uppercase mb-1
                          ${milestone.highlight ? "text-green-500" : "text-muted-foreground"}`}
                      >
                        {milestone.date}
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Show More / Show Less */}
      {visibleCount < milestones.length && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Button
            variant="secondary"
            onClick={() => setVisibleCount(milestones.length)}
          >
            Show more
          </Button>
        </motion.div>
      )}

      {visibleCount >= milestones.length && milestones.length > INITIAL_COUNT && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Button
            variant="secondary"
            onClick={() => setVisibleCount(INITIAL_COUNT)}
          >
            Show less
          </Button>
        </motion.div>
      )}
    </section>
  );
}
