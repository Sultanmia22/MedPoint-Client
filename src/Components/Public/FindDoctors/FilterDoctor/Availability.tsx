"use client"
import React, { useState } from "react";

const Availability = () => {
  const AvailabilityList = ["Today", "Tommorow", "This Week"];
  const [selectedAvailability,setSelectedAvailability] = useState("Today")

  return (
    <div>
      <p className="text-sm font-bold text-base-content">Availability</p>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {AvailabilityList.map((list) => (
          <button
            key={list}
            onClick={() => setSelectedAvailability(list)}
            type="button"
            className={`py-2 rounded-lg text-xs font-bold  text-base-content/70 ${selectedAvailability === list ? "bg-primary text-white" : "bg-base-300/40"}`}
          >
            {list}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Availability;
