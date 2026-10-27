"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

type CtaVariant = "primary" | "accent";

interface CtaItem {
  id: number;
  variant: CtaVariant;
  badge: string;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
}

const ctaData: CtaItem[] = [
  {
    id: 1,
    variant: "primary",
    badge: "For Patients",
    title: "Ready to Get Started?",
    description:
      "Book your appointment with top doctors today and experience world-class healthcare right in your neighborhood.",
    buttonLabel: "Find a Doctor Now",
    href: "/doctors",
  },
  {
    id: 2,
    variant: "accent",
    badge: "For Healthcare Providers",
    title: "Are You a Doctor?",
    description:
      "Join our platform to grow your practice, connect with new patients, and manage your clinical calendar with ease.",
    buttonLabel: "Register as Doctor",
    href: "sign-up",
  },
];

const variantStyles: Record<
  CtaVariant,
  { card: string; badge: string; button: string }
> = {
  primary: {
    card: "bg-primary/10",
    badge: "bg-primary/15",
    button: "bg-primary text-primary-content hover:bg-primary/90",
  },
  accent: {
    card: "bg-accent/10",
    badge: "bg-accent/20",
    button: "bg-base-100 text-base-content hover:shadow-md",
  },
};

const cardsVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CallToAction = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="max-w-7xl mx-auto px-4 py-14 md:py-20">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={cardsVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {ctaData.map((item) => {
          const styles = variantStyles[item.variant];

          return (
            <motion.div
              key={item.id}
              className={`${styles.card} rounded-2xl p-8 md:p-10`}
              variants={cardVariants}
            >
              {/* Badge */}
              <span
                className={`inline-flex items-center gap-2 ${styles.badge} text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}
              >
                <span className="size-1.5 rounded-full bg-current" />
                {item.badge}
              </span>

              {/* Title */}
              <h2 className="mt-5 text-2xl md:text-3xl text-base-content">
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-sm md:text-base leading-relaxed text-base-content/60">
                {item.description}
              </p>

              {/* CTA Button */}
              <Link
                href={item.href}
                className={`group inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-150 ${styles.button}`}
              >
                {item.buttonLabel}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default CallToAction;