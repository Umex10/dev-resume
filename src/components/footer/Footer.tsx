"use client"

import { footerContent } from "@/content/footer/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const content = footerContent;

export default function Footer() {
  return (
    <footer
      className="relative w-full border-t py-8 bg-background/80 backdrop-blur-md
      md:-mt-[18.82rem] md:will-change-transform"
      style={{ transform: 'translateZ(0)' }}
    >
      <div
        className="mx-auto max-w-7xl w-full flex flex-col
        items-center gap-6 md:flex-row md:items-center md:justify-between px-4"
      >
        {/* LEFT */}
        <div
          className="text-sm md:text-base lg:text-lg
          text-muted-foreground flex items-center gap-2
          md:w-1/4 md:justify-start"
        >
          <content.built.icon className="h-4 w-4 md:w-6 md:h-6 text-green-500" />
          {content.built.text}
        </div>

        {/* MIDDLE */}
        <div className="flex flex-col items-center gap-2 md:flex-1">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border shadow-md rounded-full overflow-hidden">
            <AvatarImage src="/image.jpg" alt="Umejr" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <div className="text-center">
            <p className="font-semibold text-lg md:text-xl lg:text-2xl">
              {content.name}
            </p>
            <p className="text-sm md:text-base lg:text-lg italic opacity-80 font-[500]">
              — {content.username} —
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="flex items-center gap-2 text-sm md:text-base lg:text-lg 
          text-muted-foreground 
          md:w-1/4 md:justify-end text-center"
        >
          <content.desire.icon className="h-4 w-4 md:w-6 md:h-6 text-green-500" />
          {content.desire.text}
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="mt-6">
        <p
          className="text-center text-xs md:text-sm lg:text-base 
          text-muted-foreground mt-4"
        >
          {content.cr.text}
          <span className="text-green-500 font-bold"> {content.cr.name}</span>
        </p>
      </div>
    </footer>
  );
}
