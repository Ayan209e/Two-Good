import React, { useEffect } from "react";
import "./Contact.css";
import gsap from "gsap";
import ArrowRight from "../../assets/ArrowRight";

export const Contact = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".contact-header span", {
      y: 200,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.to(".contact-header", {
      ease: "none",
      scrollTrigger: {
        trigger: ".contact-header",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.fromTo(
      ".contact-section-left",
      { opacity: 0, x: -500 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.6,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".contact-section-right",
      { opacity: 0, x: 500 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.7,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="contact-section">
      <div className="contact-header">
        <h1>
          <span>Wanna</span> <span>Get</span>
        </h1>
        <h1>
          <span>In</span> <span>Touch?</span>
        </h1>
      </div>

      <div className="contact-section-content">
        <div className="contact-section-left">
          <div className="contact-section-work">
            <h1>Work With Us</h1>

            <div>
              We’re on a mission to employ, empower and change the course of the
              lives of 80 vulnerable women each year, year on year.
            </div>

            <div>
              We’re aiming to get there in 2023...if you think you can help us
              reach our goal, we warmly invite you to Join Our Table.
            </div>

            <a href="/career">
              View Open Seats
              <div className="arrow-right">
                <ArrowRight />
              </div>
            </a>
          </div>

          <div className="contact-section-contact">
            <h1>Get in touch</h1>

            <div className="contact-links">
              <a
                href="mailto:orders@twogood.com.au"
                target="_blank"
                rel="noreferrer noopener"
              >
                Website & Wholesale Orders
                <div className="arrow-right">
                  <ArrowRight />
                </div>
              </a>

              <a
                href="mailto:stories@twogood.com.au"
                target="_blank"
                rel="noreferrer noopener"
              >
                Media & Marketing
                <div className="arrow-right">
                  <ArrowRight />
                </div>
              </a>

              <a
                href="mailto:programs@twogood.com.au"
                target="_blank"
                rel="noreferrer noopener"
              >
                Programs & Community Partners
                <div className="arrow-right">
                  <ArrowRight />
                </div>
              </a>

              <a
                href="mailto:sydneycatering@twogood.com.au"
                target="_blank"
                rel="noreferrer noopener"
              >
                Sydney Catering
                <div className="arrow-right">
                  <ArrowRight />
                </div>
              </a>

              <a
                href="mailto:hello@twogood.com.au"
                target="_blank"
                rel="noreferrer noopener"
              >
                Corporate Team Building Inquiries
                <div className="arrow-right">
                  <ArrowRight />
                </div>
              </a>

              <a
                href="mailto:hello@twogood.com.au"
                target="_blank"
                rel="noreferrer noopener"
              >
                General Enquiries
                <div className="arrow-right">
                  <ArrowRight />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-section-right">
          <img
            src="https://cdn.sanity.io/images/w8f1ak3c/production/509ca87625a9ce320e68eb0b0a62c644b4f0f634-1136x1388.png/image.png?w=1024&h=1251&auto=format"
            alt="contact-section-img"
          />
        </div>
      </div>
    </div>
  );
};
