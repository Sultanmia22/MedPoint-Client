import React from "react";
import { Funnel, Search, Star } from "lucide-react";
import SpecialtyFilter from "./SpecialtyFilter";
import ExperienceFilter from "./Experience";
import LocationFilter from "./LocationFilter";
import GenderFilter from "./GenderFilter";
import Availability from "./Availability";
import ConsultationFee from "./ConsultationFee";
import RatingFilter from "./RatingFilter";
import SortFilter from "./SortFilter";

const FilterSection = () => {
  return (
    <div className="bg-base-100 border border-base-300 shadow-sm rounded-2xl p-6 flex flex-col gap-6 max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain custom-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Funnel size={18} className="text-primary" />
          <h3 className="text-lg">Filters</h3>
        </div>
        <span className="text-xs font-bold uppercase text-primary">Active (3)</span>
      </div>

      {/* Search Doctor */}
      <div>
        <p className="text-sm font-bold text-base-content">Search Doctor</p>
        <div className="relative mt-2">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40" />
          <input
            type="text"
            placeholder="Doctor name"
            className="w-full bg-base-300/40 rounded-lg pl-9 pr-3 py-2.5 text-sm text-base-content outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Specialty */}
      <SpecialtyFilter />

      {/* Location */}
      <LocationFilter />
      
      {/* Gender */}
     <GenderFilter />

      {/* Availability */}
      <Availability />

      {/* Consultation Fee */}
      <ConsultationFee />

      {/* Experience */}
      <ExperienceFilter />

      {/* Rating */}
      <RatingFilter />

      {/* Sort By */}
      <SortFilter />

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 pt-2">
        <button type="button" className="w-full py-3 rounded-lg bg-primary text-primary-content text-sm font-bold hover:bg-primary/90 transition-colors">
          Apply Filters
        </button>
        <button type="button" className="w-full py-3 rounded-lg bg-base-300/40 text-base-content text-sm font-bold hover:bg-base-300/60 transition-colors">
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;