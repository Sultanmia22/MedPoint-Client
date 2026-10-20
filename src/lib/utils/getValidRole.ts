import type { UserRole } from "@/lib/types/User.Interface";

export const getValidRole = (role: unknown): UserRole => {
  if (role === "patient" || role === "doctor" || role === "admin") {
    return role;
  }

  return null;
};