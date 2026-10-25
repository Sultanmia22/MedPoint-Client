"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import SpecialtyCards from "./SpecialtyCards";

const PopularSpecialties = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-12">
      <motion.div
        className="Process-Header-Container flex flex-col justify-center items-center gap-3"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div>
          <span className=" uppercase bg-primary/20 px-3 py-1 text-primary text-sm font-semibold rounded-full">
            BROWSE BY SPECIALTY
          </span>
        </div>

        <div>
          <h1>Popular Specialties</h1>
        </div>

        <div>
          <p className="text-base leading-7 text-base-content/70 sm:text-lg text-center">
            Find the right specialist for your immediate clinical and diagnostic needs.
          </p>
        </div>
      </motion.div>
      {/*SpecialtyCards Section  */}
      <div>
        <SpecialtyCards />
      </div>
    </div>
  );
};

export default PopularSpecialties;