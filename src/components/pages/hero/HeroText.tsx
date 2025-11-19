 "use client"

import { motion } from "framer-motion";


import React from 'react'
import AnimatedText from "@/components/AnimatedText";
import Metrics from "@/components/Metrics";
import { textContent } from "@/content/hero/text";

const identity = textContent.identity;
const desc = textContent.desc;

const HeroText = () => {
  return (
     <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col w-full text-left items-start gap-4"
      >
        <h2 className="font-light tracking-wide text-gray-400 italic md:text-xl">
          👋 <span className="font-medium italic">Hello World!</span>
        </h2>

        <h3 className="w-full text-left text-3xl md:text-4xl lg:text-5xl font-light leading-tight
           md:space-y-1 tracking-wide text-foreground">

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="block"
          >
            <span className="font-normal">{identity.start} </span>
            <span className="italic">{identity.name}</span>,
          </motion.span>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="block"
          >
            <AnimatedText />
          </motion.span>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-normal opacity-90"
          >
            {identity.location}
          </motion.span>
        </h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="w-full mx-auto md:mx-0 text-sm leading-relaxed 
        text-muted-foreground text-justify sm:text-base sm:leading-loose 
        sm:text-left"
        >
          {desc.firstText}
          <span className="font-medium text-foreground italic"> {desc.firstTech} </span>
          {desc.secondText}
          <span className="font-medium text-foreground italic"> {desc.secondTech}</span>.
          {" "}{desc.thirdText}
          <span className="font-medium text-foreground italic"> {desc.thirdTech}</span>.
          {" "}{desc.forthText}
        </motion.p>
    
          <Metrics></Metrics>
          
      </motion.div>
  )
}

export default HeroText
