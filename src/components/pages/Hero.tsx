import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { StatusBadge } from "../StatusBadge";
import { heroCard } from "@/content/card";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";

function Hero() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-4">
      <Card className="relative overflow-hidden w-full max-w-sm flex flex-col gap-2">
        <CardHeader className="p-4">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md ring-1 ring-border">
            <Image
              src="/image.jpg"
              alt="Umejr Dzinovic"
              fill
              className="object-cover"
              priority
            />
          </div>
        </CardHeader>
        <CardContent
          className="w-full flex flex-col
       items-center justify-center gap-3"
        >
          <StatusBadge />
          <h2 className="text-xl font-bold">{heroCard.about.name}</h2>
          <ul className="flex justify-center gap-1.5">
            {heroCard.socials.map((element) => (
              <li key={element.name}>
                <Button variant="outline" className="p-2">
                  {<element.icon></element.icon>}
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex-row gap-2 items-center">
          <Button
            type="submit"
            variant="green"
            className="w-full text-zinc-800"
          >
            {<heroCard.actions.download.icon></heroCard.actions.download.icon>}
            {heroCard.actions.download.label}
          </Button>
          <Button
            variant="outline"
            className="w-full text-zinc-800 dark:text-zinc-200"
          >
            {<heroCard.actions.contact.icon></heroCard.actions.contact.icon>}
            {heroCard.actions.contact.label}
          </Button>
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

      <div className="w-full flex flex-col items-start text-left gap-4">
        <h2
          className="
    italic 
    text-sm sm:text-2xl md:text-3xl 
    font-light 
    tracking-wide 
    text-gray-400
  "
        >
          👋 <span className="font-medium not-italic">Hello World!</span>
        </h2>

        <h3
          className="
    w-full
    text-left
    text-2xl sm:text-3xl md:text-4xl
    font-light
    leading-tight
    tracking-wide
    text-foreground
  "
        >
          <span className="block">
            <span
              className="
        text-white
        font-normal
      "
            >
              I{"'"}m{" "}
            </span>
            <span className="italic text-white">Umejr Dzinovic</span>,
          </span>

          <span className="block">
            <AnimatedText />
          </span>

          <span
            className="
      text-white
      font-normal
      opacity-90
    "
          >
            Based in Kapfenberg, AT.
          </span>
        </h3>

        <p
          className="
    w-full
    text-sm sm:text-base
    leading-relaxed sm:leading-loose
    text-muted-foreground
    text-justify sm:text-left
    max-w-prose
    mx-auto
  "
        >
          I specialize in building reliable backends with
          <span className="font-medium italic text-foreground">
            {" "}
            Spring Boot{" "}
          </span>
          and creating sleek, modern frontends using
          <span className="font-medium italic text-foreground"> Next.js</span>.
          For a while now, I’ve been honing my skills across both sides of
          development, aiming to become a well-rounded
          <span className="font-medium italic text-foreground">
            {" "}
            Full Stack Developer
          </span>
          . I love bringing ideas to life through clean, functional design —
          making sure every project not only works perfectly, but feels great to
          use.
        </p>
      </div>
    </div>
  );
}
export default Hero;
