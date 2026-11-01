"use client"
import React, { useState } from "react";
import { Funnel, Search } from "lucide-react";
import SpecialtyFilter from "./SpecialtyFilter";
import ExperienceFilter from "./Experience";
import LocationFilter from "./LocationFilter";
import GenderFilter from "./GenderFilter";
import Availability from "./Availability";
import ConsultationFee from "./ConsultationFee";
import RatingFilter from "./RatingFilter";
import SortFilter from "./SortFilter";
import type { IDoctorFilters } from "@/lib/types/doctors/doctors.interface";


const defaultFilters: IDoctorFilters = {
  search: "",
  specialties: [],
  location: "all",
  gender: "any",
  availability: "today",
  maxFee: 3500,
  experience:  [],
  minRating: null,
  sortBy: "relevance",
};

const FilterDoctor = () => {
  const [filters, setFilters] = useState<IDoctorFilters>(defaultFilters)

  const updateFilter = <K extends keyof IDoctorFilters>(key: K, value: IDoctorFilters[K]) => {
    setFilters((prev) => ({...prev, [key]: value}))
  }

  const activeCount =
    (filters.search ? 1 : 0) +
    (filters.specialties?.length ?? 0) +
    (filters.location !== defaultFilters.location ? 1 : 0) +
    (filters.gender !== defaultFilters.gender ? 1 : 0) +
    (filters.availability !== defaultFilters.availability ? 1 : 0) +
    (filters.maxFee !== defaultFilters.maxFee ? 1 : 0) +
    (filters.experience?.length ?? 0) +
    (filters.minRating !== null ? 1 : 0)

    console.log("filters", filters)

  return (
    <div className="bg-base-100 border border-base-300 shadow-sm rounded-2xl p-6 flex flex-col gap-6 lg:max-h-[calc(100dvh-6rem)] lg:overflow-y-auto lg:overscroll-contain lg:custom-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Funnel size={18} className="text-primary" />
          <h3 className="text-lg">Filters</h3>
        </div>
        {activeCount > 0 && (
          <span className="text-xs font-bold uppercase text-primary">
            Active ({activeCount})
          </span>
        )}
      </div>

      {/* Search Doctor */}
      <div>
        <p className="text-sm font-bold text-base-content">Search Doctor</p>
        <div className="relative mt-2">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) => updateFilter("search",e.target.value)}
            placeholder="Doctor name"
            className="w-full bg-base-300/40 rounded-lg pl-9 pr-3 py-2.5 text-sm text-base-content outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Specialty */}
      <SpecialtyFilter
        selected={filters.specialties ?? []}
        onChange={(value) => updateFilter("specialties", value)}
      />

      {/* Location */}
      <LocationFilter
        selected={filters.location}
        onChange={(value) => updateFilter("location", value)}
      />

      {/* Gender */}
      <GenderFilter
        selected={filters.gender}
        onChange={(value) => updateFilter("gender", value)}
      />

      {/* Availability */}
      <Availability
        selected={filters.availability}
        onChange={(value) => updateFilter("availability", value)}
      />

      {/* Consultation Fee */}
      <ConsultationFee
        maxFee={filters.maxFee}
        onChange={(value) => updateFilter("maxFee", value)}
      />

      {/* Experience */}
      <ExperienceFilter
        selected={filters.experience ?? []}
        onChange={(value) => updateFilter("experience", value)}
      />

      {/* Rating */}
      <RatingFilter
        minRating={filters.minRating}
        onChange={(value) => updateFilter("minRating", value)}
      />

      {/* Sort By */}
      <SortFilter
        sortBy={filters.sortBy}
        onChange={(value) => updateFilter("sortBy", value)}
      />

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 pt-2">
        <button type="button" className="w-full py-3 rounded-lg bg-primary text-primary-content text-sm font-bold hover:bg-primary/90 transition-colors">
          Apply Filters
        </button>
        <button
          type="button"
          onClick={() => setFilters(defaultFilters)}
          className="w-full py-3 rounded-lg bg-base-300/40 text-base-content text-sm font-bold hover:bg-base-300/60 transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterDoctor;