import React from "react";
import {
  Search,
  CalendarDays,
  CircleCheck,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

interface StepItem {
  id: number;
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  highlight: string;
}

const stepsData: StepItem[] = [
  {
    id: 1,
    icon: Search,
    step: "Step 01",
    title: "Find a Doctor",
    description:
      "Search by specialty, location or name to find the ideal practitioner for your health needs.",
    highlight: "500+ Verified Specialists",
  },
  {
    id: 2,
    icon: CalendarDays,
    step: "Step 02",
    title: "Book Appointment",
    description:
      "Choose your preferred time slot, consultation type, and provide brief symptoms securely.",
    highlight: "Instant Confirmation",
  },
  {
    id: 3,
    icon: CircleCheck,
    step: "Step 03",
    title: "Get Consultation",
    description:
      "Visit the clinical facility or attend high-definition video telehealth for expert medical care.",
    highlight: "In-Clinic & Video Telehealth",
  },
];

const StepsCards = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stepsData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center text-center bg-base-200 rounded-2xl p-8 transition-all duration-200 hover:shadow-lg hover:shadow-base-content/5"
        >
          {/* Icon Circle */}
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
            <item.icon size={26} className="text-primary" />
          </div>

          {/* Step Label */}
          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-primary">
            {item.step}
          </p>

          {/* Title */}
          <h3 className="mt-2 text-base-content">{item.title}</h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-base-content/60">
            {item.description}
          </p>

          {/* Highlight Link */}
          <button
            type="button"
            className="group mt-auto pt-6 flex items-center gap-1 text-sm font-bold text-primary"
          >
            {item.highlight}
            <ChevronRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      ))}
    </section>
  );
};

export default StepsCards;