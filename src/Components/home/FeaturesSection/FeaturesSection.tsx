import React from 'react'
import FeatureHeader from './FeatureHeader/FeatureHeader'
import FeatureCards from './FeatureCard/FeatureCards'

const FeaturesSection = () => {
  return (
    <div className='flex flex-col gap-12'>
        <div>
            <FeatureHeader />
        </div>

        <div>
            <FeatureCards />
        </div>
    </div>
  )
}

export default FeaturesSection