import Hero from '@/Components/home/Hero/Hero'
import React from 'react'

const page = () => {
  return (
    <div className={`flex flex-col gap-8 md:gap-12 lg:gap-16 min-h-screen pt-10 md:pt-12 lg:pt-16`}>
      {/* Hero Section Start */}
      <section>
      <Hero />
      </section>
      {/* Hero Section Start */}
    </div>
  )
}

export default page