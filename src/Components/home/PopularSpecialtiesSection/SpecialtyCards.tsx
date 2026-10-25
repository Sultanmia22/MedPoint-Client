import React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  HeartPulse,
  Sparkles,
  Baby,
  Bone,
  Venus,
  Smile,
  Ear,
  Stethoscope,
  BrainCog,
  Brain,
  Eye,
  Droplet,
  type LucideIcon,
} from "lucide-react";

interface SpecialtyItem {
  id: number;
  icon: LucideIcon;
  name: string;
  doctors: number;
}

const specialtiesData: SpecialtyItem[] = [
  { id: 1, icon: HeartPulse, name: "Cardiologist", doctors: 34 },
  { id: 2, icon: Sparkles, name: "Dermatologist", doctors: 28 },
  { id: 3, icon: Baby, name: "Pediatrician", doctors: 42 },
  { id: 4, icon: Bone, name: "Orthopedic", doctors: 31 },
  { id: 5, icon: Venus, name: "Gynecologist", doctors: 26 },
  { id: 6, icon: Smile, name: "Dentist", doctors: 39 },
  { id: 7, icon: Ear, name: "ENT Specialist", doctors: 22 },
  { id: 8, icon: Stethoscope, name: "General Physician", doctors: 58 },
  { id: 9, icon: BrainCog, name: "Psychiatrist", doctors: 19 },
  { id: 10, icon: Brain, name: "Neurologist", doctors: 18 },
  { id: 11, icon: Eye, name: "Ophthalmologist", doctors: 25 },
  { id: 12, icon: Droplet, name: "Urologist", doctors: 16 },
];

const cardsVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
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

const SpecialtyCards = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      variants={cardsVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {specialtiesData.map((item) => (
        <motion.button
          key={item.id}
          variants={cardVariants}
          type="button"
          className="group flex flex-col items-center gap-3 bg-base-200 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-base-content/5"
        >
          {/* Icon Circle */}
          <div className="flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full transition-colors duration-200 group-hover:bg-primary group-hover:shadow-md">
            <item.icon
              size={24}
              className="text-primary transition-colors duration-200 group-hover:text-primary-content"
            />
          </div>

          {/* Name */}
          <h3 className="text-lg text-base-content">{item.name}</h3>

          {/* Doctor Count */}
          <p className="text-sm text-base-content/60">{item.doctors} Doctors</p>
        </motion.button>
      ))}
    </motion.section>
  );
};

export default SpecialtyCards;
