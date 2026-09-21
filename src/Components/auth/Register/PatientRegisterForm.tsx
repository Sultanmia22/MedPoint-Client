import TrustBadges from "@/Components/common/TrustBadges/TrustBadges";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const PatientRegisterForm = () => {
  return (
    <>
      <form className="flex flex-col gap-5">
        <div className="space-y-6">
          {/* Name Section Start */}
          <div className="space-y-3">
            <label className="block  uppercase text-xs font-bold">
              Full Name
            </label>
            <input
              type="email"
              className="input w-full  focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm"
              placeholder="Dr. / Mr. / Ms. Sarah Mitchell"
            />
          </div>
          {/* Name Section End */}

          {/* Email Section Start */}
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
          {/* Email Section End */}

          {/* Phone Number Section Start */}
          <div className="space-y-3">
            <label className="block  uppercase text-xs font-bold">
              Phone Number
            </label>
            <input
              type="email"
              className="input w-full  focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm"
              placeholder="+880 1X XXXXXXXX"
            />
          </div>
          {/* Phone Number Section End */}

          {/* Password Section Start */}
          <div className="space-y-2">
            <label className="block  uppercase text-xs font-bold">
              Password
            </label>
            <input
              type="password"
              className="input w-full"
              placeholder="••••••••••••••••"
            />
          </div>
          {/* Password Section End */}

          {/* Confirm Password Section Start */}
          <div className="space-y-2">
            <label className="block  uppercase text-xs font-bold">
              Confirm Password
            </label>
            <input
              type="password"
              className="input w-full"
              placeholder="••••••••••••••••"
            />
          </div>
          {/* Confirm Password Section End */}
        </div>

        <div className="">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer checked:text-primary"
            />
            <p className="text-base-content/60/60 text-xs font-semibold">
              I agree to the{" "}
              <span className="text-primary">Terms of Service</span> and{" "}
              <span className="text-primary">Privacy Policy</span>
            </p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-primary flex items-center justify-center space-x-2  hover:bg-primary/80 active:scale-[0.99] text-white font-medium text-sm py-3 px-4 rounded-xl shadow-xs transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1 cursor-pointer"
          >
            {" "}
            <span>Create Account</span> <MoveRight />{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default PatientRegisterForm;