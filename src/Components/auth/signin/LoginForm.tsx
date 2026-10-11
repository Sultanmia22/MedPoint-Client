"use client";

import Logo from "@/Components/common/Logo/Logo";
import TrustBadges from "@/Components/common/TrustBadges/TrustBadges";
import { loginSchema, type LoginFormData } from "@/schemas/authSchemas/signinSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRight } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    // console.log("result",result)

    if (result?.error) {
      toast.error("Email or password is incorrect");
      return;
    }

    toast.success("Login successful");
    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <main className="w-full max-w-sm sm:max-w-md lg:max-w-lg space-y-5 md:px-4 lg:px-4">
        {/* Logo Section Start */}
        <div className="flex md:hidden">
          <Logo />
        </div>
        {/* Logo Section End */}

        {/* Header Section Start */}
        <header className="space-y-1.5">
          <div className="inline-block mb-3 md:mb-6">
            <span className="bg-accent/20 text-sm text-primary font-semibold px-2.5 py-1 rounded-sm">
              Welcome Back
            </span>
          </div>

          <h1>Login to MedPoint</h1>

          <p>Enter your credentials to access your account</p>
        </header>
        {/* Header Section End */}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="space-y-6">
            {/* Email Section Start */}
            <div className="space-y-3">
              <label className="block uppercase text-xs font-bold">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                className="input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm"
                placeholder="example@gmail.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Email Section End */}

            {/* Password Section Start */}
            <div className="space-y-2">
              <label className="block uppercase text-xs font-bold">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                className="input w-full"
                placeholder="••••••••••••••••"
              />
              {errors.password && (
                <p className="text-red-500 text-sm font-medium">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Password Section End */}
          </div>

          {/* Remember & Forgot Password Section Start */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              />
              <p className="text-base-content/60 text-xs font-semibold">
                Reminder me
              </p>
            </div>

            <span>
              <Link
                href="/forget-pass"
                className="text-primary font-bold text-sm"
              >
                Forgate Password
              </Link>
            </span>
          </div>
          {/* Remember & Forgot Password Section End */}

          {/* Login Button Section Start */}
          <div>
            <button
              type="submit"
              className="w-full bg-primary flex items-center justify-center space-x-2 hover:bg-primary/80 active:scale-[0.99] text-white font-medium text-sm py-3 px-4 rounded-xl shadow-xs transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1 cursor-pointer"
            >
              <span>Login</span>
              <MoveRight />
            </button>
          </div>
          {/* Login Button Section End */}
        </form>

        <div className="space-y-2">
          {/* Divider Section Start */}
          <div className="flex items-center justify-between gap-2">
            <div className="h-px w-1/2 bg-gray-300"></div>
            <p>Or</p>
            <div className="h-px w-1/2 bg-gray-300"></div>
          </div>
          {/* Divider Section End */}

          {/* Google Login Section Start */}
          <div>
            <button className="flex items-center justify-center btn w-full outline-primary-content hover:outline-primary">
              <span>
                <FcGoogle size={24} />
              </span>
              <span>Continue with google</span>
            </button>
          </div>
          {/* Google Login Section End */}

          {/* Register Section Start */}
          <div className="my-6">
            <p className="text-sm text-base-content/60 text-center">
               Don&apos;t Have an account?{" "}
              <span className="text-primary font-semibold">
                <Link href="/register">Sign Up</Link>
              </span>
            </p>
          </div>
          {/* Register Section End */}

          {/* Trust Badges Section Start */}
          <div className="flex flex-col md:hidden space-y-3">
            <div className="w-full h-px bg-gray-300"></div>
            <TrustBadges />
          </div>
          {/* Trust Badges Section End */}
        </div>
      </main>
    </div>
  );
}
