"use client";
import { motion } from "framer-motion";

interface SectionHeadingArgs {
  icon: React.ElementType;
  heading: string;
}

const SectionHeading = ({ icon, heading }: SectionHeadingArgs) => {
  const Icon = icon;

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {/* ICON ANIMATION */}
      <motion.span
        initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 12,
          duration: 0.6,
        }}
        viewport={{ once: true }}
      >
        <Icon className="w-[36px] h-[36px]" />
      </motion.span>

      {/* HEADING ANIMATION */}
      <motion.h2
        className="text-3xl font-bold tracking-tight text-center"
        initial={{ opacity: 0, y: 10, letterSpacing: "0.05em" }}
        whileInView={{ opacity: 1, y: 0, letterSpacing: "0em" }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        viewport={{ once: true }}
      >
        {heading}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
