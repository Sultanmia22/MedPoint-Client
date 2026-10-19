import NextAuth, { type User } from "next-auth";
import credentials from "next-auth/providers/credentials";
import axios from "axios";
import type { LoginResponse } from "./lib/types/auth/auth.interface";

const backendUrl = process.env.BACKEND_URL?.replace(/\/$/, "");

if (!backendUrl) {
  throw new Error("BACKEND_URL is not configured");
}

const getRefreshToken = (setCookie: string[] | undefined): string => {
  const refreshCookie = setCookie?.find((cookie) =>
    cookie.startsWith("refreshToken="),
  );

  if (!refreshCookie) {
    throw new Error(
      "Backend login/refresh response did not include refreshToken",
    );
  }

  return refreshCookie.split(";")[0].slice("refreshToken=".length);
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials): Promise<User | null> => {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        try {
          const response = await axios.post<LoginResponse>(
            `${backendUrl}/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            },
          );

          if (!response.data.success) {
            return null;
          }

          const { accessToken, user } = response.data.data;
          const refreshToken = getRefreshToken(response.headers["set-cookie"]);

          return {
            id: user.id,
            displayId: user.displayId,
            name: user.name,
            email: user.email,
            role: user.role,
            accessToken,
            refreshToken,
            accessTokenExpires: Date.now() + 60 * 60 * 1000,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.displayId = user.displayId; 
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = user.accessTokenExpires;
        token.role = user.role;
      }

      if (!token.refreshToken || !token.accessTokenExpires) {
        token.error = "RefreshAccessTokenError";
        return token;
      }

      if (Date.now() < token.accessTokenExpires - 30_000) {
        return token;
      }

      try {
        const response = await axios.post<LoginResponse>(
          `${backendUrl}/auth/refresh`,
          {},
          {
            headers: {
              Cookie: `refreshToken=${token.refreshToken}`,
            },
          },
        );

        if (!response.data.success) {
          throw new Error("Backend rejected the refresh token");
        }

        token.accessToken = response.data.data.accessToken;
        token.refreshToken = getRefreshToken(response.headers["set-cookie"]);
        token.accessTokenExpires = Date.now() + 60 * 60 * 1000;
        delete token.error;

        return token;
      } catch (error) {
        console.error("Access token refresh failed:", error);
        token.error = "RefreshAccessTokenError";
        return token;
      }
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.displayId = token.displayId;
      session.user.role = token.role;
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    },
  },

  pages: {
    signIn: "/sign-in",
  },
});
