"use client";

import React, { useState } from "react";


const EXPERIENCE_OPTIONS = [
  { id: 1, name: "0-5 years" },
  { id: 2, name: "5-10 years" },
  { id: 3, name: "10-15 years" },
  { id: 4, name: "15+ years" },
];

const ExperienceFilter = () => {

  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (name: string) => {
    setSelected((current) =>
      current.includes(name) ? [] : [name]
    );
  };

  return (
    <div>
      <p className="text-sm font-bold text-base-content">Experience</p>

      <div className="flex flex-col gap-2.5 mt-2.5">
        {EXPERIENCE_OPTIONS.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected.includes(option.name)}
              onChange={() => handleToggle(option.name)}
              className="checkbox checkbox-primary checkbox-sm"
            />
            <span className="text-sm text-base-content/70">{option.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ExperienceFilter;