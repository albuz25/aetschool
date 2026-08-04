import { z } from "zod";

// Indian mobile numbers: 10 digits, starting 6-9. Accepts an optional +91 / 0 prefix.
const phoneRegex = /^(?:\+91[-\s]?|0)?[6-9]\d{9}$/;

export const leadFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name." })
    .max(80, { message: "Name looks too long." }),
  email: z.email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, { message: "Please enter a valid 10-digit mobile number." }),
  programInterest: z
    .string()
    .min(1, { message: "Please select a program you're interested in." }),
  city: z.string().trim().min(2, { message: "Please enter your city." }),
  state: z.string().trim().min(2, { message: "Please enter your state." }),
  source: z.string().min(1),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
