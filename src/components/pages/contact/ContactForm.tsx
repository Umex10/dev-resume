"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactForm } from "@/content/contact/contact";
import { formSchema } from "@/lib/formSchema";
import { send } from "@/actions/send";
import { Sparkles, Coffee, Rocket } from "lucide-react";

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    send(values);
    console.log("Form submitted with values:", values);
    form.reset();
  }

  const formContent = contactForm;
  const inputBg = "bg-muted";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex-1"
    >
      <Card className="border-none">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">

            {/* Full Name Field */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={formContent.input.name}
                      className={`${inputBg} md:h-11 md:text-base`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={formContent.input.email}
                      className={`${inputBg} md:h-11 md:text-base`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder={formContent.input.message}
                      className={`resize-none min-h-32 md:min-h-36 md:text-base ${inputBg}`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="green"
              className="w-full text-zinc-800 md:h-11 md:text-base"
              disabled={form.formState.isSubmitting}
            >
              {formContent.button.value}
            </Button>

          </form>
        </Form>
      </Card>

      {/* Motivational section to fill space */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 rounded-xl border border-border bg-card p-5 flex flex-col gap-4"
      >
        <p className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-green-500" />
          What happens next?
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/15 text-green-500 text-xs font-bold flex-shrink-0 mt-0.5">1</span>
            <p className="text-xs text-muted-foreground">I&apos;ll receive your message and review it carefully.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/15 text-green-500 text-xs font-bold flex-shrink-0 mt-0.5">2</span>
            <p className="text-xs text-muted-foreground">Expect a message within 24 hours — usually sooner.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/15 text-green-500 text-xs font-bold flex-shrink-0 mt-0.5">3</span>
            <p className="text-xs text-muted-foreground">We&apos;ll discuss how I can work for you.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 pt-2 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Coffee className="w-3.5 h-3.5 text-green-500" />
            Open for coffee chats
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Rocket className="w-3.5 h-3.5 text-green-500" />
            Ready for the next level!
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
