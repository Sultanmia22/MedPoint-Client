import Hero from '@/Components/home/Hero/Hero'
import React from 'react'

const page = () => {
  return (
    <div className={`flex flex-col gap-8 md:gap-12 lg:gap-16 min-h-screen pt-4 md:pt-6 lg:pt-8`}>
      {/* Hero Section Start */}
      <section>
      <Hero />
      </section>
      {/* Hero Section Start */}
    </div>
  )
}

export default page