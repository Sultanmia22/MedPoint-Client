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

// ========== COMMON NAV ITEMS ==========
export const commonNavItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: Info },
  { label: "How It Works", href: "/how-it-works", icon: HelpCircle },
  { label: "Contact", href: "/contact", icon: Mail },
];

// ========== PUBLIC NAV ITEMS ==========
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

export const getNavItemsByRole = (role: UserRole): NavItem[] => {
  const [home, about, howItWorks, contact] = commonNavItems;

  switch (role) {
    case "patient":
      return [
        home,
        ...patientNavItems,
        about,
        howItWorks,
        contact,
      ];

    case "doctor":
      return [
        home,
        ...doctorNavItems,
        about,
        howItWorks,
        contact,
      ];

    case "admin":
      return [
        home,
        ...adminNavItems,
        about,
        howItWorks,
        contact,
      ];

    default:
      return [
        home,
        ...publicNavItems,
        about,
        howItWorks,
        contact,
      ];
  }
};

export const getCommonNavItems = (): NavItem[] => {
  return commonNavItems;
};

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