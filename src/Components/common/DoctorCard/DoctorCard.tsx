import React from "react";
import Image from "next/image";
import { BadgeCheck, Star, Briefcase, MapPin } from "lucide-react";
import type { IDoctorCardData } from "@/lib/types/doctors/doctors.interface";

interface DoctorCardProps {
  FeaturDoctordata: IDoctorCardData[];
}

const DoctorCards = ({FeaturDoctordata}:DoctorCardProps) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {FeaturDoctordata.map((doctor) => (
        <article
          key={doctor.id}
          className="group bg-base-100 border border-base-200 dark:border-base-content/10 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-base-content/5"
        >
          {/* Doctor Image + Verified Badge */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-primary text-primary-content text-xs font-semibold px-3 py-1.5 rounded-full">
              <BadgeCheck size={14} />
              Verified
            </span>
          </div>

          {/* Card Content */}
          <div className="p-5 flex flex-col gap-3">
            {/* Specialty + Rating */}
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                {doctor.specialty}
              </p>
              <div className="flex items-center gap-1 shrink-0">
                <Star size={14} className="text-warning" fill="currentColor" />
                <span className="text-sm font-bold text-base-content">
                  {doctor.rating}
                </span>
                <span className="text-xs text-base-content/50">
                  ({doctor.reviews})
                </span>
              </div>
            </div>

            {/* Doctor Name */}
            <h3 className="text-lg text-base-content">{doctor.name}</h3>

            {/* Experience + Location */}
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-sm text-base-content/60">
                <Briefcase size={16} />
                {doctor.experience} Years Exp
              </p>
              <p className="flex items-center gap-2 text-sm text-base-content/60">
                <MapPin size={16} />
                {doctor.location}
              </p>
            </div>

            {/* Consultation Fee */}
            <div className="flex items-center justify-between bg-secondary/10 dark:bg-secondary/15 rounded-lg px-4 py-3">
              <span className="text-sm text-base-content/60">Consultation</span>
              <span className="text-lg font-bold text-base-content">
                ${doctor.fee}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="py-2.5 rounded-lg bg-secondary/10 dark:bg-secondary/15 text-sm font-semibold text-base-content transition-colors duration-150 hover:bg-secondary/20"
              >
                View Profile
              </button>
              <button
                type="button"
                className="py-2.5 rounded-lg bg-primary text-sm font-semibold text-primary-content transition-colors duration-150 hover:bg-primary/90"
              >
                Book
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default DoctorCards;