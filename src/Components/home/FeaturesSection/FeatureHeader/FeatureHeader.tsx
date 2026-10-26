"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";
const FeatureHeader = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div>
      <motion.div
        className="Process-Header-Container flex flex-col justify-center items-center gap-3"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div>
          <span className=" inline-flex items-center gap-2 bg-secondary/10 dark:bg-secondary/15 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ">
            <span className="w-2 h-2 bg-primary rounded-full"></span> OUR ADVANTAGES
          </span>
        </div>

        <div>
          <h1>Why Choose MedPoint</h1>
        </div>

        <div>
          <p className="text-base leading-7 text-base-content/70 sm:text-lg text-center">
            We make healthcare simple, predictable, and reliably accessible for everyone.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureHeader;
