"use client"
import React, { useState } from "react";

const GenderFilter = () => {
  const genderList = ["Male", "Female", "Any"];
  const [selectedGender,setSelectedGender] = useState("Male")

  return (
    <div>
      <p className="text-sm font-bold text-base-content">Gender</p>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {genderList.map((list) => (
          <button
            key={list}
            onClick={() => setSelectedGender(list)}
            type="button"
            className={`py-2 rounded-lg text-xs font-bold  text-base-content/70 ${selectedGender === list ? "bg-primary text-white" : "bg-base-300/40"}`}
          >
            {list}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenderFilter;
