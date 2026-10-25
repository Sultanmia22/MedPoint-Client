import React from "react";
import FeaturDoctorHeader from "./FeaturDoctorHeader";
import doctorCardData from "@/data/doctorCard.json"
import DoctorCards from "@/Components/common/DoctorCard/DoctorCard";
const FeatureDcotor = async () => {
     const FeaturDoctordata = doctorCardData;
  return (
    <div className="flex flex-col gap-12">
      <FeaturDoctorHeader />
      <DoctorCards FeaturDoctordata={FeaturDoctordata}/>  
    </div>
  );
};

export default FeatureDcotor;
