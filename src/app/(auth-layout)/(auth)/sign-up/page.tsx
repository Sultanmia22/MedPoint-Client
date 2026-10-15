import SignUpForm from "@/Components/auth/SignUp/SignUpForm";
import SignUpHero from "@/Components/auth/SignUp/SignUpHero";
import React from "react";

const SignUpPage = () => {
  return (
    <div className='flex w-full h-screen overflow-hidden bg-base-100'>
        {/* Register Hero Start */}
        <section className='hidden md:flex w-1/2 h-full overflow-hidden'>
            <SignUpHero />
        </section>
        {/* Register Hero End */}

        {/* ========xxx======== */}

        {/* Register Form Start */}
        <section className='w-full md:w-1/2 h-full overflow-y-auto bg-base-200 py-10'>
            <SignUpForm />
        </section>
        {/* Login Form End */}
    </div>
  )
}

export default SignUpPage