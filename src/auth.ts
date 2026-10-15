import NextAuth, { type User } from "next-auth";
import credentials from "next-auth/providers/credentials";
import axios from "axios";
import type { LoginResponse } from "./lib/types/auth/auth.interface";



export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials): Promise<User | null> => {
        if (!credentials.email || !credentials?.password) {
          return null;
        }

        try {
          const res = await axios.post<LoginResponse>(
            `${process.env.BACKEND_URL}/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            },
          );
          

          if (res.status !== 200 || !res.data.success) {
            return null;
          }

          const { accessToken, user } = res.data.data;

          console.log("User",user)

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            accessToken: accessToken,
          };
        } catch (error) {
          if (error instanceof Error) {
            console.error("Authentication error:", error.message);
          } else {
            console.error("Unknown error:", error);
          }
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
        token.id = user.id as string;
        token.accessToken = user.accessToken;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.accessToken = token.accessToken;
      return session;
    },
  },

  pages: {
    signIn: "/sign-in",
  },
});
