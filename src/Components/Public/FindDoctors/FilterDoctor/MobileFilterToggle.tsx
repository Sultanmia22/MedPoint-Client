"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const MobileFilterToggle = ({ children }: { children: React.ReactNode }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-30 col-span-full bg-base-100 py-2 lg:hidden">
        <button
          type="button"
          aria-expanded={isFilterOpen}
          aria-controls="doctor-filters"
          onClick={() => setIsFilterOpen((isOpen) => !isOpen)}
          className="mb-4 flex w-full items-center justify-between rounded-lg border border-base-300 bg-base-100 px-4 py-3 text-sm font-semibold text-base-content"
        >
          {isFilterOpen ? "Hide filters" : "Show filters"}
          <ChevronDown
            size={18}
            className={`text-primary transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <aside
        id="doctor-filters"
        className={`${isFilterOpen ? "block" : "hidden"} lg:col-span-3 lg:block lg:sticky lg:top-24 lg:self-start`}
      >
        {children}
      </aside>
    </>
  );
};

export default MobileFilterToggle;
