import React, { useEffect, useRef, useState } from "react";
import "./section1.css";

const Section1: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollWrapRef = useRef<HTMLUListElement>(null);
  const movieRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const winTop = window.scrollY;
      const adjustedScrollTop = Math.max(0, winTop); // Adjust scroll position

      const winMid = window.innerHeight / 2 + adjustedScrollTop;
      const winBot = window.innerHeight + adjustedScrollTop;

      if (!scrollWrapRef.current) return;

      const scrollItems = scrollWrapRef.current.querySelectorAll("li");
      let inViewIndex = -1;

      // Calculate scroll progress for smooth animations (only for movie section)
      const totalHeight = scrollItems.length * window.innerHeight;
      const progress = Math.min((adjustedScrollTop / totalHeight) * 100, 100);
      setScrollProgress(progress);

      scrollItems.forEach((item, index) => {
        const liHeight = item.offsetHeight;
        const liTop = item.offsetTop;
        const liBot = liTop + liHeight;

        if (liBot <= winMid || liTop >= winBot) {
          // li slides out of viewport, remove inView
          item.classList.remove("inView");
        } else if (liTop <= winMid) {
          // li slides to middle, add inView
          item.classList.add("inView");
          inViewIndex = index;
        }
      });

      // Update current step based on inView element
      const newStep = inViewIndex + 1;
      if (newStep !== currentStep) {
        setCurrentStep(newStep);
        console.log("Current step:", newStep);
      }

      // Parallax effect for background image (only after banner)
      if (bgRef.current) {
        const parallaxOffset = adjustedScrollTop * 0.5;
        bgRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      }

      // Determine scroll direction
      if (winTop > lastScrollTop) {
        // Scrolling down
        console.log("Scrolling down");
      } else {
        // Scrolling up
        console.log("Scrolling up");
      }

      setLastScrollTop(winTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentStep, lastScrollTop]);

  // Update movie class based on current step
  useEffect(() => {
    if (movieRef.current) {
      movieRef.current.className = `movie step-${currentStep}`;

      // Add smooth transitions based on scroll progress
      const storyElement = movieRef.current.querySelector(
        ".story"
      ) as HTMLElement;
      const actorElement = movieRef.current.querySelector(
        ".actor"
      ) as HTMLElement;

      if (storyElement) {
        const storyOpacity = Math.max(
          0,
          Math.min(1, (scrollProgress - 25) / 25)
        );
        storyElement.style.opacity = storyOpacity.toString();
      }

      if (actorElement) {
        const actorOpacity = Math.max(
          0,
          Math.min(1, (scrollProgress - 75) / 25)
        );
        actorElement.style.opacity = actorOpacity.toString();
      }
    }
  }, [currentStep, scrollProgress]);

  return (
    <>
      {/* Animated Movie Section */}
      <div className='movie' ref={movieRef}>
        <div className='story'>
          <div className='story-content'>
            <h2>Wonder Woman</h2>
            <h4>
              Diana, princess of the Amazons, trained to be an unconquerable
              warrior. Raised on a sheltered island paradise, when a pilot
              crashes on their shores and tells of a massive conflict raging in
              the outside world, Diana leaves her home, convinced she can stop
              the threat. Fighting alongside man in a war to end all wars, Diana
              will discover her full powers and her true destiny.
            </h4>
          </div>
        </div>
        <div className='actor'>
          <ul>
            <li>
              <h2>Director</h2>
              <h4>Patty Jenkins</h4>
            </li>
            <li>
              <h2>Writers</h2>
              <h4>Allan Heinberg, Zack Snyder</h4>
            </li>
            <li>
              <h2>Stars</h2>
              <h4>Gal Gadot, Chris Pine</h4>
            </li>
          </ul>
        </div>
      </div>

      <ul className='scroll-wrap' ref={scrollWrapRef}>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      {/* Scroll Progress Indicator */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          background: "rgba(0,0,0,0.7)",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "14px",
          zIndex: 1000,
          fontFamily: "monospace",
        }}
      >
        <span>
          Step: {currentStep} | Progress: {Math.round(scrollProgress)}%
        </span>
      </div>
    </>
  );
};

export default Section1;
