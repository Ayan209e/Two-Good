import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export const OurApproach = () => {
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.2, x: 300 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.4,
          delay: 0.1,
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 90%",
          },
        }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -300 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          delay: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="our-theory">
      <div className="our-theory-content" ref={contentRef}>
        <h1>EVERY MOMENT IS A NEW OPPORTUNITY FOR LOVE + RESPECT.</h1>

        <p>
          We know that many people healing from crisis have lost faith in
          themselves, and in the world around them. So everything we do - every
          decision we make - is infused with love and care, to restore someone’s
          self worth and dignity.
        </p>
        <p>
          Every meal and gift we donate is a gift of kindness to remind them
          that they are not alone; a message that we see them, we love them, and
          they matter.
        </p>

        <p>
          What happens after that moment, is their choice - but whenever they're
          ready to CHANGE THEIR COURSE, we're ready to walk alongside them.
        </p>
      </div>

      <div className="our-theory-image" ref={imgRef}>
        <img
          src="https://cdn.sanity.io/images/w8f1ak3c/production/9f8edc7d7dfc0323977b37bf3a92aa8b25a52826-1920x1080.png/Impact%20Report%20Designs%20(1).png?rect=667,0,1253,991&fp-x=0.6738013698630139&fp-y=0.4588675474089602&w=1024&h=810&fit=crop&crop=focalpoint&auto=format"
          alt="our approach"
        />
      </div>
    </div>
  );
};
