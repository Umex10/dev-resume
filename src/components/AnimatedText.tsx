"use client";

import { TypeAnimation } from "react-type-animation";

export default function AnimatedText() {
  return (
    <TypeAnimation
      sequence={[
        "Fullstack Dev",
        2000,
         "Backend Artisan",
        2000,
        "Frontend Craftsman",
        2000,
        "Testing Devotee",
        2000
      ]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
      className="
        inline 
        font-bold bg-gradient-to-r from-green-500 to-emerald-400 
        bg-clip-text  text-transparent [background-clip:text] [color:transparent]
      "
    />
  );
}
