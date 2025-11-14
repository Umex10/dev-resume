"use client"

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { textContent } from "@/content/hero/text";

const metrics = textContent.metrics;

export default function Metrics() {
  return (
 <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }} 
          className="grid grid-cols-2 w-full gap-6 md:flex
        md:flex-row md:justify-between">
  {metrics.map((element, index) => (
    <div key={index} className="flex flex-col items-center gap-1">
      
      <span className="text-3xl font-extrabold tracking-tight flex items-center">
        <CountUp start={0} end={element.value} duration={7}
        decimals={String(element.value).includes(".") ? 2 : 0} />
        <span className={`${String(element.value).includes(".") ? 2 : 0}`}>+</span>
      </span>

      <span className="text-sm text-muted-foreground">
        {element.label}
      </span>
    </div>
  ))}
</motion.div>
  );
}