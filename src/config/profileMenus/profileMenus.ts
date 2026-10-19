// config/profileMenus.ts
import {
  User,
  Calendar,
  Clock,
  Star,
  Settings,
  Stethoscope,
  GraduationCap,
  Server,
  FileText,
  LogIn,
  UserPlus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProfileMenuItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type UserRole = "patient" | "doctor" | "admin" | null;

// ========== PATIENT PROFILE MENU ==========
export const patientProfileMenu: ProfileMenuItem[] = [
  { label: "My Profile", href: "/patient/profile", icon: User },
  { label: "My Appointments", href: "/patient/appointments", icon: Calendar },
  { label: "Appointment History", href: "/patient/appointment-history", icon: Clock },
  { label: "My Reviews", href: "/patient/reviews", icon: Star },
  { label: "Settings", href: "/patient/settings", icon: Settings },
];

// ========== DOCTOR PROFILE MENU ==========
export const doctorProfileMenu: ProfileMenuItem[] = [
  { label: "My Profile", href: "/doctor/profile", icon: User },
  { label: "Professional Details", href: "/doctor/profile/details", icon: Stethoscope },
  { label: "Qualifications", href: "/doctor/profile/qualifications", icon: GraduationCap },
  { label: "My Reviews", href: "/doctor/reviews", icon: Star },
  { label: "Settings", href: "/doctor/settings", icon: Settings },
];

// ========== ADMIN PROFILE MENU ==========
export const adminProfileMenu: ProfileMenuItem[] = [
  { label: "My Profile", href: "/admin/profile", icon: User },
  { label: "Admin Settings", href: "/admin/settings", icon: Settings },
  { label: "System Configuration", href: "/admin/config", icon: Server },
  { label: "Audit Logs", href: "/admin/logs", icon: FileText },
];

// ========== PUBLIC PROFILE MENU (None - Login/Signup instead) ==========
export const publicProfileMenu: ProfileMenuItem[] = [];

// ========== HELPER FUNCTION ==========

/**
 * Role অনুযায়ী Profile Menu ফেরত দেয়
 */
export const getProfileMenuByRole = (role: UserRole): ProfileMenuItem[] => {
  switch (role) {
    case "patient":
      return patientProfileMenu;
    case "doctor":
      return doctorProfileMenu;
    case "admin":
      return adminProfileMenu;
    default:
      return publicProfileMenu;
  }
};

/**
 * Profile menu আছে কিনা check করে (authenticated users এর জন্য)
 */
export const hasProfileMenu = (role: UserRole): boolean => {
  return role !== null && getProfileMenuByRole(role).length > 0;
};

/**
 * Public auth menu (Login/Signup)
 */
export const getPublicAuthMenu = (): ProfileMenuItem[] => [
  { label: "Login", href: "/sign-in", icon: LogIn },
  { label: "Sign Up", href: "/sign-up", icon: UserPlus },
];