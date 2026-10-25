import React from "react";
import HeroRight from "./HeroRight/HeroRight";
import HeroLeft from "./HeroLeft/HeroLeft";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
      {/* Hero Left Side */}
      <div>
        <HeroLeft />
      </div>

      {/* Hero Right Side */}
      <div>
        <HeroRight />
      </div>
    </div>
  );
};

export default Hero;
