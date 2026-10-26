import React from "react";

interface StatItem {
  id: number;
  value: string;
  label: string;
  accent?: boolean;
}

const statsData: StatItem[] = [
  { id: 1, value: "10,000+", label: "Happy Patients" },
  { id: 2, value: "500+", label: "Expert Doctors", accent: true },
  { id: 3, value: "50+", label: "Specialties" },
  { id: 4, value: "95%", label: "Satisfaction Rate", accent: true },
];

const StatisticsSection = () => {
  return (
    <section className="bg-secondary py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center gap-2 text-center ${
                index > 0 ? "lg:border-l lg:border-secondary-content/10" : ""
              }`}
            >
              {/* Value */}
              <p
                className={`text-3xl md:text-4xl font-extrabold ${
                  stat.accent ? "text-accent" : "text-secondary-content"
                }`}
              >
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary-content/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;