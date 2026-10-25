import React from "react";

const Header = () => {
  return (
    <div>
      <div className="Process-Header-Container flex flex-col justify-center items-center gap-3">
        <div>
          <span className=" uppercase bg-info/20 px-3 py-1 text-info text-sm font-semibold rounded-full">
            SIMPLE PROCESS
          </span>
        </div>

        <div>
          <h1>How It Works</h1>
        </div>

        <div>
          <p className="text-base leading-7 text-base-content/70 sm:text-lg text-center">
            Book your doctor consultation in three simple steps and receive
            quality care quickly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
