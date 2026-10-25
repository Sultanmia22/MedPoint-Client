"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import Header from "./Header/Header";
import StepsCards from "./StepsCards/StepsCards";

const Process = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <div className="Process-Container flex flex-col gap-12">
        {/* Header Section */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Header />
        </motion.div>

        {/* Process Section */}
        <div>
          <StepsCards />
        </div>
      </div>
    </div>
  );
};

export default Process;