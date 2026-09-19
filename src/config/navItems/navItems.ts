// config/navItems.ts
import type { UserRole } from "@/lib/types/User.Interface";
import {
  Home,
  Info,
  HelpCircle,
  Mail,
  Stethoscope,
  Layers,
  Calendar,
  LayoutDashboard,
  UserCog,
  Users,
  CalendarCheck,
  BarChart3,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};


// ========== COMMON NAV ITEMS (সব জায়গায় থাকবে) ==========
export const commonNavItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: Info },
  { label: "How It Works", href: "/how-it-works", icon: HelpCircle },
  { label: "Contact", href: "/contact", icon: Mail },
];

// ========== PUBLIC NAV ITEMS (Login এর আগে) ==========
export const publicNavItems: NavItem[] = [
  { label: "Find Doctors", href: "/doctors", icon: Stethoscope },
  { label: "Specialties", href: "/specialties", icon: Layers },
];

// ========== PATIENT NAV ITEMS ==========
export const patientNavItems: NavItem[] = [
  { label: "Find Doctors", href: "/doctors", icon: Stethoscope },
  { label: "My Appointments", href: "/patient/appointments", icon: Calendar },
];

// ========== DOCTOR NAV ITEMS ==========
export const doctorNavItems: NavItem[] = [];

// ========== ADMIN NAV ITEMS ==========
export const adminNavItems: NavItem[] = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Doctors", href: "/admin/doctors", icon: UserCog },
  { label: "Patients", href: "/admin/patients", icon: Users },
  { label: "Appointments", href: "/admin/appointments", icon: CalendarCheck },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
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