import React, { useRef, useEffect } from "react";
import { gsap, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  triggerElement?: string;
  triggerPosition?: "top" | "bottom" | "center";
  triggerStart?: string;
  triggerEnd?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 50,
  direction = "left",
  triggerElement,
  triggerPosition = "top",
  triggerStart = "top",
  triggerEnd = "bottom",
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const cloneElement = cloneRef.current;
    if (!marqueeElement || !cloneElement) return;

    const marqueeWidth = marqueeElement.offsetWidth;
    const containerWidth = marqueeElement.parentElement?.offsetWidth || 0;

    let tl = gsap.timeline({
      repeat: -1,
      paused: true,
      scrollTrigger: {
        trigger: triggerElement,
        start: triggerStart,
        end: triggerEnd,
        scrub: true,
        toggleActions: "play none none reverse",
        // anticipatePin: 1,
      },
      defaults: {
        duration: speed,
      },
    });

    if (direction === "left") {
      tl.to(marqueeElement, {
        x: -marqueeWidth,
        ease: Power0.easeNone,
      }).to(
        cloneElement,
        {
          x: -marqueeWidth,
          ease: Power0.easeNone,
        },
        0
      );
    } else {
      tl.to(marqueeElement, {
        x: containerWidth,
        ease: Power0.easeNone,
      }).to(
        cloneElement,
        {
          x: containerWidth,
          ease: Power0.easeNone,
        },
        0
      );
    }

    return () => {
      tl.kill();
    };
  }, [
    speed,
    direction,
    triggerElement,
    triggerPosition,
    triggerStart,
    triggerEnd,
  ]);

  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <div ref={marqueeRef} style={{ display: "inline-block" }}>
        {children}
      </div>
      <div ref={cloneRef} style={{ display: "inline-block" }}>
        {children}
      </div>
    </div>
  );
};

export default Marquee;
