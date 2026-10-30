import FilterDoctor from "@/Components/Public/FindDoctors/FilterDoctor/FilterDoctor";
import MobileFilterToggle from "@/Components/Public/FindDoctors/FilterDoctor/MobileFilterToggle";

const FindDoctors = () => {
  return (
    <div className="w-full pt-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Filter Sidebar */}
        <MobileFilterToggle>
          <FilterDoctor />
        </MobileFilterToggle>

        {/* Doctor List */}
        <section className="border border-secondary p-5 lg:col-span-9">
          {/* Doctor cards go here */}
        </section>
      </div>
    </div>
  );
};

export default FindDoctors;
