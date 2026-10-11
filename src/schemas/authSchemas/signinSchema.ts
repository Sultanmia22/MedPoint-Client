import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .trim()
    .email("Please inter a valid email address"),

  password: z
    .string({ message: "Password is required" })
    .trim()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter") 
    .regex(/[0-9]/, "Password must contain at least one number"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
