import TrustBadges from "@/Components/common/TrustBadges/TrustBadges";
import { MoveRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const DoctorRegisterForm = () => {
  return (
    <>
      <form className="flex flex-col gap-5">
        <div className="space-y-6">
          {/* Name Section Start */}
          <div className="space-y-3">
            <label className="block uppercase text-xs font-bold">
              Full Name
            </label>
            <input
              type="text"
              className="input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm"
              placeholder="Dr. Sarah Mitchell"
            />
          </div>
          {/* Name Section End */}

          {/* Email Section Start */}
          <div className="space-y-3">
            <label className="block uppercase text-xs font-bold">
              Email Address
            </label>
            <input
              type="email"
              className="input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm"
              placeholder="example@gmail.com"
            />
          </div>
          {/* Email Section End */}

          {/* Phone Number Section Start */}
          <div className="space-y-3">
            <label className="block uppercase text-xs font-bold">
              Phone Number
            </label>
            <input
              type="tel"
              className="input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm"
              placeholder="+880 1X XXXXXXXX"
            />
          </div>
          {/* Phone Number Section End */}

          {/* Specialization Section Start */}
          <div className="space-y-3">
            <label className="block uppercase text-xs font-bold">
              Specialization
            </label>
            <input
              type="text"
              className="input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm"
              placeholder="e.g. Cardiology"
            />
          </div>
          {/* Specialization Section End */}

          {/* Medical License Section Start */}
          <div className="space-y-3">
            <label className="block uppercase text-xs font-bold">
              Medical License Number
            </label>
            <input
              type="text"
              className="input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm"
              placeholder="Enter medical license number"
            />
          </div>
          {/* Medical License Section End */}

          {/* Experience & Fee Section Start */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="space-y-3 flex-1">
              <label className="block uppercase text-xs font-bold">
                Years of Experience
              </label>
              <input
                type="number"
                min="0"
                className="input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm"
                placeholder="e.g. 5"
              />
            </div>

            <div className="space-y-3 flex-1">
              <label className="block uppercase text-xs font-bold">
                Consultation Fee
              </label>
              <input
                type="number"
                min="0"
                className="input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm"
                placeholder="e.g. 1000"
              />
            </div>
          </div>
          {/* Experience & Fee Section End */}

          {/* Clinic / Hospital Section Start */}
          <div className="space-y-3">
            <label className="block uppercase text-xs font-bold">
              Clinic / Hospital Name
            </label>
            <input
              type="text"
              className="input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm"
              placeholder="Enter clinic or hospital name"
            />
          </div>
          {/* Clinic / Hospital Section End */}

          {/* City Section Start */}
          <div className="space-y-3">
            <label className="block uppercase text-xs font-bold">
              City
            </label>
            <input
              type="text"
              className="input w-full focus:border-spacing-x-1.5 focus:border-primary outline-0 focus:shadow-sm"
              placeholder="e.g. Dhaka"
            />
          </div>
          {/* City Section End */}

          {/* Medical Certificate Upload Section Start */}
          <div className="space-y-3">
            <label className="block uppercase text-xs font-bold">
              Upload Medical License / Certificate
            </label>
            <input
              type="file"
              accept="image/*"
              className="file-input w-full focus:border-primary outline-0 focus:shadow-sm"
            />
            <p className="text-xs text-base-content/50">
              Upload a clear image of your medical license or certificate.
            </p>
          </div>
          {/* Medical Certificate Upload Section End */}

          {/* Password Section Start */}
          <div className="space-y-2">
            <label className="block uppercase text-xs font-bold">
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
            <label className="block uppercase text-xs font-bold">
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

        {/* Terms Section Start */}
        <div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer checked:text-primary"
            />
            <p className="text-base-content/60 text-xs font-semibold">
              I agree to the{" "}
              <span className="text-primary">Terms of Service</span> and{" "}
              <span className="text-primary">Privacy Policy</span>
            </p>
          </div>
        </div>
        {/* Terms Section End */}

        {/* Submit Button Section Start */}
        <div className="space-y-4">
          <button
            type="submit"
            className="w-full bg-primary flex items-center justify-center space-x-2 hover:bg-primary/80 active:scale-[0.99] text-white font-medium text-sm py-3 px-4 rounded-xl shadow-xs transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1 cursor-pointer"
          >
            <span>Create Doctor Account</span>
            <MoveRight />
          </button>

          <button className="w-full text-base-content bg-accent/20 flex items-center gap-1 btn"> <span><ShieldCheck size={18} className="text-accent" /></span> <span>Your account will be reviewed and approved within 24-48 hours</span></button>
        </div>
        {/* Submit Button Section End */}
      </form>
    </>
  );
};

export default DoctorRegisterForm;