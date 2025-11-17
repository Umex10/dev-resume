"use client"
import { motion } from "framer-motion";

interface SectionHeadingArgs {
  icon: React.ElementType;
  heading: string;
}

const SectionHeading = ({icon, heading}: SectionHeadingArgs) => {

   const Icon = icon;

  return (
   <div className="flex flex-row items-center justify-center gap-2">
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, duration: 1 }}
          viewport={{ once: true }}
        >
          <Icon className="w-[36px] h-[36px]" />
          
        </motion.span>

        <motion.h2
          className="text-3xl font-bold tracking-tight text-center"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          
        >
          {heading}
        </motion.h2>
      </div>
  )
}

export default SectionHeading


