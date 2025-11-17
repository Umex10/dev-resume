"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { contactInfo } from "@/content/contact/contact";

import ContactForm from "./ContactForm";
import { Send } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const Contact = () => {
  return (
    <section
      id="contact"
      className="md:min-h-[calc(100vh-4.563rem)]
     w-full py-12 flex flex-col gap-10"
    >
      <SectionHeading icon={Send} heading="Contact"></SectionHeading>
      <div className="flex flex-col md:flex-row gap-8 md:gap-6">
        <div className="flex-1 flex flex-col gap-3">
          {contactInfo.map((info, index) => (
            <Card className="w-full bg-neutral-900/50" key={index}>
              <CardHeader className="flex flex-row items-center gap-3 px-2 py-3">
                <info.icon className="text-emerald-500 w-6 h-6 md:w-8 md:h-8" />

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
          ))}
        </div>

        <ContactForm></ContactForm>
      </div>
    </section>
  );
};

export default Contact;
