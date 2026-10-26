"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  Shield,
  Calendar,
  LockKeyhole,
  Headset,
  Tag,
  Share2,
  type LucideIcon,
} from "lucide-react";

interface FeatureItem {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const featuresData: FeatureItem[] = [
  {
    id: 1,
    icon: Shield,
    title: "Verified Doctors",
    description:
      "All licensed and background-checked healthcare professionals with proven credentials.",
  },
  {
    id: 2,
    icon: Calendar,
    title: "Easy Booking",
    description:
      "Quick and hassle-free appointment process with real-time calendar synchronization.",
  },
  {
    id: 3,
    icon: LockKeyhole,
    title: "Secure & Private",
    description:
      "Your data safety is guaranteed with HIPAA-grade end-to-end encrypted medical storage.",
  },
  {
    id: 4,
    icon: Headset,
    title: "24/7 Support",
    description:
      "Round the clock assistance for you and your family for immediate booking or clinical inquiries.",
  },
  {
    id: 5,
    icon: Tag,
    title: "Best Prices",
    description:
      "Transparent pricing with no hidden charges, surprise clinic administration fees, or markups.",
  },
  {
    id: 6,
    icon: Share2,
    title: "Multiple Specialties",
    description:
      "Access to 50+ medical specialties covering full-spectrum diagnostic, surgical, and therapeutic care.",
  },
];

const cardsVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const FeatureCards = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-secondary/5 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={cardsVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuresData.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-base-200 rounded-xl p-6 md:p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-base-content/5"
              variants={cardVariants}
            >
              {/* Icon Circle */}
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
                <feature.icon size={24} className="text-primary" />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg text-base-content">{feature.title}</h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-base-content/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCards;