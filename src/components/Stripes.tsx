"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useLayoutEffect } from "react";

const Stripes = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#stripes",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        // markers: true,
      },
    });
    tl.from("#stripe1", {
      translateX: 600,
      ease: "power1.inOut",
    });
    tl.from(
      "#stripe2",
      {
        translateX: -600,
      },
      "<"
    );
  }, []);

  return (
    <div
      className="text-5xl font-bold text-black text-nowrap  uppercase relative h-32 *:bg-secondary *:flex *:py-4 w-full *:absolute *:left-1/2  *:transform *:-translate-x-1/2 *:-translate-y-1/2"
      id="stripes"
    >
      <div className="-rotate-[4deg] opacity-30" id="stripe1">
        <h1>
          Development • Frontend • Backend • Innovative Solutions • Creative
          Design • Cutting-Edge Technologies • Continuous Learning
        </h1>
        {/* <h1>
          Development • Frontend • Backend • Innovative Solutions • Creative
          Design • Cutting-Edge Technologies • Continuous Learning
        </h1> */}
      </div>
      <div className="rotate-[4deg]" id="stripe2">
        <h1>
          Development • Frontend • Backend • Innovative Solutions • Creative
          Design • Cutting-Edge Technologies • Continuous Learning
        </h1>
        {/* <h1>
          Development • Frontend • Backend • Innovative Solutions • Creative
          Design • Cutting-Edge Technologies • Continuous Learning
        </h1> */}
      </div>
    </div>
  );
};

export default Stripes;
