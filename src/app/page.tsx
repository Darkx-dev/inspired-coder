import About from "@/components/About";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Collaboration />
      <Footer />
    </main>
  );
};

export default Home;
