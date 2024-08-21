import React, { useRef } from "react";
import CubeIcon from "./illustrations/Cube";
import OutlinedButton from "./buttons/Outlined";
import CircleIcon from "./illustrations/Circle";
import Stripes from "./Stripes";
import LetterFade from "./LetterFade";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const About = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-subtitle",
        scrub: 2,
        start: "top bottom",
        end: "bottom 70%",
      },
    });
    tl.from([".about-head", "#about-subtitle", ".about-btn"], {
      y: 100,
      stagger: 0.05,
    });
  }, []);
  return (
    <div className="min-h-screen px-20 max-md:px-4 pt-10 relative overflow-x-clip">
      <div className="flex justify-between">
        <div className="">
          <div className="overflow-hidden">
            <h3 className="text-secondary font-medium text-xl about-head">
              About Me
            </h3>
          </div>
          <div className="overflow-hidden">
            <h1
              className="text-5xl font-medium tracking-tighter mt-2 overflow-hidden"
              id="about-subtitle"
            >
              I can deliver results that <br /> exceed your expectations.
            </h1>
          </div>
          <div className="mt-12 w-fit about-btn">
            <OutlinedButton title="Hire Me Now" />
          </div>
        </div>
        {/* <div className="relative">
          <CircleIcon className="size-32" color="#90FF00" />
        </div> */}
      </div>
      <LetterFade
        className="mt-10 z-50 text-gray-200 lg:w-1/2 text-start text-lg font-medium ml-auto h-[85vh] tracking-widest"
        highlightWords={["Roshan"]}
      >
        Hi, I&apos;m Roshan, a self-taught Full Stack Developer with over a year
        of hands-on experience in building and designing web applications. While
        I haven&apos;t had the chance to take on internships or professional
        roles yet, my passion for exploring new technologies and pushing
        creative boundaries keeps me constantly learning and growing. I thrive
        on the challenges of turning ideas into reality through code and am
        always eager to dive into the latest tools and frameworks to craft
        innovative solutions.
      </LetterFade>
      <div className=" w-screen h-[60vh]">
        <Stripes />
      </div>
    </div>
  );
};

export default About;
