import type { DoctorRegisterFormData, PatientRegisterFormData } from "@/schemas/authSchemas/signupSchema";
import axios from "axios";

interface RegisterResponse {
  success: boolean;
  message: string;
  data: { userId: string };
}

// Registration Api Call 
export const registerUser = async (data: PatientRegisterFormData | DoctorRegisterFormData): Promise<RegisterResponse> => {
  const { confirmPassword, agreeToTerms, ...formData } = data;

  const response = await axios.post<RegisterResponse>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
    formData,
  );

  return response.data;
};