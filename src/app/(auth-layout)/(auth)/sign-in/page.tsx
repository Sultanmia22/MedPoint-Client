import { auth } from '@/auth'
import SignInForm from "@/Components/auth/SignIn/SignInForm";
import SignInHero from "@/Components/auth/SignIn/SignInHero";
import React from 'react'

const SignInPage = async () => {

  const session = await auth()

  console.log("session",session)

  return (
    <div className='flex w-full min-h-screen bg-base-100'>
        {/* Login Hero Start */}
        <section className='hidden md:flex w-1/2 '>
            <SignInHer />
        </section>
        {/* Login Hero End */}

        {/* ========xxx======== */}

        {/* Login Form Start */}
        <section className='w-full md:w-1/2 bg-base-200'>
            <SignInForm />
        </section>
        {/* Login Form End */}

    </div>
  )
}

export default SignInPage