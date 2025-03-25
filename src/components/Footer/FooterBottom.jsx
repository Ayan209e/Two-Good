import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

export const FooterBottom = () => {
  const tncRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { opacity: 0, y: 100 },
              {
                opacity: 1,
                delay: 0.2,
                y: 0,
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

    if (tncRef.current) {
      observer.observe(tncRef.current);
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
              { opacity: 0, y: 200 },
              {
                opacity: 1,
                delay: 0.3,
                y: 0,
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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="footer-bottom">
      <div className="tnc" ref={tncRef}>
        <div>© Two Good Co. 2025</div>
        <div onClick={() => (window.location.href = "/terms-of-use")}>
          Terms of Use
        </div>
        <div onClick={() => (window.location.href = "/privacy-policy")}>
          Privacy Policy
        </div>
      </div>

      <div className="content" ref={contentRef}>
        We are proud and privileged to have our home on this land, and to be
        able to continue the long tradition of community coming together around
        food, begun thousands of years ago by First Nations peoples. As we stand
        together on this unceded land, we acknowledge our First Nations people,
        are the original custodians of this land, and we recognize their deep
        connection to land, water, sky and community which continues today. We
        pay our deep respects to community elders, past, present and emerging,
        for they hold the memories, the traditions, the culture and hopes of
        Aboriginal and Torres Strait Islander peoples. Always was, always will
        be Aboriginal land.
      </div>
    </div>
  );
}
