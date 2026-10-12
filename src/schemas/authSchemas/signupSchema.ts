import { z } from "zod";
//Paitent Registration Schema
export const patientRegisterSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address").toLowerCase(),
    phone: z.string().regex(/^01[0-9]{9}$/, "Invalid Bangladeshi phone number").optional(),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Password must contain uppercase letter")
      .regex(/[0-9]/, "Password must contain number")
      .regex(/[!@#$%^&*]/, "Password must contain special character"),
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

// Doctor Registration Schema
export const doctorRegisterSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address").toLowerCase(),
    phone: z.string().regex(/^01[0-9]{9}$/, "Invalid Bangladeshi phone number").optional(),
    specialization: z.string().min(1, "Specialization is required"),
    licenseNumber: z.string().min(1, "License number is required"),
    experience: z.number().int().min(0, "Experience cannot be negative"),
    consultationFee: z.number().positive("Consultation fee must be greater than zero"),
    clinicName: z.string().min(1, "Clinic name is required"),
    city: z.string().min(1, "City is required"),
    licenseDocumentUrl: z.url("Enter a valid license document URL").optional(),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Password must contain uppercase letter")
      .regex(/[0-9]/, "Password must contain number")
      .regex(/[!@#$%^&*]/, "Password must contain special character"),
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
