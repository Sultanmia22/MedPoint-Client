"use client";

import Logo from "@/Components/common/Logo/Logo";
import TrustBadges from "@/Components/common/TrustBadges/TrustBadges";
import { Clock, MoveRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";


export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("sarah.mitchell@example.com");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up your auth logic here
  };

  return (
    <div className=" min-h-screen w-full flex justify-center items-center ">
      <main className="w-full max-w-sm sm:max-w-md lg:max-w-lg space-y-5 md:px-4 lg:px-4">

      <div className="flex md:hidden">
        <Logo />
      </div>

        <header className="space-y-1.5">
          <div className="inline-block mb-3 md:mb-6">
            <span className="bg-accent/20 text-sm text-primary font-semibold px-2.5 py-1 rounded-sm">
              Welcome Back
            </span>
          </div>

          <h1>Login to MedPoint</h1>

          <p>Enter your credentials to access your account</p>
        </header>

        <form className="flex flex-col gap-5">
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="block  uppercase text-xs font-bold">
                Email Address
              </label>
              <input
                type="email"
                className="input w-full  focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block  uppercase text-xs font-bold">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="••••••••••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              />
              <p className="text-base-content/60/60 text-xs font-semibold">
                Reminder me
              </p>
            </div>
            <span>
              <Link
                href={`/forget-pass`}
                className="text-primary font-bold text-sm "
              >
                Forgate Password
              </Link>
            </span>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-primary flex items-center justify-center space-x-2  hover:bg-primary/80 active:scale-[0.99] text-white font-medium text-sm py-3 px-4 rounded-xl shadow-xs transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1 cursor-pointer"
            >
              {" "}
              <span>Login</span> <MoveRight />{" "}
            </button>
          </div>
        </form>

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
              Don't Have an account?{" "}
              <span className="text-primary font-semibold">
                <Link href={`/register`}>Sign Up</Link>
              </span>
            </p>
          </div>

          <div className="  flex flex-col md:hidden space-y-3">
            <div className="w-full h-px bg-gray-300"></div>
            {/* <div className="flex justify-between items-center gap-3 ">
              <button className="flex items-center gap-0.5  text-primary">
                {" "}
                <span>
                  {" "}
                  <ShieldCheck size={18} />
                </span>{" "}
                <span className="text-xs text-base-content/60 ">
                  {" "}
                  Verified Doctors
                </span>{" "}
              </button>
              <button className="flex items-center gap-0.5  text-primary">
                {" "}
                <span>
                  {" "}
                  <ShieldCheck size={18} />
                </span>{" "}
                <span className="text-xs text-base-content/60 ">
                  Secure & Private
                </span>{" "}
              </button>
              <button className="flex items-center gap-0.5  text-primary">
                {" "}
                <span>
                  {" "}
                  <Clock size={18} />
                </span>{" "}
                <span className="text-xs text-base-content/60 ">
                  24/7 Support
                </span>{" "}
              </button>
            </div> */}
            <TrustBadges />
          </div>
        </div>
      </main>
    </div>
  );
}
