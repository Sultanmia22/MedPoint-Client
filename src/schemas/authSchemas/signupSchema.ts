import { z } from "zod";
// ✅ Paitent Registration Schema
export const patientRegisterSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Password must contain uppercase letter")
      .regex(/[0-9]/, "Password must contain number"),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to terms",
    }),
    role: z.literal("patient"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// ✅ Doctor Registration Schema
export const doctorRegisterSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    specialization: z.string().min(2, "Specialization is required"),
    licenseNumber: z.string().min(5, "License number is required"),
    experience: z
      .number()
      .min(0, "Experience cannot be negative")
      .max(70, "Experience seems invalid"),
    consultationFee: z.number().min(0, "Fee cannot be negative"),
    clinicName: z.string().min(2, "Clinic name is required"),
    city: z.string().min(2, "City is required"),
    licenseDocumentUrl: z.string().optional(), // File URL
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Password must contain uppercase letter")
      .regex(/[0-9]/, "Password must contain number"),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to terms",
    }),
    role: z.literal("doctor"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const registerSchema = z.union([
  patientRegisterSchema,
  doctorRegisterSchema,
]);

export type PatientRegisterFormData = z.infer<typeof patientRegisterSchema>;
export type DoctorRegisterFormData = z.infer<typeof doctorRegisterSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
