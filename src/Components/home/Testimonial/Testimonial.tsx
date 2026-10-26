import React from 'react'
import TestimonialsHeader from './TestimonialsHeader/TestimonialsHeader'
import testimonialData from "@/data/TestimonialsCard.json"
import TestimonialCards from './TestimonialCards/TestimonialCards'
import ReviewPagination from './ReviewPagination/ReviewPagination'
const Testimonial = () => {
    const tesimonialCardData = testimonialData
    
  return (
    <div className='flex flex-col gap-12'>
        {/* Testimonials Header */}
        <TestimonialsHeader />

        {/* Testimonal Card */}
        <TestimonialCards  tesimonialCardData={tesimonialCardData}/>

        <ReviewPagination />
    </div>
  )
}

export default Testimonial