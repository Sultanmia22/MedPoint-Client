import React from "react";
import FilterDoctor from "@/Components/Public/FindDoctors/FilterDoctor/FilterDoctor";

const FindDoctors = () => {
  return (
    <div className="w-full pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Filter Sidebar */}
        <aside className=" hidden lg:block lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
          <FilterDoctor />
        </aside>

        {/* Doctor List */}
        <section className="lg:col-span-9 border border-secondary p-5">
          {/* Doctor cards go here */}
        </section>
      </div>
    </div>
  );
};

export default FindDoctors;
