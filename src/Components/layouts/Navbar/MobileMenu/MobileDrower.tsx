"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  X,
  Home,
  Calendar,
  Stethoscope,
  Phone,
  HelpCircle,
  User,
} from "lucide-react";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Appointments", icon: Calendar, href: "/appointments" },
  { label: "Find Doctor", icon: Stethoscope, href: "/doctors" },
  { label: "Contact", icon: Phone, href: "/contact" },
  { label: "Support", icon: HelpCircle, href: "/support" },
] as const;

const MobileDrawer = ({ open, onClose }: MobileDrawerProps) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`
          absolute right-0 top-0 h-full w-72 
          bg-white shadow-2xl
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <h2 className="text-lg font-bold text-navy">Menu</h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-2 text-text-body transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {NAV_ITEMS.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-text-body transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="space-y-3 border-t border-border px-4 py-4">
          {/* User Card */}
          <div className="flex items-center gap-3 rounded-lg bg-primary/5 px-3 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <User className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm font-medium text-text-heading">
              Guest User
            </span>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-2">
            <Link
              href="/Login"
              onClick={onClose}
              className="flex-1 rounded-md bg-primary py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Login
            </Link>

            <Link
              href="/Register"
              onClick={onClose}
              className="flex-1 rounded-md border border-primary py-2 text-center text-sm font-medium text-primary transition-colors hover:bg-primary/5"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
