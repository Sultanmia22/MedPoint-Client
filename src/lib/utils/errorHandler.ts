interface AxiosError<T = unknown> {
  isAxiosError: boolean;
  response?: {
    data: T;
    status: number;
  };
  message: string;
}

interface ApiErrorResponse {
  message: string;
  error?: string;
  statusCode?: number;
}

export const handleApiError = (error: unknown): string => {
  if (error && typeof error === "object" && "isAxiosError" in error) {
    const axiosError = error as AxiosError<ApiErrorResponse>;
    return axiosError.response?.data?.message || "Something went wrong";
  } else if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred";
};