"use client";

import Logo from "@/Components/common/Logo/Logo";
import TrustBadges from "@/Components/common/TrustBadges/TrustBadges";
import { ArrowLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import PatientSignUpForm from "./PatientSignUpForm";
import DoctorSignUpForm from "./DoctorSignUpForm";

type SignUpCategory = "patient" | "doctor";

export default function SignUpForm() {
  const [singUpCategory, setSingUpCategory] =
    useState<SignUpCategory>("patient");

  return (
    <div className="min-h-full w-full flex justify-center items-center">
      <main className="w-full max-w-sm sm:max-w-md lg:max-w-lg space-y-5 px-4 md:px-4 lg:px-4">
        <div className="flex flex-col items-start gap-3 md:hidden">
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-lg bg-base-100 px-3 py-2 text-base-content transition-colors hover:bg-base-300"
          >
            <ArrowLeft size={16} />
            <span className="text-xs">Back to Home</span>
          </Link>
          <Logo />
        </div>

        <header className="space-y-1.5">
          <div className="inline-block mb-3 md:mb-6">
            <span className="bg-accent/20 text-sm text-primary font-semibold px-2.5 py-1 rounded-sm">
              Get Started
            </span>
          </div>

          <h1>Create Your Account</h1>

          <p>
            Create your account as a patient or doctor and get started with
            smarter, simpler healthcare
          </p>

          <div className="flex items-center gap-4 w-full mt-5">
            <button
              onClick={() => setSingUpCategory("patient")}
              className={`btn  ${singUpCategory === "patient" ? "btn-primary" : "btn-outline"} flex-1`}
            >
              I'm a Patient
            </button>

            <button
              onClick={() => setSingUpCategory("doctor")}
              className={`btn  ${singUpCategory === "doctor" ? "btn-primary" : "btn-outline"} flex-1`}
            >
              I'm a Doctor
            </button>
          </div>
        </header>

        {
            singUpCategory === 'patient' ? 

            <PatientSignUpForm />

            :

            <DoctorSignUpForm />
        }

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="h-px w-1/2 bg-gray-300"></div>
            <p>Or</p>
            <div className="h-px w-1/2 bg-gray-300"></div>
          </div>

          <div>
            <button className="flex items-center justify-center btn w-full outline-primary-content hover:outline-primary ">
              {" "}
              <span>
                {" "}
                <FcGoogle size={24} />{" "}
              </span>{" "}
              <span>Continue with google</span>
            </button>
          </div>

          <div className="my-6">
            <p className="text-sm text-base-content/60/60 text-center">
              Already have an account?{" "}
              <span className="text-primary font-semibold">
                <Link href="/sign-in">Sign In</Link>
              </span>
            </p>
          </div>

          <div className="  flex flex-col md:hidden space-y-3">
            <div className="w-full h-px bg-gray-300"></div>
            <TrustBadges />
          </div>
        </div>
      </main>
    </div>
  );
}
