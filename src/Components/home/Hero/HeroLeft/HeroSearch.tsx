"use client";

import { Search } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import React from "react";

const HeroSearch = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-4 p-3 md:p-2 gap-2 items-center
      rounded-2xl border border-base-content/10 bg-base-100/90 shadow-lg shadow-secondary/5
      dark:shadow-black/40"
    >
      {/* Search Input */}
      <div className="md:col-span-3">
        <div
          className="flex items-center gap-3
        w-full
        bg-base-200
        rounded-xl
        px-4 py-3
        transition-colors duration-150
        focus-within:bg-base-300"
        >
          <Search size={20} className="text-base-content/50 shrink-0" />
          <input
            className="w-full
          bg-transparent
          text-base-content
          placeholder:text-base-content/50
          outline-none
          text-sm md:text-base"
            placeholder="Search by doctor, specialty, or location"
            type="text"
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="md:col-span-1 w-full">
        <motion.button
          type="button"
          whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          className="btn btn-primary w-full"
        >
          Search
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroSearch;
