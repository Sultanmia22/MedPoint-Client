"use client";

import React from "react";

interface GenderFilterProps {
  selected: "male" | "female" | "any";
  onChange: (value: "male" | "female" | "any") => void;
}

const GENDERS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "any", label: "Any" },
] as const;

const GenderFilter = ({ selected, onChange }: GenderFilterProps) => {
  return (
    <div>
      <p className="text-sm font-bold text-base-content">Gender</p>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {GENDERS.map((gender) => (
          <button
            key={gender.value}
            type="button"
            onClick={() => onChange(gender.value)}
            className={`py-2 rounded-lg text-xs font-bold transition-colors duration-150 ${
              selected === gender.value
                ? "bg-primary text-primary-content"
                : "bg-base-300/40 text-base-content/70 hover:bg-base-300/60"
            }`}
          >
            {gender.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenderFilter;