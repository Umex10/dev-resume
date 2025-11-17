import z from "zod";

// Zod schema for form validation
export const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name must be at most 50 characters long." })
    .regex(/^[a-zA-ZäöüÄÖÜß\s-]+$/, { 
      message: "Name may only contain letters, spaces and hyphens." 
    }),

  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),

  number: z
    .string()
    .min(1, { message: "Phone number is required." })
    .regex(/^\+?[0-9\s\-()]{6,20}$/, { 
      message: "Please enter a valid phone number." 
    }),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(500, { message: "Message can be up to 500 characters long." }),
});