// src/components/auth/PatientRegisterForm.tsx
"use client";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRight } from "lucide-react";
import {
  patientRegisterSchema,
  type PatientRegisterFormData,
} from "@/schemas/authSchemas/signupSchema";
import { registerUser } from "@/services/authService";
import { handleApiError } from "@/lib/utils/errorHandler";

export default function PatientRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientRegisterFormData>({
    resolver: zodResolver(patientRegisterSchema),
  });

  const onSubmit: SubmitHandler<PatientRegisterFormData> = async (data) => {
    try {
      const result = await registerUser(data);
      
      // console.log("Result",result)
      if (result.success) {
        alert("Registration successful! Please login.");
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert(handleApiError(error))
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="space-y-6">
        {/* Name */}
        <div className="space-y-3">
          <label className="block uppercase text-xs font-bold">Full Name</label>
          <input
            {...register("name")}
            type="text"
            className={`input w-full ${errors.name ? "border-red-500" : ""}`}
            placeholder="Dr. / Mr. / Ms. Sarah Mitchell"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-3">
          <label className="block uppercase text-xs font-bold">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            className={`input w-full ${errors.email ? "border-red-500" : ""}`}
            placeholder="example@gmail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-3">
          <label className="block uppercase text-xs font-bold">
            Phone Number
          </label>
          <input
            {...register("phone")}
            type="tel"
            className={`input w-full ${errors.phone ? "border-red-500" : ""}`}
            placeholder="+880 1X XXXXXXXX"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="block uppercase text-xs font-bold">Password</label>
          <input
            {...register("password")}
            type="password"
            className={`input w-full ${
              errors.password ? "border-red-500" : ""
            }`}
            placeholder="••••••••••••••••"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label className="block uppercase text-xs font-bold">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            className={`input w-full ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
            placeholder="••••••••••••••••"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      {/* Terms */}
      <div>
        <div className="flex items-center gap-1">
          <input
            {...register("agreeToTerms")}
            type="checkbox"
            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
          />
          <p className="text-base-content/60 text-xs font-semibold">
            I agree to the{" "}
            <span className="text-primary">Terms of Service</span> and{" "}
            <span className="text-primary">Privacy Policy</span>
          </p>
        </div>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary flex items-center justify-center space-x-2 hover:bg-primary/80 text-white font-medium text-sm py-3 px-4 rounded-xl disabled:opacity-50"
      >
        <span>{isSubmitting ? "Creating Account..." : "Create Account"}</span>
        {!isSubmitting && <MoveRight />}
      </button>
    </form>
  );
}
