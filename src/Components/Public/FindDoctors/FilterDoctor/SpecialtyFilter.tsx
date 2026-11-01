"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

/* ===== ডেটা উপরে ===== */
const SPECIALTIES = [
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Orthopedic",
  "Gynecologist",
  "Dentist",
  "Neurologist",
  "ENT Specialist",
  "General Physician",
  "Psychiatrist",
  "Ophthalmologist",
  "Urologist",
];

interface SpecialtyFilterProps {
  selected: string[];
  onChange: (value: string[]) => void;
}

const VISIBLE_COUNT = 6;

const SpecialtyFilter = ({ selected, onChange }: SpecialtyFilterProps) => {
  const [showAll, setShowAll] = useState(false);

  const toggle = (name: string) => {
    onChange(
      selected.includes(name)
        ? selected.filter((s) => s !== name)
        : [...selected, name]
    );
  };

  const visibleSpecialties = showAll
    ? SPECIALTIES
    : SPECIALTIES.slice(0, VISIBLE_COUNT);

  return (
    <div>
      <p className="text-sm font-bold text-base-content">Specialty</p>

      {/* ===== Checkbox List (map) ===== */}
      <div className="mt-2.5 grid grid-cols-2 gap-x-3 gap-y-2.5 lg:grid-cols-1">
        {visibleSpecialties.map((specialty) => (
          <label key={specialty} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selected.includes(specialty)}
              onChange={() => toggle(specialty)}
              className="checkbox checkbox-primary checkbox-sm"
            />
            <span className="text-sm text-base-content/70">{specialty}</span>
          </label>
        ))}
      </div>

      {/* ===== View All / Show Less Button ===== */}
      <button
        type="button"
        onClick={() => setShowAll(!showAll)}
        className="flex items-center gap-1 mt-3 text-xs font-bold text-primary"
      >
        {showAll ? "Show less" : `View all ${SPECIALTIES.length}`}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${
            showAll ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default SpecialtyFilter;