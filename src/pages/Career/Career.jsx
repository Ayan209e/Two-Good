import React, { useEffect } from "react";
import "./Career.css";
import gsap from "gsap";

export const Career = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".career-header span", {
      y: 200,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.to(".career-header", {
      ease: "none",
      scrollTrigger: {
        trigger: ".career-header",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.fromTo(
      ".career-content",
      { opacity: 0, x: -500 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="career-section-wrapper">
      <div className="career-section">
        <div className="career-header">
          <h1>
            <span>Work</span> <span>with</span> <span>us</span>
          </h1>
        </div>

        <div className="career-content">
          <p>
            Two Good Co believes in people until they believe in themselves
            again.
          </p>
          <p>
            Through the creation of beautiful, high quality food and products,
            we support, empower and employ women with lived experience of
            domestic violence and homelessness.
          </p>
          <p>
            We’re on a mission to employ, train and empower 60 vulnerable women
            each year, year on year. To get there, we’re going to need your
            help.
          </p>
        </div>
      </div>

      <section className="career-scroll-wrapper">
        <div className="career-scroll">
          {Array(30)
            .fill()
            .map((_, index) => (
              <h1 key={`sorry-${index}`}>Sorry!...</h1>
            ))}
        </div>
        <div className="career-scroll bottom">
          {Array(30)
            .fill()
            .map((_, index) => (
              <h1 key={`no-${index}`}>No Openings at the moment!</h1>
            ))}
        </div>
      </section>
    </div>
  );
};
