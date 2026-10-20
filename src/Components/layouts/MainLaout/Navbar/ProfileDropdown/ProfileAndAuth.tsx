"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import ProfileDropDown from "./ProfileDropDown";
import { motion, AnimatePresence } from "motion/react";

const ProfileAndAuth = () => {
  const { data: session, status } = useSession();

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <div>
      {status === "loading" ? (
        // Loading UI (optional)
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-base-200 rounded-full" />
          <span className="hidden sm:block text-sm md:text-base text-base-content/60">
            Loading...
          </span>
        </div>
      ) : session?.user ? (
        // Logged in UI
        <div className="relative flex items-center gap-2 md:gap-3">
          <button
            type="button"
            aria-label="Toggle profile menu"
            aria-expanded={showProfileDropdown}
            onClick={() => setShowProfileDropdown((isOpen) => !isOpen)}
            className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full"
          >
            <Image
              className="w-8 h-8 md:w-12 md:h-12 text-primary rounded-full"
              src="https://i.ibb.co.com/KzS70M8H/My-Professional-iamge-1.png"
              alt="Profile"
              width={40}
              height={40}
            />
          </button>
          <AnimatePresence>
            {showProfileDropdown && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute -right-16 top-full z-50 mt-2 origin-top-right sm:-right-18 md:-right-8 lg:-right-10"
              >
                <ProfileDropDown />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="hidden sm:block text-sm md:text-base font-medium text-base-content">
            {session.user.name ?? session.user.email ?? "User"}
          </span>
        </div>
      ) : (
        // Not logged in UI
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <Link
            href="/sign-in"
            className="bg-primary text-white text-sm px-4 py-1.5 rounded-md hover:bg-primary/90 transition-colors inline-block text-center"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileAndAuth;
