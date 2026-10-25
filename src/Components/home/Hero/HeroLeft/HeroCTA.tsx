"use clinet"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HeroCTA = () => {
  return (
    <div>
        <div className="cta-container flex flex-col md:flex-row gap-4">
          <Link href={'/doctors'} className="btn btn-primary w-44"> <span>Find a Doctor</span> <span><ArrowRight size={18} /></span></Link>
          <button className="btn bg-base-300/20 w-60">Are you a Doctor? Join Us</button>
        </div>
      </div>
  )
}

export default HeroCTA