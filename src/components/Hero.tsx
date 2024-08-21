import React from "react";
import CubeIcon from "./illustrations/Cube";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from("#firstname", {
      duration: 1,
      opacity: 0,
      x: "-10em",
    });
    tl.from("#lastname", {
      duration: 1,
      opacity: 0,
      x: '10em',
    
    }, "<");
    tl.from("#paragraph", {
      y: '120%'
    })
  }, []);
  return (
    <div className="px-20 max-md:px-4 min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-clip">
      <div className="z-10">
        <h1 className="text-[12rem] max-md:text-7xl leading-[0.85] font-semibold tracking-tight *:block text-center">
          <span
            className="-translate-x-40 max-md:-translate-x-10"
            id="firstname"
          >
            Roshan
          </span>
          <span className="translate-x-36 max-md:translate-x-10" id="lastname">
            Kumar
          </span>
        </h1>
      </div>
      <p className="text-gray-light text-center text-lg font-medium mt-auto absolute bottom-2 z-10" id="paragraph">
        Hello, my name is Roshan Kumar, nice to meet you I would like to <br />
        welcome you with my portfolio.
      </p>
    </div>
  );
};

export default Hero;
