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


type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    // Clarify when to check for the error messages.
    mode: "onBlur",
    reValidateMode: "onChange",
    // This will be filled in when form is getting rendered for the first time
    defaultValues: {
      fullName: "",
      email: "",
      number: "",
      message: "",
    },
  });

  // Submit handler
  function onSubmit(values: FormValues) {
    send(values);
    console.log("Form submitted with values:", values);
    form.reset();
  }

  const formContent = contactForm; 
  const inputBg = "bg-neutral-900/50";

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
                      className={inputBg}
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
                      className={inputBg}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Number Field */}
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder={formContent.input.number}
                      className={inputBg}
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
                      className={`resize-none min-h-32 bg-neutral-900/50 ${inputBg}`}
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
              className="w-full text-zinc-800"
              disabled={form.formState.isSubmitting}
            >
              {formContent.button.value}
            </Button>
          </form>
        </Form>
      </Card>
    </motion.div>
  );
}
