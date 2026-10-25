"use client";

import React from "react";
import { Stethoscope, Smile, Layers, Clock } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const statsData = [
  { id: 1, icon: Stethoscope, count: "500+", label: "Expert Doctors" },
  { id: 2, icon: Smile, count: "10,000+", label: "Happy Patients" },
  { id: 3, icon: Layers, count: "50+", label: "Specialties" },
  { id: 4, icon: Clock, count: "24/7", label: "Availability" },
];

const HeroStats = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-secondary/5 dark:bg-base-200 rounded-2xl p-4 md:p-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {statsData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3"
          >
            {/* Icon Box */}
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-base-100 shadow-sm md:h-12 md:w-12"
            >
              <item.icon
                size={22}
                className="text-primary"
              />
            </motion.div>

            {/* Count + Label */}
            <div>
              <p className="text-xl md:text-2xl font-bold text-base-content">
                {item.count}
              </p>
              <p className="text-xs md:text-sm text-base-content/60">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroStats;
