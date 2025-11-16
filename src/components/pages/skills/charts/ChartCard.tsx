"use client";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardContentInterface } from "@/types/cardContent";

interface ChartCardProps {
  children: React.ReactNode;
  cardContent: CardContentInterface;
}

const ChartCard = ({
  children,
  cardContent
}: Readonly<ChartCardProps>, ) => {

     return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card
        className="lg:max-h-[353px] lg:max-w-[400px]
    overflow-hidden flex flex-col 
        items-center md:flex-row md:items-stretch
        lg:flex-col lg:items-center p-4 gap-4 md:gap-0 lg:gap-8"
      >
        <CardHeader
          className="w-full p-0 flex flex-col items-center 
          justify-center md:w-1/4 lg:w-full lg:text-xl
          text-center"
        >
          <CardTitle>{cardContent.header.title}</CardTitle>
          <CardDescription>{cardContent.header.desc}</CardDescription>
        </CardHeader>

        <CardContent
          className="md:flex-1 p-0 min-h-0
          flex flex-col items-center justify-start
          md:items-center md:justify-center"
        >
          {children}
        </CardContent>

        <CardFooter
          className="w-full pb-0 flex justify-center
          md:w-1/4 lg:w-full"
        >
          <div
            className="text-muted-foreground text-center
        hyphens-auto"
          >
            {cardContent.footer.title}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ChartCard
