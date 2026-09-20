"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, User } from "lucide-react";
import { getNavItemsByRole} from "@/config/navItems/navItems";
import type { UserRole } from "@/lib/types/User.Interface";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  role?: UserRole;
  onLogout?: () => void;
}

const MobileDrawer = ({ open, onClose, role = null, onLogout }: MobileDrawerProps) => {
  const navItems = getNavItemsByRole(role);

  // role না থাকা মানেই login করা নেই — এখন isLoggedIn আলাদা state না রেখে role থেকেই বের করা হচ্ছে
  const isLoggedIn = role !== null;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`absolute left-0 top-0 h-full w-72 bg-base-100 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* Header */}
        <div className="relative border-b border-base-300 px-4 py-4 min-h-15">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-lg border border-base-300 text-base-content hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {isLoggedIn && (
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full border-2 border-primary overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src="/images/userProfile.jpg"
                  alt="User Profile"
                  width={64}
                  height={64}
                />
              </div>

              <div>
                <p className="text-base-content text-xl font-semibold">MD Sultan Mia</p>
                <p className="text-sm text-base-content/60">sultanmia5322@gmai.com</p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-base-content transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="space-y-3 border-t border-base-300 px-4 py-4">
          {isLoggedIn ? (
            <button
              type="button"
              onClick={onLogout}
              className="w-full rounded-md border border-primary py-2 text-center text-sm font-medium text-primary transition-colors hover:bg-primary/5"
            >
              Logout
            </button>
          ) : (
            <>
              <div className="flex items-center gap-3 rounded-lg bg-primary/5 px-3 py-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-base-content">Guest User</span>
              </div>

              <div className="flex gap-2">
                <Link
                  href="/Login"
                  onClick={onClose}
                  className="flex-1 rounded-md bg-primary py-2 text-center text-sm font-medium text-primary-content transition-colors hover:bg-primary/90"
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;