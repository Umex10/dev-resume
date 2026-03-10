"use client";

import { motion } from "framer-motion";

export default function Signature() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.5 }}
      className="w-full flex justify-center py-16"
    >
      <span
        className="text-[6rem] md:text-[10rem] lg:text-[13rem] leading-none
          select-none bg-gradient-to-br from-green-500 via-emerald-400 to-green-600
          bg-clip-text text-transparent opacity-25"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        Umex10
      </span>
    </motion.div>
  );
}
