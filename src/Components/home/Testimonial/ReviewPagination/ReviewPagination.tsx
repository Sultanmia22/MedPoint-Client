"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const ReviewPagination = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {/* Showing Text */}
      <p className="text-sm text-base-content/70">
        Showing 1&ndash;3 of 12 verified patient reviews
      </p>

      <div className="flex items-center gap-4">
        {/* Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-6 h-2 rounded-full bg-primary" />
          <span className="w-2 h-2 rounded-full bg-base-content/20" />
          <span className="w-2 h-2 rounded-full bg-base-content/20" />
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous page"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-base-200 text-primary transition-colors duration-150 hover:bg-base-300"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next page"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-base-200 text-primary transition-colors duration-150 hover:bg-base-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewPagination;