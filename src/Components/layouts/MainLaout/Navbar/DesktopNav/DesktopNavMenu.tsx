"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { UserRole } from "@/lib/types/User.Interface";
import { getNavItemsByRole } from "@/config/navItems/navItems";
// import { getNavItemsByRole, UserRole } from "@/config/navItems";

interface DesktopMenuProps {
  role?: UserRole;
}

const DesktopNavMenu = ({ role = null }: DesktopMenuProps) => {
  const navItems = getNavItemsByRole(role);
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map(({ label, href, icon: Icon }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              isActive ? "text-primary" : "text-base-content hover:text-primary"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default DesktopNavMenu;
