"use client";

import { Star } from "lucide-react";
import React from "react";

interface RatingFilterProps {
  minRating: number | null;
  onChange: (value: number | null) => void;
}

const RATING_OPTIONS = [4, 3];

const RatingFilter = ({ minRating, onChange }: RatingFilterProps) => {
  const handleSelect = (stars: number) => {
    onChange(minRating === stars ? null : stars);
  };

  return (
    <div>
      <p className="text-sm font-bold text-base-content">Rating</p>
      <div className="flex flex-col gap-2.5 mt-2.5">
        {RATING_OPTIONS.map((stars) => (
          <label key={stars} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={minRating === stars}
              onChange={() => handleSelect(stars)}
              className="checkbox checkbox-primary checkbox-sm"
            />
            <span className="flex items-center gap-1">
              {Array.from({ length: stars }).map((_, index) => (
                <Star key={index} size={14} className="text-warning" fill="currentColor" />
              ))}
              <span className="text-sm text-base-content/70 ml-1">& up</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;