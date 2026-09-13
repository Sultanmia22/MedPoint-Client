// config/profileMenus.ts

export type ProfileMenuItem = {
  label: string;
  href: string;
};

export type UserRole = "patient" | "doctor" | "admin" | null;

// ========== PATIENT PROFILE MENU ==========
export const patientProfileMenu: ProfileMenuItem[] = [
  { label: "My Profile", href: "/patient/profile" },
  { label: "My Appointments", href: "/patient/appointments" },
  { label: "Appointment History", href: "/patient/appointment-history" },
  { label: "My Reviews", href: "/patient/reviews" },
  { label: "Settings", href: "/patient/settings" },
  { label: "Logout", href: "/logout" },
];

// ========== DOCTOR PROFILE MENU ==========
export const doctorProfileMenu: ProfileMenuItem[] = [
  { label: "My Profile", href: "/doctor/profile" },
  { label: "Professional Details", href: "/doctor/profile/details" },
  { label: "Qualifications", href: "/doctor/profile/qualifications" },
  { label: "My Reviews", href: "/doctor/reviews" },
  { label: "Settings", href: "/doctor/settings" },
  { label: "Logout", href: "/logout" },
];

// ========== ADMIN PROFILE MENU ==========
export const adminProfileMenu: ProfileMenuItem[] = [
  { label: "My Profile", href: "/admin/profile" },
  { label: "Admin Settings", href: "/admin/settings" },
  { label: "System Configuration", href: "/admin/config" },
  { label: "Audit Logs", href: "/admin/logs" },
  { label: "Logout", href: "/logout" },
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
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/register" },
];