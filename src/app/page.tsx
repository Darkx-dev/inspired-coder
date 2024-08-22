"use client";
import About from "@/components/(root)/sections/About";
import Collaboration from "@/components/(root)/sections/Collaboration";
import DrawingCursor from "@/components/cursors/DrawingCursor";
import Footer from "@/components/(root)/sections/Footer";
import Header from "@/components/Header";
import Hero from "@/components/(root)/sections/Hero";
import Projects from "@/components/(root)/sections/Projects";
import Skills from "@/components/(root)/sections/Skills";
import React from "react";
import ParticlesCursor from "@/components/cursors/ParticlesCursor";
import NiggaCursor from "@/components/cursors/NiggaCursor";
import Cursor from "@/components/cursors/ParticlesCursor";

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
      {/* <DrawingCursor gradientColors={["#90FF00"]} /> */}
      <ParticlesCursor
        canvasBackground={{ opacity: 0 }}
        particleSize={5}
        particleColor="#90FF00"
        particleDuration={2}
        maxParticles={600}
        particleDensity={3}
        useRandomColors={false}
        idleCircleSize={25}
        glowEffect={true}
        trailEffect={true}
        cursorSize={20}
        cursorColor="rgba(255, 255, 255, 0.5)"
        cursorBorderWidth={2}
        cursorBorderColor="#ffffff"
        interactionConfigs={[
          {
            selector: "button",
            hoverEffect: "grow",
            clickEffect: "burst",
            hoverColor: "#ff00ff",
            clickColor: "#ffff00",
          },
          {
            selector: "a",
            hoverEffect: "shrink",
            clickEffect: "implode",
            hoverColor: "#00ff00",
            clickColor: "#ff0000",
          },
        ]}
      />
    </main>
  );
};

export default Home;
