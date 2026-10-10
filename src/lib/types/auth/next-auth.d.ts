import {type DefaultUser,  type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    accessToken: string;
    role: string;
  }

  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      role: string;
    };

    accessToken: string;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id: string;
    accessToken: string;
    role: string;
  }
}
