"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const HeroImage = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-100 overflow-hidden rounded-3xl border border-base-content/5 shadow-xl shadow-secondary/10 lg:lg:h-145 xl:xl:h-160">
      <motion.div
        className="absolute inset-0"
        initial={
          shouldReduceMotion ? false : { opacity: 0, y: 14, scale: 1.02 }
        }
        animate={{
          opacity: 1,
          y: 0,
          scale: shouldReduceMotion ? 1 : [1.02, 1.07],
        }}
        transition={{
          opacity: { duration: 0.65, delay: 0.2, ease: "easeOut" },
          y: { duration: 0.65, delay: 0.2, ease: "easeOut" },
          scale: {
            duration: 18,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      >
        <Image
          src="/images/Hero/Hero.image.jpg"
          alt="Hero"
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute top-5 left-5 z-10 flex items-center gap-2 rounded-full bg-base-100 px-4 py-2 shadow-md backdrop-blur-md  text-base-content">
        <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse"></span>
        <span className="text-xs font-semibold sm:text-sm text-primary">
          Available Today
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center gap-3.5 rounded-2xl bg-base-100 p-4 shadow-xl backdrop-blur-md   sm:p-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white sm:text-base">
            Verified Specialists
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            100% Board-certified doctors & clinics
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
