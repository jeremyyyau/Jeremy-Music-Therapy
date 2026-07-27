import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name." })
    .max(100, { message: "Name must be under 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be under 255 characters." }),
  phone: z
    .string()
    .trim()
    .max(50, { message: "Phone number must be under 50 characters." })
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .max(150, { message: "Subject must be under 150 characters." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please write a little more so I can understand how to help." })
    .max(2000, { message: "Message must be under 2000 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
