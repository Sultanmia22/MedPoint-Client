
// config/dashboardMenus.ts

export type DashboardMenuItem = {
  label: string;
  href: string;
};

export type UserRole = "patient" | "doctor" | "admin" | null;

// ========== PATIENT DASHBOARD MENU ==========
export const patientDashboardMenu: DashboardMenuItem[] = [
  { label: "Dashboard", href: "/patient/dashboard" },
  { label: "My Appointments", href: "/patient/appointments" },
  { label: "Book Appointment", href: "/patient/book-appointment" },
  { label: "Appointment History", href: "/patient/appointment-history" },
  { label: "My Reviews", href: "/patient/reviews" },
];

// ========== DOCTOR DASHBOARD MENU ==========
export const doctorDashboardMenu: DashboardMenuItem[] = [
  { label: "Dashboard", href: "/doctor/dashboard" },
  { label: "My Appointments", href: "/doctor/appointments" },
  { label: "Today's Schedule", href: "/doctor/today-schedule" },
  { label: "My Patients", href: "/doctor/patients" },
  { label: "Availability", href: "/doctor/availability" },
  { label: "Earnings", href: "/doctor/earnings" },
];

// ========== ADMIN DASHBOARD MENU ==========
export const adminDashboardMenu: DashboardMenuItem[] = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Doctor Approvals", href: "/admin/doctor-approvals" },
  { label: "Doctors", href: "/admin/doctors" },
  { label: "Patients", href: "/admin/patients" },
  { label: "Appointments", href: "/admin/appointments" },
  { label: "Specialties", href: "/admin/specialties" },
  { label: "Analytics", href: "/admin/analytics" },
  { label: "User Management", href: "/admin/users" },
  { label: "System Settings", href: "/admin/settings" },
];

// ========== PUBLIC DASHBOARD MENU (None) ==========
export const publicDashboardMenu: DashboardMenuItem[] = [];

// ========== HELPER FUNCTION ==========

/**
 * Role অনুযায়ী Dashboard Menu ফেরত দেয়
 */
export const getDashboardMenuByRole = (role: UserRole): DashboardMenuItem[] => {
  switch (role) {
    case "patient":
      return patientDashboardMenu;
    case "doctor":
      return doctorDashboardMenu;
    case "admin":
      return adminDashboardMenu;
    default:
      return publicDashboardMenu;
  }
};

/**
 * Dashboard menu আছে কিনা check করে
 */
export const hasDashboardMenu = (role: UserRole): boolean => {
  return getDashboardMenuByRole(role).length > 0;
};