// src/components/auth/DoctorRegisterForm.tsx

"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRight, ShieldCheck } from "lucide-react";
import {
  doctorRegisterSchema,
  type DoctorRegisterFormData,
} from "@/schemas/authSchemas/signupSchema";
import { registerUser } from "@/services/authService";
import { handleApiError } from "@/lib/utils/errorHandler";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DoctorRegisterForm() {
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<DoctorRegisterFormData>({
    resolver: zodResolver(doctorRegisterSchema),
    defaultValues: {
      role: "doctor",
    },
  });

  //  File handle করো সঠিকভাবে
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // File reader preview-এর জন্য
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Form value-তে file set করো (base64 string হিসেবে)
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setValue("licenseDocumentUrl", fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<DoctorRegisterFormData> = async (data) => {
    try {
      console.log("Form Data:", data);

      const result = await registerUser(data);

      if (result.success) {
        alert(
          "Registration successful! Your account will be reviewed within 24-48 hours.",
        );
        router.push("/signin");
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert(handleApiError(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* Hidden role field */}
      <input {...register("role")} type="hidden" />

      <div className="space-y-6">
        {/* Name */}
        <div className="space-y-3">
          <label className="block uppercase text-xs font-bold">Full Name</label>
          <input
            {...register("name")}
            type="text"
            className={`input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="Dr. Sarah Mitchell"
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
            className={`input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm ${
              errors.email ? "border-red-500" : ""
            }`}
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
            className={`input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm ${
              errors.phone ? "border-red-500" : ""
            }`}
            placeholder="+880 1X XXXXXXXX"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Specialization */}
        <div className="space-y-3">
          <label className="block uppercase text-xs font-bold">
            Specialization
          </label>
          <input
            {...register("specialization")}
            type="text"
            className={`input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm ${
              errors.specialization ? "border-red-500" : ""
            }`}
            placeholder="e.g. Cardiology"
          />
          {errors.specialization && (
            <p className="text-red-500 text-sm">
              {errors.specialization.message}
            </p>
          )}
        </div>

        {/* License Number */}
        <div className="space-y-3">
          <label className="block uppercase text-xs font-bold">
            Medical License Number
          </label>
          <input
            {...register("licenseNumber")}
            type="text"
            className={`input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm ${
              errors.licenseNumber ? "border-red-500" : ""
            }`}
            placeholder="Enter medical license number"
          />
          {errors.licenseNumber && (
            <p className="text-red-500 text-sm">
              {errors.licenseNumber.message}
            </p>
          )}
        </div>

        {/* Experience & Fee */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="space-y-3 flex-1">
            <label className="block uppercase text-xs font-bold">
              Years of Experience
            </label>
            <input
              {...register("experience", { valueAsNumber: true })}
              type="number"
              min="0"
              max="70"
              className={`input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm ${
                errors.experience ? "border-red-500" : ""
              }`}
              placeholder="e.g. 5"
            />
            {errors.experience && (
              <p className="text-red-500 text-sm">
                {errors.experience.message}
              </p>
            )}
          </div>

          <div className="space-y-3 flex-1">
            <label className="block uppercase text-xs font-bold">
              Consultation Fee
            </label>
            <input
              {...register("consultationFee", { valueAsNumber: true })}
              type="number"
              min="0"
              className={`input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm ${
                errors.consultationFee ? "border-red-500" : ""
              }`}
              placeholder="e.g. 1000"
            />
            {errors.consultationFee && (
              <p className="text-red-500 text-sm">
                {errors.consultationFee.message}
              </p>
            )}
          </div>
        </div>

        {/* Clinic Name */}
        <div className="space-y-3">
          <label className="block uppercase text-xs font-bold">
            Clinic / Hospital Name
          </label>
          <input
            {...register("clinicName")}
            type="text"
            className={`input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm ${
              errors.clinicName ? "border-red-500" : ""
            }`}
            placeholder="Enter clinic or hospital name"
          />
          {errors.clinicName && (
            <p className="text-red-500 text-sm">{errors.clinicName.message}</p>
          )}
        </div>

        {/* City */}
        <div className="space-y-3">
          <label className="block uppercase text-xs font-bold">City</label>
          <input
            {...register("city")}
            type="text"
            className={`input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm ${
              errors.city ? "border-red-500" : ""
            }`}
            placeholder="e.g. Dhaka"
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        {/* License Document Upload */}
        <div className="space-y-3">
          <label className="block uppercase text-xs font-bold">
            Upload Medical License / Certificate
          </label>
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileChange}
            className={`file-input w-full focus:border-primary outline-0 focus:shadow-sm ${
              errors.licenseDocumentUrl ? "border-red-500" : ""
            }`}
          />
          {filePreview && (
            <div className="mt-3">
              <p className="text-xs text-base-content/60 mb-2">Preview:</p>
              <div className="relative w-32 h-32">
                <Image
                  src={filePreview}
                  alt="License preview"
                  fill
                  className="object-cover rounded border"
                />
              </div>
            </div>
          )}
          <p className="text-xs text-base-content/50">
            Upload a clear image of your medical license or certificate.
          </p>
          {errors.licenseDocumentUrl && (
            <p className="text-red-500 text-sm">
              {errors.licenseDocumentUrl.message}
            </p>
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
            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer checked:text-primary"
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

      {/* Submit Button */}
      <div className="space-y-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary flex items-center justify-center space-x-2 hover:bg-primary/80 active:scale-[0.99] text-white font-medium text-sm py-3 px-4 rounded-xl shadow-xs transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>
            {isSubmitting
              ? "Creating Doctor Account..."
              : "Create Doctor Account"}
          </span>
          {!isSubmitting && <MoveRight />}
        </button>

        <button
          type="button"
          className="w-full text-base-content bg-accent/20 flex items-center justify-center gap-2 p-3 rounded-lg hover:bg-accent/30 transition-colors"
        >
          <ShieldCheck size={18} className="text-accent" />
          <span className="text-xs">
            Your account will be reviewed and approved within 24-48 hours
          </span>
        </button>
      </div>
    </form>
  );
}
