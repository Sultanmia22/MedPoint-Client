"use client"
import React, { useState } from 'react'

const ConsultationFee = () => {
     const [maxFee, setMaxFee] = useState(3500);
  return (
    <div>
        <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-base-content">Consultation Fee</p>
        <span className="text-xs font-bold text-primary">
          Up to: Tk {maxFee.toLocaleString()}
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={5000}
        step={100}
        value={maxFee}
        onChange={(e) => setMaxFee(Number(e.target.value))}
        className="range range-primary range-xs mt-3"
      />

       <div className="flex justify-between text-[10px] text-base-content/50 mt-1">
        <span className='text-xs text-base-content'>Tk 0</span>
        <span className='text-xs text-base-content'>Tk 5000</span>
      </div>
    </div>
  )
}

export default ConsultationFee