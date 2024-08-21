"use client";
import gsap from "gsap";
import React, { useRef } from "react";
import { skills } from "@/data/constants";

const Skills: React.FC = () => {
  const menuRefs: any = []

  const toggleMenu = (index: number) => {
    const menu = menuRefs[index];
    if (menu) {
      const isActive = menu.classList.contains("active");
      isActive ? menu.classList.remove("active") : menu.classList.add("active");
      gsap.to(menu, {
        height: isActive ? "auto" : 0,
        opacity: isActive ? 1 : 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div className="mt-20 px-20 max-md:px-4 min-h-screen">
      <div className="text-center w-full">
        <h3 className="text-secondary font-medium text-xl">Skills</h3>
        <h1 className="text-5xl font-medium tracking-tighter mt-2">
          Tools and Technologies <br />
          That Power My Development
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 mt-32">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex flex-col mb-10">
              <button
                onClick={() => toggleMenu(index)}
                className="flex mb-4 items-center text-nowrap relative font-medium tracking-wider hover:text-black py-2 px-2 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-secondary after:w-full after:bottom-0 after:left-0"
              >
                <h1 className="text-xl space-x-2">
                  <span className="text-secondary text-2xl">{index.toString().padStart(2, "0")}.</span>
                  <span>{skill.category}</span>
                </h1>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </i>
              </button>
              <ul
                ref={(elem) => menuRefs.push(elem)}
                className="grid grid-cols-2  overflow-hidden active *:border *:px-4 *:py-2"
                style={{
                  height: 0,
                  opacity: 0,
                }}
              >
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="hover:text-secondary cursor-default font-medium"
                  >
                    {item}
                  </span>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
