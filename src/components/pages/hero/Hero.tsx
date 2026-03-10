"use server"

import HeroCard from "./HeroCard";
import HeroText from "./HeroText";

function Hero() {
  return (
    <section id="home" className="relative md:min-h-[calc(100vh-4.563rem)]
     flex flex-col w-full
     items-center gap-4 md:gap-8 md:justify-center
     lg:gap-16 lg:flex lg:flex-row overflow-hidden">

    {/* Background glow effects — dark mode */}
    <div className="pointer-events-none absolute inset-0 hidden dark:md:block">
      <div className="absolute top-1/4 -left-32 w-[32rem] h-[32rem] rounded-full bg-green-500/15 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-emerald-500/12 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-green-400/8 blur-[150px]" />
      <div className="absolute top-0 right-1/4 w-[20rem] h-[20rem] rounded-full bg-emerald-400/10 blur-[80px]" />
      <div className="absolute bottom-0 left-1/3 w-[18rem] h-[18rem] rounded-full bg-green-600/8 blur-[90px]" />
    </div>

    {/* Background glow effects — light mode */}
    <div className="pointer-events-none absolute inset-0 hidden md:block dark:hidden">
      <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] rounded-full bg-green-400/25 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-[26rem] h-[26rem] rounded-full bg-emerald-400/20 blur-[90px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-green-300/15 blur-[130px]" />
      <div className="absolute top-0 right-1/4 w-[22rem] h-[22rem] rounded-full bg-emerald-300/20 blur-[80px]" />
      <div className="absolute bottom-0 left-1/3 w-[20rem] h-[20rem] rounded-full bg-green-500/15 blur-[90px]" />
    </div>

    <HeroCard></HeroCard>
    <HeroText></HeroText>
     
    </section>
  );
}

export default Hero;
