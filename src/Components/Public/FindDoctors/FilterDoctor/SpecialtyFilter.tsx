"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

/* ===== ডেটা উপরে ===== */
const SPECIALTIES = [
  { id: 1, name: "Cardiologist", checked: true },
  { id: 2, name: "Dermatologist", checked: false },
  { id: 3, name: "Pediatrician", checked: false },
  { id: 4, name: "Orthopedic", checked: false },
  { id: 5, name: "Gynecologist", checked: false },
  { id: 6, name: "Dentist", checked: false },
  { id: 7, name: "Neurologist", checked: false },
  { id: 8, name: "ENT Specialist", checked: false },
  { id: 9, name: "General Physician", checked: false },
  { id: 10, name: "Psychiatrist", checked: false },
  { id: 11, name: "Ophthalmologist", checked: false },
  { id: 12, name: "Urologist", checked: false },
];

const VISIBLE_COUNT = 6; 

const SpecialtyFilter = () => {
  const [showAll, setShowAll] = useState(false);

   const [selected, setSelected] = useState<string[]>(["Cardiologist"]);

   const handleToggle = (name: string) => {
    if(selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name))
    }

    else{
      setSelected([name]) 
    }
   };


  const visibleSpecialties = showAll
    ? SPECIALTIES
    : SPECIALTIES.slice(0, VISIBLE_COUNT);

  return (
    <div>
      <p className="text-sm font-bold text-base-content">Specialty</p>

      {/* ===== Checkbox List (map) ===== */}
      <div className="flex flex-col gap-2.5 mt-2.5">
        {visibleSpecialties.map((specialty) => (
          <label
            key={specialty.id}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected.includes(specialty.name)}
              onChange={() => handleToggle(specialty.name)}
              className="checkbox checkbox-primary checkbox-sm"
            />
            <span className="text-sm text-base-content/70">
              {specialty.name}
            </span>
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