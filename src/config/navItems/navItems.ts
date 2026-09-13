// config/navItems.ts

export type NavItem = {
  label: string;
  href: string;
};

export type UserRole = "patient" | "doctor" | "admin" | null;

// ========== COMMON NAV ITEMS (সব জায়গায় থাকবে) ==========
export const commonNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

// ========== PUBLIC NAV ITEMS (Login এর আগে) ==========
export const publicNavItems: NavItem[] = [
  { label: "Find Doctors", href: "/doctors" },
  { label: "Specialties", href: "/specialties" },
];

// ========== PATIENT NAV ITEMS ==========
export const patientNavItems: NavItem[] = [
  { label: "Find Doctors", href: "/doctors" },
  { label: "My Appointments", href: "/patient/appointments" },
];

// ========== DOCTOR NAV ITEMS ==========
export const doctorNavItems: NavItem[] = [];

// ========== ADMIN NAV ITEMS ==========
export const adminNavItems: NavItem[] = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Doctors", href: "/admin/doctors" },
  { label: "Patients", href: "/admin/patients" },
  { label: "Appointments", href: "/admin/appointments" },
  { label: "Analytics", href: "/admin/analytics" },
];

// ========== HELPER FUNCTION ==========

/**
 * Role অনুযায়ী Nav Items ফেরত দেয়
 */
export const getNavItemsByRole = (role: UserRole): NavItem[] => {
  switch (role) {
    case "patient":
      return [...commonNavItems, ...patientNavItems];
    case "doctor":
      return [...commonNavItems, ...doctorNavItems];
    case "admin":
      return [...commonNavItems, ...adminNavItems];
    default:
      return [...commonNavItems, ...publicNavItems];
  }
};

/**
 * শুধু common items
 */
export const getCommonNavItems = (): NavItem[] => {
  return commonNavItems;
};

/**
 * শুধু role-specific items
 */
export const getRoleSpecificNavItems = (role: UserRole): NavItem[] => {
  switch (role) {
    case "patient":
      return patientNavItems;
    case "doctor":
      return doctorNavItems;
    case "admin":
      return adminNavItems;
    default:
      return publicNavItems;
  }
};