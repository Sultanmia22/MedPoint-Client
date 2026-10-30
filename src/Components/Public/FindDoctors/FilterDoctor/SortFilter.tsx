"use client";

import React, { useState } from "react";

/* ===== Sort option গুলো ===== */
const SORT_OPTIONS = [
  { id: 1, name: "Relevance", value: "relevance" },
  { id: 2, name: "Rating: High to Low", value: "rating_desc" },
  { id: 3, name: "Fee: Low to High", value: "fee_asc" },
  { id: 4, name: "Experience", value: "experience_desc" },
];

const SortFilter = () => {

  const [sortBy, setSortBy] = useState("Relevance");

  return (
    <div>
      <p className="text-sm font-bold text-base-content">Sort By</p>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full bg-base-300/40 border border-base-300 dark:border-base-content/10 rounded-lg px-3 py-2.5 text-sm text-base-content outline-none cursor-pointer mt-2 transition-colors duration-150 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/30"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortFilter;