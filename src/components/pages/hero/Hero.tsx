"use server"

import HeroCard from "./HeroCard";
import HeroText from "./HeroText";

function Hero() {
  return (
    <div className="md:min-h-[calc(100vh-4.5rem)] flex flex-col w-full
     items-center gap-4 md:gap-8 md:justify-center
     lg:gap-16 lg:flex lg:flex-row ">

    <HeroCard></HeroCard>
    <HeroText></HeroText>
     
    </div>
  );
}

export default Hero;
