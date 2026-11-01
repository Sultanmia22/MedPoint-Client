"use client";

import React from "react";

interface ExperienceProps {
  selected: string[];
  onChange: (value: string[]) => void;
}

const EXPERIENCE_OPTIONS = ["0-5 years", "5-10 years", "10-15 years", "15+ years"];

const Experience = ({ selected, onChange }: ExperienceProps) => {
  const toggle = (name: string) => {
    onChange(
      selected.includes(name)
        ? selected.filter((s) => s !== name)
        : [...selected, name]
    );
  };

  return (
    <div>
      <p className="text-sm font-bold text-base-content">Experience</p>
      <div className="flex flex-col gap-2.5 mt-2.5">
        {EXPERIENCE_OPTIONS.map((years) => (
          <label key={years} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selected.includes(years)}
              onChange={() => toggle(years)}
              className="checkbox checkbox-primary checkbox-sm"
            />
            <span className="text-sm text-base-content/70">{years}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Experience;