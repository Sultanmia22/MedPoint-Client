import Logo from "@/Components/common/Logo/Logo";
import TrustBadges from "@/Components/common/TrustBadges/TrustBadges";
import Image from "next/image";
import React from "react";

const LoginHero = () => {
  return (

    <div className="min-h-screen bg-secondary w-full px-4 sm:px-6 py-6">
    
      <div className="mx-auto flex flex-col h-full justify-between items-center max-w-2xl">
        <div className="w-full flex justify-start">
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
            Book appointments with 500+ verified doctors across 50+ specialties.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <TrustBadges variant="onSecondary" />
        </div>

      </div>
    </div>
  );
};

export default LoginHero;