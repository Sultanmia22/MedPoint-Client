export type NavItem = {
  label: string;
  href: string;
};
export const patientProfileItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/patient/dashboard",
  },
  {
    label: "My Profile",
    href: "/patient/profile",
  },
  {
    label: "Appointment History",
    href: "/patient/appointment-history",
  },
  {
    label: "Settings",
    href: "/patient/settings",
  },
];

export const doctorProfileItems: NavItem[] = [
  {
    label: "My Profile",
    href: "/doctor/profile",
  },
  {
    label: "Settings",
    href: "/doctor/settings",
  },
];

export const adminProfileItems: NavItem[] = [
  {
    label: "Admin Settings",
    href: "/admin/settings",
  },
];