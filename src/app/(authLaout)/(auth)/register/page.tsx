import RegisterForm from '@/Components/auth/Register/RegisterForm'
import RegisterHero from '@/Components/auth/Register/RegisterHero'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className='flex w-full h-screen overflow-hidden bg-base-100'>
        {/* Register Hero Start */}
        <section className='hidden md:flex w-1/2 h-full overflow-hidden'>
            <RegisterHero />
        </section>
        {/* Register Hero End */}

        {/* ========xxx======== */}

        {/* Register Form Start */}
        <section className='w-full md:w-1/2 h-full overflow-y-auto bg-base-200 py-10'>
           <RegisterForm />
        </section>
        {/* Login Form End */}

    </div>
  )
}

export default RegisterPage