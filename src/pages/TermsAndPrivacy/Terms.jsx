import React, { useEffect, useRef } from "react";
import "./TermsAndPrivacy.css";
import { terms } from "../../constants/terms-privacy";
import gsap from "gsap";

export const Terms = () => {
  const termRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".terms-privacy-head span", {
      y: 200,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".terms-privacy-content-left", {
      y: 300,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      ease: "power3.out",
    });

    gsap.from(".terms-privacy-content-intro", {
      y: 300,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    termRefs.current.forEach((termRef, index) => {
      if (termRef) {
        gsap.fromTo(
          termRef,
          {
            y: 200,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.2 + index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: termRef,
              start: "top 95%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="terms-privacy-wrapper">
      <div className="terms-privacy-head">
        <h1>
          <span>Terms</span>
          <span>of</span>
          <span>Use</span>
        </h1>
      </div>

      <div className="terms-privacy-content">
        <div className="terms-privacy-content-left">
          Thank you for visiting twogood.com.au. We have prepared the below
          information to ensure that your experience on our website is
          enjoyable.
        </div>

        <div className="terms-privacy-content-right">
          <div className="terms-privacy-content-intro">
            Please review the below information and terms of use that govern our
            site. Please note that when you visit our website, this constitutes
            your agreement to be bound by these terms. Should you have any
            questions concerning any of our policies, please do email us
            hello@twogood.com.au
          </div>

          {terms.map((term, index) => (
            <div
              key={index}
              className="term"
              ref={(el) => (termRefs.current[index] = el)}
            >
              <h2>{term.head}</h2>
              {term.desc.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
