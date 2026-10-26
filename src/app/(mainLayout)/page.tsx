import FeatureDcotor from '@/Components/home/FeatureDoctor/FeatureDcotor'
import FeaturesSection from '@/Components/home/FeaturesSection/FeaturesSection'
import Hero from '@/Components/home/Hero/Hero'
import PopularSpecialties from '@/Components/home/PopularSpecialtiesSection/PopularSpecialties'
import Process from '@/Components/home/ProcessSection/Process'
import StatisticsSection from '@/Components/home/StatisticsSection/StatisticsSection'
import Testimonial from '@/Components/home/Testimonial/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div className={`flex flex-col gap-12 md:gap-18 lg:gap-36 min-h-screen pt-10 md:pt-12 lg:pt-16`}>
      {/* Hero Section Start */}
      <section>
      <Hero />
      </section>
      {/* Hero Section End */}

      {/* Process Section */}
      <section>
        <Process />
      </section>

      {/* Popular Specialties Section*/}
      <section>
        <PopularSpecialties />
      </section>

      {/* Feature Doctor */}
      <section>
        <FeatureDcotor />
      </section>

      {/* Features Section */}
      <section>
        <FeaturesSection />
      </section>

      {/* Testimonials Section */}
      <section>
        <Testimonial />
      </section>

      {/* Statistics Section */}
      <section>
        <StatisticsSection />
      </section>
    </div>
  )
}

export default page