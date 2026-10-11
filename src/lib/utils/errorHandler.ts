import { AxiosError } from 'axios';

interface ApiErrorResponse {
  message: string;
  error?: string;
  statusCode?: number;
}

export const handleApiError = (error: unknown): string => {

  if (error instanceof AxiosError) {
    const apiError = error.response?.data as ApiErrorResponse | undefined;
    
    return apiError?.message || "Something went wrong";
  } else if (error instanceof Error) {
    return error.message;
  }
  
  return "An unexpected error occurred";
};