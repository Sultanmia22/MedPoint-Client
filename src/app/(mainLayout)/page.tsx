import Hero from '@/Components/home/Hero/Hero'
import Process from '@/Components/home/ProcessSection/Process'
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
    </div>
  )
}

export default page