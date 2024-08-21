import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Header = () => {
  useGSAP(() => {
    gsap.from("#header", {
      opacity: 0,
      y: -200,
      duration: 1.5
    });
  });
  return (
    <header
      className="flex items-center w-full px-20 max-md:px-4 h-20"
      id="header"
    >
      <div className="flex">
        <h1 className="text-2xl font-bold text-secondary">Roshan</h1>
      </div>
      <nav className="ml-16">
        <ul className="flex *:px-2 hover:*:text-secondary *:transition-colors  max-md:hidden">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <a
        href="#"
        className="border w-fit px-6 py-3 ml-auto hover:text-secondary hover:border-secondary transition-colors"
      >
        <span>Get in Touch</span>
      </a>
    </header>
  );
};

export default Header;
