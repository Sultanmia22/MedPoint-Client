export type NavItem = {
  label: string;
  href: string;
};

export const publicNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Find Doctors",
    href: "/doctors",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
];

export const patientNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Find Doctors",
    href: "/doctors",
  },
  {
    label: "My Appointments",
    href: "/patient/appointments",
  },
];

export const doctorNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "My Appointments",
    href: "/doctor/appointments",
  },
  {
    label: "Today's Schedule",
    href: "/doctor/schedule",
  },
  {
    label: "My Patients",
    href: "/doctor/patients",
  },
  {
    label: "Availability",
    href: "/doctor/availability",
  },
  {
    label: "Earnings",
    href: "/doctor/earnings",
  },
];

export const adminNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    label: "Doctors",
    href: "/admin/doctors",
  },
  {
    label: "Patients",
    href: "/admin/patients",
  },
  {
    label: "Appointments",
    href: "/admin/appointments",
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
  },
];