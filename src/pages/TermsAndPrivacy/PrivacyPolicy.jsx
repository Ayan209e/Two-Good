import React, { useEffect, useRef } from "react";
import { privacy } from "../../constants/terms-privacy";
import gsap from "gsap";

export const PrivacyPolicy = () => {
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

    gsap.from(".terms-privacy-content-intro1", {
      y: 300,
      opacity: 0,
      duration: 0.5,
      delay: 0.05,
      ease: "power3.out",
    });

    gsap.from(".terms-privacy-content-intro2", {
      y: 300,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      ease: "power3.out",
    });

    gsap.from(".terms-privacy-content-intro3", {
      y: 300,
      opacity: 0,
      duration: 0.5,
      delay: 0.15,
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
          <span>Privacy</span>
          <span>Policy</span>
        </h1>
      </div>

      <div className="terms-privacy-content">
        <div className="terms-privacy-content-left">
          We take the privacy of our partners, supporters, online visitors,
          clients, suppliers and other external third parties Two Good Co
          interacts with, seriously and we will only collect and use your
          personal information as outlined.
        </div>

        <div className="terms-privacy-content-right">
          <div className="terms-privacy-content-intro1">
            Our Privacy Statement fully complies with the Privacy Act 1988 and
            represents the industry’s best practice.
          </div>

          <div className="terms-privacy-content-intro2">
            This Privacy Policy (Policy) applies to all of Two Good Co Pty Ltd
            and Two Good Foundation Limited known together as Two Good Co. It
            sets out Two Good Co’s policy on the management of personal
            information. Personal information is any sort of information or an
            opinion about an identified individual, or an individual who is
            reasonably identifiable, whether true or not (Personal Information).
            A sub-category of Personal Information is sensitive information.
            Sensitive information includes information of a particularly
            sensitive nature, including information relating to an individual’s
            health (physical and mental) and genetics and information about an
            individual’s racial or ethnic origins, political opinions,
            membership of a trade union or political association, religious
            beliefs or affiliations, philosophical beliefs, sexual preferences
            or criminal record (Sensitive Information).
          </div>

          <div className="terms-privacy-content-intro3">
            This Policy does not apply to Two Good Co’s employee records and is
            subject to a separate Policy to ensure privacy is maintained in
            accordance with applicable privacy laws.
          </div>

          {privacy.map((term, index) => (
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
