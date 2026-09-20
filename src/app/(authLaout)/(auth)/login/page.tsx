import LoginForm from '@/Components/auth/Login/LoginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex w-full min-h-screen'>
        {/* Login Hero Start */}
        <section className='hidden md:flex w-1/2  border-2 border-accent'>
            Hero Image
        </section>
        {/* Login Hero End */}

        {/* ========xxx======== */}

        {/* Login Form Start */}
        <section className=' w-full md:w-1/2'>
            <LoginForm />
        </section>
        {/* Login Form End */}

    </div>
  )
}

export default LoginPage