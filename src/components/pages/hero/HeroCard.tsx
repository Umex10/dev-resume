 "use client"
 import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { StatusBadge } from "../../StatusBadge";
import { heroCard } from "@/content/hero/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { motion } from "framer-motion";
import { handleLenisScroll } from "@/lib/lenisScroll";
  
  const HeroCard = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full lg:w-auto"
      >
        <Card className="overflow-hidden flex flex-col md:flex-row md:items-center 
        md:justify-center lg:flex-col lg:max-w-sm w-full relative gap-2
        md:gap-6 lg:gap-2">

          <CardHeader>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden w-full rounded-xl 
              shadow-md relative aspect-square ring-1 ring-border
              md:w-52 md:h-52 md:aspect-auto
              lg:w-[22rem] lg:h-[22rem]    
              flex-shrink-0"
            >
              <Image
                src="/image.jpg"
                alt="Umejr"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </CardHeader>

          <CardContent className="flex flex-col items-center justify-center gap-3">
            <StatusBadge />

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-xl font-bold"
            >
              {heroCard.about.name}
            </motion.h2>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="flex justify-center gap-1.5"
            >
              {heroCard.socials.map((element) => (
                <li key={element.name}>
                  <a href={element.href}>
                    <Button variant="outline" className="p-2">
                    {<element.icon></element.icon>}
                  </Button>
                  </a>
                </li>
              ))}
            </motion.ul>
          </CardContent>

          <CardFooter className="flex-row md:flex-col lg:flex-row
            gap-2 items-center md:w-52 md:flex-shrink-0 lg:w-auto
            lg:flex-shrink">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="w-full"
            >
              {/* Download CV */}
              <a href="umejr-dzinovic-cv.pdf" download>
                  <Button type="submit" variant="green" className="w-full text-zinc-800 min-w-[100px]">
                {<heroCard.actions.download.icon></heroCard.actions.download.icon>}
                {heroCard.actions.download.label}
              </Button>
              </a>
            
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="w-full"
            >

              <Button variant="outline" className="w-full text-zinc-800 dark:text-zinc-200 min-w-[100px]"
              onClick={(e) => handleLenisScroll(e, "#contact")}>
                {<heroCard.actions.contact.icon></heroCard.actions.contact.icon>}
                {heroCard.actions.contact.label}
              </Button>
            </motion.div>
          </CardFooter>

          <BorderBeam
            duration={16}
            size={400}
            initialOffset={0}
            reverse={false}
            className="from-transparent via-green-500 to-transparent"
          />

          <BorderBeam
            duration={16}
            size={400}
            initialOffset={50}
            reverse={false}
            className="from-transparent via-green-300 to-transparent"
          />
        </Card>
      </motion.div>
    )
  }
  
  export default HeroCard
  