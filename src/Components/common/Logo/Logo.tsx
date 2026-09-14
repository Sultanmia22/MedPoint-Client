import { Hospital } from "lucide-react";

import React from "react";

const Logo = () => {
  return (
    <div>
      {/* Logo Image */}
      <div className="flex items-center gap-1 sm:gap-2 md:gap-3 py-2">
        <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-primary-hover rounded-sm shrink-0">
          <Hospital className="text-gray-100 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-sm sm:text-base md:text-lg leading-tight">
            <span className="text-heading">Med</span>
            <span className="text-primary">Point</span>
          </p>
          <p className="text-xs text-gray-500">CARE ACCESS</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
