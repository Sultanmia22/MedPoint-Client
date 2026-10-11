export interface LoginResponse {
  success: boolean;
  data: {
    accessToken: string;
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
  };
}

export interface RegisterResponse {
    userId: string
}

export interface IRegisterFormData {
    
}