"use client";

import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import type { Testimonial } from "@/lib/types/testimonial/testimonial.interface";


interface TestimonialCardsProps {
  tesimonialCardData: Testimonial[];
}

const cardsVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

const TestimonialCards = ({ tesimonialCardData }: TestimonialCardsProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={cardsVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {tesimonialCardData.map((item) => (
        <motion.article
          key={item.id}
          variants={cardVariants}
          className="flex flex-col bg-base-200 rounded-xl p-6 md:p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-base-content/5"
        >
          {/* Quote Icon + Rating Stars */}
          <div className="flex items-center justify-between">
            <Quote size={28} className="text-primary" fill="currentColor" />
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  fill="currentColor"
                  className={
                    index < item.rating
                      ? "text-warning"
                      : "text-base-content/20"
                  }
                />
              ))}
            </div>
          </div>

          {/* Review Text */}
          <p className="mt-5 flex-1 text-sm italic leading-relaxed text-base-content/70">
            &ldquo;{item.review}&rdquo;
          </p>

          {/* Author Box */}
          <div className="mt-6 flex items-center gap-3 bg-secondary/10 dark:bg-secondary/15 rounded-lg p-3">
            <Image
              src={item.avatar}
              alt={item.name}
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-bold text-base-content">{item.name}</p>
              <p className="text-xs text-base-content/50">{item.time}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.section>
  );
};

export default TestimonialCards;