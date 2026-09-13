"use client";
import { Link, User } from "lucide-react";
import React, { useState } from "react";

const ProfileAndAuth = () => {
  const [login, setLogin] = useState<boolean>(false);

  if (login) {
    return (
      <div className="flex items-center gap-2 md:gap-3">
        <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-primary/10 rounded-full">
          <User className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        </div>
        <span className="hidden sm:block text-sm md:text-base font-medium text-text-heading">
          User Name
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2">
      <button className="bg-primary text-white text-sm px-4 py-1.5 rounded-md hover:bg-primary-hover transition-colors">
        Login
      </button>
    </div>
  );
};

export default ProfileAndAuth;
