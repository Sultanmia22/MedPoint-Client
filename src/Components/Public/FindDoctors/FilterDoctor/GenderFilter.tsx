"use client";

import React from "react";

interface GenderFilterProps {
  selected: "Male" | "Female" | "Any";
  onChange: (value: "Male" | "Female" | "Any") => void;
}

const GENDERS = ["Male", "Female", "Any"] as const;

const GenderFilter = ({ selected, onChange }: GenderFilterProps) => {
  return (
    <div>
      <p className="text-sm font-bold text-base-content">Gender</p>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {GENDERS.map((gender) => (
          <button
            key={gender}
            type="button"
            onClick={() => onChange(gender)}
            className={`py-2 rounded-lg text-xs font-bold transition-colors duration-150 ${
              selected === gender
                ? "bg-primary text-primary-content"
                : "bg-base-300/40 text-base-content/70 hover:bg-base-300/60"
            }`}
          >
            {gender}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenderFilter;