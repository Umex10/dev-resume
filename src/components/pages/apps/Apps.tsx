"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { apps } from "@/content/app/app";
import { Dna, ArrowUpRight } from 'lucide-react';
import { Github } from 'lucide-react';
import SectionHeading from "@/components/ui/section-heading";

export default function Apps() {
  // "show more" function
  const [visibleCount, setVisibleCount] = useState(3);

  const displayedApps = apps.slice(0, visibleCount);

  return (
    <section id="apps" className="md:min-h-[calc(100vh-4.563rem)]
     w-full py-12 flex flex-col gap-10">
      {/* Title animation */}
     <SectionHeading icon={Dna} heading="Apps"></SectionHeading>

      <div
        className="
        grid grid-cols-1 gap-8
        md:grid-cols-2 lg:grid-cols-3
      "
      >
        {displayedApps.map((app, index) => (
          <motion.div
            key={app.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <Card
              className="overflow-hidden border-border
             hover:shadow-xl transition-all duration-300
             flex flex-col h-full"
            >
              <CardHeader className="p-0">
                {/* Image animation */}
                <motion.div
                  className="relative w-full h-80"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </CardHeader>

              <CardContent className="p-4 flex flex-col gap-3 flex-1">
                <motion.h3
                  className="text-xl font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {app.title}
                </motion.h3>

                <motion.p
                  className="text-sm text-muted-foreground line-clamp-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {app.desc}
                </motion.p>
                  {/* SPACER – Only meant for equal spaces */}
                  <div className="flex-1"></div>
                {/* Tags animation */}
                <motion.div
                  className="flex flex-wrap gap-2 mt-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.07,
                      },
                    },
                  }}
                >
                
                  {app.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-muted"
                      variants={{
                        hidden: { opacity: 0, y: 5 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {tag.toUpperCase()}
                    </motion.span>
                  ))}
                </motion.div>
              </CardContent>

              {/* Buttons animation */}
              <CardFooter className={`flex justify-between p-2
              ${!app.demo ? "justify-end" : ""}`}>
                {app.demo && (
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(app.demo)}
                    >
                      <ArrowUpRight></ArrowUpRight>Live Demo
                    </Button>
                  </motion.div>
                )}

                {app.github && (
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(app.github)}
                    >
                     <Github></Github>GitHub
                    </Button>
                  </motion.div>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      {/* Show More Button */}
      {visibleCount < 5 && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Button variant="secondary" onClick={() => setVisibleCount(5)}>
            Mehr anzeigen
          </Button>
        </motion.div>
      )}
    </section>
  );
}
