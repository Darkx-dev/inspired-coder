import React from "react";
import CubeIcon from "./illustrations/Cube";

const Hero = () => {
  return (
    <div className="px-20 min-h-[calc(100vh-5rem)] flex items-center justify-center relative">
      {/* <CubeIcon className="absolute size-[32rem] rotate-45" color="#90FF00" /> */}
      <div className="z-10">
        <h1 className="text-[12rem] leading-[0.85] font-semibold tracking-tight *:block text-center">
          <span className="-translate-x-40">Roshan</span>
          <span className="translate-x-36">Kumar</span>
        </h1>
      </div>
        <p className="text-gray-light text-center font-medium mt-auto absolute bottom-2 z-10">
          Hello, my name is Roshan Kumar, nice to meet you I would like to{" "}
          <br />
          welcome you with my portfolio.
        </p>
    </div>
  );
};

export default Hero;
