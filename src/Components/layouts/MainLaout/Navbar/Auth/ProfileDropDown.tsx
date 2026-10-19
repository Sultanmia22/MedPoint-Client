"use client";

import React from "react";
import {
  User,
  Calendar,
  Clock,
  Star,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  label: string;
  link: string,
  icon: React.ReactNode;
  danger?: boolean;
}

const menuItems: MenuItem[] = [
  { label: "My Profile", icon: <User size={18} />, link: "my-profile" },
  { label: "My Appointments", icon: <Calendar size={18} />, link: "my-appointment" },
  { label: "Appointment History", icon: <Clock size={18} />, link: "appointment-history" },
  { label: "My Reviews", icon: <Star size={18} />, link: "my-review" },
  { label: "Settings", icon: <Settings size={18} />, link: "settings" },
];

const ProfileDropDown: React.FC = () => {
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
  {menuItems.map((item) => (
    <Link
      key={item.label}
      href={item.link}
      className={`
        w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium
        transition-colors duration-150 rounded-md hover:bg-base-200 hover:text-primary 
      `}
    >
      {item.icon}
      {item.label}
    </Link>
  ))}
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