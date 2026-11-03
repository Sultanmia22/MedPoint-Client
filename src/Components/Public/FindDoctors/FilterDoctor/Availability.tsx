"use client";

import React from "react";

interface AvailabilityProps {
  selected: string;
  onChange: (value: string) => void;
}

const AVAILABILITY = [
  { value: "any", label: "Any" },
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" },
  { value: "this_week", label: "This Week" },
];

const Availability = ({ selected, onChange }: AvailabilityProps) => {
  return (
    <div>
      <p className="text-sm font-bold text-base-content">Availability</p>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {AVAILABILITY.map((slot) => (
          <button
            key={slot.value}
            type="button"
            onClick={() =>
              onChange(selected === slot.value ? "any" : slot.value)
            }
            className={`py-2 rounded-lg text-xs font-bold transition-colors duration-150 ${
              selected === slot.value
                ? "bg-primary text-primary-content"
                : "bg-base-300/40 text-base-content/70 hover:bg-base-300/60"
            }`}
          >
            {slot.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Availability;