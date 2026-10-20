"use client";

import React from "react";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  getProfileMenuByRole,
  type UserRole,
} from "@/config/profileMenus/profileMenus";

const ProfileDropDown: React.FC = () => {
  const { data: session } = useSession();
  const role = session?.user.role;
  const userRole: UserRole =
    role === "patient" || role === "doctor" || role === "admin" ? role : null;
  const profileMenu = getProfileMenuByRole(userRole);

  return (
    <div className="w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Profile Header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100">
        <Image
          src="https://i.ibb.co.com/KzS70M8H/My-Professional-iamge-1.png"
          alt="Sarah Mitchell"
          className="w-10 h-10 rounded-full object-cover"
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-800">
            Sarah Mitchell
          </span>
          <span className="text-xs text-gray-400">
            sarah.mitchell@example.com
          </span>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="py-2">
        {profileMenu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-base-200 hover:text-primary"
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Logout */}
      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors duration-150">
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
};

export default ProfileDropDown;