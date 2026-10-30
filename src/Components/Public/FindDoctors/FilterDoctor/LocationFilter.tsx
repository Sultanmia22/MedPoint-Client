"use client";

import { ChevronDown, Check } from "lucide-react";
import React, { useState } from "react";

/* ===== বাংলাদেশের বিভাগসমূহ ===== */
const DIVISIONS = [
  { id: 1, name: "All Divisions" },
  { id: 2, name: "Dhaka" },
  { id: 3, name: "Chattogram" },
  { id: 4, name: "Rajshahi" },
  { id: 5, name: "Khulna" },
  { id: 6, name: "Barishal" },
  { id: 7, name: "Sylhet" },
  { id: 8, name: "Rangpur" },
  { id: 9, name: "Mymensingh" },
];

const LocationFilter = () => {
  const [selectedDivision, setSelectedDivision] = useState("All Divisions");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (name: string) => {
    setSelectedDivision(name);
    setIsOpen(false);
  };

  return (
    <div>
      <p className="text-sm font-bold text-base-content">Location</p>

      <div className="relative mt-2">
        {/* ===== Trigger Button ===== */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-base-300/40 border border-base-300 dark:border-base-content/10 rounded-lg px-3 py-2.5 text-sm text-base-content cursor-pointer transition-colors duration-150 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/30"
        >
          {selectedDivision}
          <ChevronDown
            size={16}
            className={`text-primary transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* ===== Dropdown List (fully styleable) ===== */}
        {isOpen && (
          <ul
            className={`absolute z-20 left-0 right-0 mt-2 
    max-h-60 overflow-y-auto 
    bg-base-100 border border-base-300 dark:border-base-content/10 
    rounded-lg shadow-lg py-1 
    transition-all duration-200 origin-top ${
      isOpen
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none"
    }`}
          >
            {DIVISIONS.map((division) => (
              <li key={division.id}>
                <button
                  type="button"
                  onClick={() => handleSelect(division.name)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-sm text-left transition-colors duration-100 ${
                    selectedDivision === division.name
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                  }`}
                >
                  {division.name}
                  {selectedDivision === division.name && (
                    <Check size={14} className="text-primary" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LocationFilter;
