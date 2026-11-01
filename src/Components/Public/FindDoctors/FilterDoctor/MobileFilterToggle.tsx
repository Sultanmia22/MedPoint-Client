"use client";

import React, { useEffect, useState } from "react";
import { Funnel, X } from "lucide-react";

const MobileFilterToggle = ({ children }: { children: React.ReactNode }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const isMobilePanelHidden = !isFilterOpen && !isLargeScreen;

  useEffect(() => {
    const largeScreenQuery = window.matchMedia("(min-width: 64rem)");
    const updateScreenSize = () => setIsLargeScreen(largeScreenQuery.matches);

    updateScreenSize();
    largeScreenQuery.addEventListener("change", updateScreenSize);
    return () => largeScreenQuery.removeEventListener("change", updateScreenSize);
  }, []);

  useEffect(() => {
    if (!isFilterOpen || isLargeScreen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsFilterOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFilterOpen, isLargeScreen]);

  return (
    <>
      <div className="sticky top-0 z-30 col-span-full bg-base-100 py-2 lg:hidden">
        <button
          type="button"
          aria-expanded={isFilterOpen}
          aria-controls="doctor-filters"
          onClick={() => setIsFilterOpen((isOpen) => !isOpen)}
          className="mb-4 flex w-full items-center justify-between rounded-lg border border-base-300 bg-base-100 px-4 py-3 text-sm font-semibold text-base-content"
        >
          {isFilterOpen ? "Hide filters" : "Show filters"}
          {isFilterOpen ? (
            <X size={18} className="text-primary" />
          ) : (
            <Funnel size={18} className="text-primary" />
          )}
        </button>
      </div>

      <div
        aria-hidden={!isFilterOpen}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isFilterOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close filters"
          tabIndex={isFilterOpen ? 0 : -1}
          onClick={() => setIsFilterOpen(false)}
          className="h-full w-full cursor-default"
        />
      </div>

      <aside
        id="doctor-filters"
        aria-hidden={isMobilePanelHidden}
        inert={isMobilePanelHidden}
        className={`fixed inset-y-0 left-0 z-50 h-dvh w-[min(88vw,24rem)] overflow-y-auto bg-base-100 p-4 shadow-xl transition-transform duration-300 ease-in-out lg:static lg:col-span-3 lg:h-auto lg:w-auto lg:overflow-visible lg:bg-transparent lg:p-0 lg:shadow-none lg:translate-x-0 lg:sticky lg:top-24 lg:self-start ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {children}
      </aside>
    </>
  );
};

export default MobileFilterToggle;
