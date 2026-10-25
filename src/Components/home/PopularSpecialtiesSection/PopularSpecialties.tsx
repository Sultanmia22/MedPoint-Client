import React from 'react'
import SpecialtyCards from './SpecialtyCards'

const PopularSpecialties = () => {
  return (
    <div className='flex flex-col gap-12'>
        <div className="Process-Header-Container flex flex-col justify-center items-center gap-3">
        <div>
          <span className=" uppercase bg-primary/20 px-3 py-1 text-primary text-sm font-semibold rounded-full">
            BROWSE BY SPECIALTY
          </span>
        </div>

        <div>
          <h1>Popular Specialties</h1>
        </div>

        <div>
          <p className="text-base leading-7 text-base-content/70 sm:text-lg text-center">
            Find the right specialist for your immediate clinical and diagnostic needs.
          </p>
        </div>
      </div>
        {/*SpecialtyCards Section  */}
      <div>
        <SpecialtyCards />
      </div>
    </div>
  )
}

export default PopularSpecialties