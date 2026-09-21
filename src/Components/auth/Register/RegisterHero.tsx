import Logo from "@/Components/common/Logo/Logo";
import TrustBadges from "@/Components/common/TrustBadges/TrustBadges";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
const RegisterHero = () => {
  return (

    <div className="h-full bg-secondary w-full px-4 sm:px-6 py-6 overflow-hidden">
    
      <div className="mx-auto flex flex-col h-full justify-between items-center max-w-2xl">
        <div className="w-full flex justify-start flex-col gap-2">
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-lg bg-secondary-content/10 px-3 py-2 text-secondary-content/70 transition-colors hover:bg-secondary-content/15"
          >
            <ArrowLeft size={16} />
            <span className="text-xs">Back to Home</span>
          </Link>
          <Logo onSecondary />
        </div>

        {/* Hero Image Section */}
        <div className="flex flex-col items-center gap-4 w-full">
          <Image
            src="/images/auth/Login-hero-image.png"
            alt="login-hero-image"
            width={500}
            height={400}
            className="w-full h-auto object-contain"
            preload
          />
          <h1 className="text-white text-center text-2xl font-bold">
            Your Health, One Click Away
          </h1>
          <p className="text-gray-200 text-center text-sm">
            Create your free account and start booking appointments in minutes.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <TrustBadges variant="onSecondary" />
        </div>

      </div>
    </div>
  );
};

export default RegisterHero;