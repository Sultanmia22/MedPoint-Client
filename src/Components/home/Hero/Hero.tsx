import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
       {/* Hero Left Side */}
       <div className='lg:col-span-3 border border-y-emerald-700'>
        <HeroLeft/>
       </div>

       {/* Hero Right Side */}
       <div className='lg:col-span-2 border border-red-600'>
        <HeroRight />
       </div>
    </div>
  )
}

export default Hero