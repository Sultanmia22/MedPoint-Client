import React from 'react'
import Header from './Header/Header'
import StepsCards from './StepsCards/StepsCards'

const Process = () => {
  return (
    <div>
        <div className='Process-Container flex flex-col gap-12'>
            {/* Header Section */}
            <div>
              <Header />
            </div>

            {/* Process Section */}
            <div>
              <StepsCards />
            </div>
        </div>
    </div>
  )
}

export default Process