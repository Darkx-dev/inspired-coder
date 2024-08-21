import React from "react";
import CubeIcon from "./illustrations/Cube";
import OutlinedButton from "./buttons/Outlined";
import CircleIcon from "./illustrations/Circle";
import Stripes from "./Stripes";

const About = () => {
  return (
    <div className="min-h-screen px-20 pt-10 relative overflow-x-clip">
      <div className="flex justify-between">
        <div>
          <h3 className="text-secondary font-medium text-xl">About Me</h3>
          <h1 className="text-5xl font-medium tracking-tighter mt-2">
            I can deliver results that <br /> exceed your expectations.
          </h1>
          <div className="mt-12 w-fit">
            <OutlinedButton title="Hire Me Now" />
          </div>
        </div>
        {/* <div className="relative">
          <CircleIcon className="size-32" color="#90FF00" />
        </div> */}
      </div>
      <p className="mt-10 z-50 text-gray-200 lg:w-1/2 tracking-wide font-medium text-justify ml-auto h-[85vh]">
        Hi, I'm <span className="text-secondary">Roshan</span>, a self-taught{" "}
        <span className="text-secondary">Full Stack Developer</span> with over a
        year of hands-on experience in building and designing{" "}
        <span className="text-secondary">web</span> applications. While I
        haven't had the chance to take on internships or professional roles yet,
        my passion for{" "}
        <span className="text-secondary">exploring new technologies</span> and
        pushing creative boundaries keeps me constantly learning and growing. I
        thrive on the challenges of turning ideas into reality through code and
        am always eager to dive into the latest{" "}
        <span className="text-secondary">tools and frameworks</span> to craft
        innovative solutions.
      </p>
      <div className="absolute bottom-10 left-0 w-screen">
        <Stripes />
      </div>
    </div>
  );
};

export default About;
