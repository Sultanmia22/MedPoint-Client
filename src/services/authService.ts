import type { DoctorRegisterFormData, PatientRegisterFormData } from "@/schemas/authSchemas/signupSchema";
import axios from "axios";

// Registration Api Call 
export const registerUser = async (data:PatientRegisterFormData | DoctorRegisterFormData ) => {

    const {confirmPassword, agreeToTerms,...formData} = data

    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,formData)

    return response.data;

}