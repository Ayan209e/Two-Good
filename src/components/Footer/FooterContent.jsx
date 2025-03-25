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
        <a className="item" href="https://www.facebook.com/TwoGoodCo">
          Facebook
        </a>
        <a className="item" href="https://www.instagram.com/twogoodco/">
          Instagram
        </a>
        <a
          className="item"
          href="https://x.com/i/flow/login?redirect_after_login=%2Ftwogoodco"
        >
          Twitter
        </a>
        <a
          className="item"
          href="https://www.linkedin.com/company/twogoodco/?originalSubdomain=au"
        >
          LinkedIn
        </a>
        <a
          className="item"
          href="https://www.youtube.com/channel/UCCfo4CF8hmDUQdcO5_MWONw"
        >
          YouTube
        </a>
      </div>

      <div className="logo">
        <AnimatedLogo />
      </div>

      <div className="gritty" ref={grittyRef}>
        <div className="head">The nitty gritties</div>
        <a className="item" href="/about">About</a>
        <a className="item" href="/impact">Impact</a>
        <a className="item" href="/career">Careers</a>
        <a className="item" href="/catering">Catering</a>
        <a className="item" href="/contact">Contact Us</a>
      </div>
    </div>
  );
};
