import { type DefaultSession, type DefaultUser } from "next-auth";

type AuthError = "RefreshAccessTokenError";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
    role: string;
  }

  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      role: string;
    };
    accessToken: string;
    error?: AuthError;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
    role: string;
    error?: AuthError;
  }
}