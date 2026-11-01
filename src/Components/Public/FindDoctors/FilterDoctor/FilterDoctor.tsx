"use client";
import React, { useState } from "react";
import { Funnel, Search } from "lucide-react";
import { defaultFilters, type DoctorFilters } from "@/lib/types/doctors/doctors.interface";
import SpecialtyFilter from "./SpecialtyFilter";
import LocationFilter from "./LocationFilter";
import GenderFilter from "./GenderFilter";
import Availability from "./Availability";
import ConsultationFee from "./ConsultationFee";
import Experience from "./Experience";
import RatingFilter from "./RatingFilter";
import SortFilter from "./SortFilter";

interface FilterDoctorProps {
  filters?: DoctorFilters;
  onChange?: (next: DoctorFilters) => void;
  onApply?: () => void;
}

const FilterDoctor = ({ filters: externalFilters, onChange: externalOnChange, onApply }: FilterDoctorProps) => {
  const [internalFilters, setInternalFilters] = useState<DoctorFilters>(defaultFilters);

  const filters = externalFilters ?? internalFilters;
  const setFilters = (next: DoctorFilters) => {
    if (externalOnChange) {
      externalOnChange(next);
    } else {
      setInternalFilters(next);
    }
  };

  const set = <K extends keyof DoctorFilters>(key: K, value: DoctorFilters[K]) =>
    setFilters({ ...filters, [key]: value });

  const activeCount =
    (filters?.specialties?.length || 0) +
    (filters?.experience?.length || 0) +
    (filters?.minRating !== null ? 1 : 0);

  console.log("set",internalFilters)    

  return (
    <div className="bg-base-200 rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Funnel size={18} className="text-primary" />
          <h3 className="text-lg font-bold text-base-content">Filters</h3>
        </div>
        {activeCount > 0 && (
          <span className="text-xs font-bold uppercase text-primary">
            Active ({activeCount})
          </span>
        )}
      </div>

      <div className="flex flex-col gap-6 mt-6">
        {/* Search Doctor */}
        <div>
          <p className="text-sm font-bold text-base-content">Search Doctor</p>
          <div className="relative mt-2">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40"
            />
            <input
              type="text"
              value={filters.search}
              onChange={(e) => set("search", e.target.value)}
              placeholder="Doctor name"
              className="w-full bg-base-300/40 rounded-lg pl-9 pr-3 py-2.5 text-sm text-base-content outline-none transition-colors focus:bg-base-100 focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <SpecialtyFilter
          selected={filters.specialties}
          onChange={(val) => set("specialties", val)}
        />

        <LocationFilter
          selected={filters.location}
          onChange={(val) => set("location", val)}
        />

        <GenderFilter
          selected={filters.gender}
          onChange={(val) => set("gender", val)}
        />

        <Availability
          selected={filters.availability}
          onChange={(val) => set("availability", val)}
        />

        <ConsultationFee
          maxFee={filters.maxFee}
          onChange={(val) => set("maxFee", val)}
        />

        <Experience
          selected={filters.experience}
          onChange={(val) => set("experience", val)}
        />

        <RatingFilter
          minRating={filters.minRating}
          onChange={(val) => set("minRating", val)}
        />

        <SortFilter
          sortBy={filters.sortBy}
          onChange={(val) => set("sortBy", val)}
        />

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-2">
          <button
            type="button"
            onClick={onApply}
            className="w-full py-3 rounded-lg bg-primary text-primary-content text-sm font-bold transition-colors duration-150 hover:bg-primary/90"
          >
            Apply Filters
          </button>
          <button
            type="button"
            onClick={() => setFilters(defaultFilters)}
            className="w-full py-3 rounded-lg bg-base-300/40 text-base-content text-sm font-bold transition-colors duration-150 hover:bg-base-300/60"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterDoctor;