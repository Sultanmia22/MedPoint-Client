import { auth } from '@/auth'
import LoginForm from '@/Components/auth/signin/LoginForm'
import LoginHero from '@/Components/auth/signin/LoginHero'
import React from 'react'

const LoginPage = async () => {

  const session = await auth()

  console.log("session",session)

  return (
    <div className='flex w-full min-h-screen bg-base-100'>
        {/* Login Hero Start */}
        <section className='hidden md:flex w-1/2 '>
            <LoginHero />
        </section>
        {/* Login Hero End */}

        {/* ========xxx======== */}

        {/* Login Form Start */}
        <section className='w-full md:w-1/2 bg-base-200'>
            <LoginForm />
        </section>
        {/* Login Form End */}

    </div>
  )
}

export default LoginPage