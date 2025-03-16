import React, { useEffect, useRef } from "react";
import { AnimatedLogo } from "../../assets";
import gsap from "gsap";

export const FooterContent = () => {
  const connectRef = useRef(null);
  const grittyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { opacity: 0, x: -200 },
              {
                opacity: 1,
                delay: 0.5,
                x: 0,
                duration: 0.5,
                ease: "power3.out",
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (connectRef.current) {
      observer.observe(connectRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             gsap.fromTo(
               entry.target,
               { opacity: 0, x: 200 },
               {
                 opacity: 1,
                 delay: 0.5,
                 x: 0,
                 duration: 0.5,
                 ease: "power3.out",
               }
             );
             observer.unobserve(entry.target);
           }
         });
       },
       { threshold: 0.1 }
     );

     if (grittyRef.current) {
       observer.observe(grittyRef.current);
     }

     return () => {
       observer.disconnect();
     };
   }, []);

  return (
    <div className="footer-content">
      <div className="connect" ref={connectRef}>
        <div className="head">Connect with us</div>
        <div className="item">Facebook</div>
        <div className="item">Instagram</div>
        <div className="item">Twitter</div>
        <div className="item">LinkedIn</div>
        <div className="item">YouTube</div>
      </div>

      <div className="logo">
        <AnimatedLogo />
      </div>

      <div className="gritty" ref={grittyRef}>
        <div className="head">The nitty gritties</div>
        <div className="item">Good Things FAQs</div>
        <div className="item">Good Food FAQs</div>
        <div className="item">Good Places</div>
        <div className="item">Careers</div>
        <div className="item">Wholesale</div>
      </div>
    </div>
  );
};
