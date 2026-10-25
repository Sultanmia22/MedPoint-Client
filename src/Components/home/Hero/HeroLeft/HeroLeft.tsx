"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import TrustBadge from "@/Components/common/TrustBadge/TrustBadge";
import HeroSearch from "./HeroSearch";
import HeroCTA from "./HeroCTA";
import HeroStats from "./HeroStats";

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const HeroLeft = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex flex-col gap-7 h-full"
      variants={sectionVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
    >
      {/* Trust Badge / Social Proof Badge    */}
      <motion.div variants={itemVariants}>
        <TrustBadge />
      </motion.div>

      {/* Hero Headline and description */}
      <motion.div className="max-w-2xl" variants={itemVariants}>
        <h1 className="text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Find the right doctor.{" "}
          <span className="text-primary">Book with confidence.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-base-content/70 sm:text-lg">
          Explore doctors by specialty or location and book an appointment that
          fits your needs.
        </p>
      </motion.div>

      {/* Hero Search */}
      <motion.div variants={itemVariants}>
        <HeroSearch />
      </motion.div>

      {/* CTA Button */}
      <motion.div variants={itemVariants}>
        <HeroCTA />
      </motion.div>

      {/* Hero Stats */}
      <motion.div variants={itemVariants}>
        <HeroStats />
      </motion.div>
    </motion.div>
  );
};

export default HeroLeft;
