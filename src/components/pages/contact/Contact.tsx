"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { contactInfo } from "@/content/contact/contact";
import { motion } from "framer-motion";

import ContactForm from "./ContactForm";
import { Send } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { handleContactClick } from "@/lib/contactClick";

const Contact = () => {
  return (
    <section
      id="contact"
      className="md:min-h-[calc(100vh-4.563rem)]
     w-full py-12 flex flex-col gap-10"
    >
      <SectionHeading icon={Send} heading="Contact"></SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col md:flex-row gap-8 md:gap-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-3"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="group relative w-full bg-neutral-900/50 cursor-pointer
  overflow-hidden transition-all duration-300
  hover:shadow-lg hover:scale-[1.01]"
                onClick={() => handleContactClick(info)}
              >
                {/* Emerald Hover Overlay */}
                <div
                  className="
      pointer-events-none absolute inset-0 opacity-0
      group-hover:opacity-100 transition-opacity duration-500
      bg-gradient-to-br from-emerald-400/15 via-green-500/10 to-emerald-500/15
    "
                ></div>

                <CardHeader className="flex flex-row items-center gap-3 px-2 py-3 relative z-10">
                  <info.icon
                    className="w-7 h-7 md:w-8 md:h-8 text-green-500 mt-0.5
      transition-colors duration-300 group-hover:text-emerald-400"
                  />

                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-muted-foreground">
                      {info.label}
                    </span>

                    <span className="text-medium font-semibold tracking-tight">
                      {info.value}
                    </span>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <ContactForm></ContactForm>
      </motion.div>
    </section>
  );
};

export default Contact;
