import React, { useEffect, useRef } from "react";
import { testimonialsContent } from "../../../../constants/impact";
import gsap from "gsap";

export const Testimonials = () => {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    if (h1Ref.current) {
      gsap.fromTo(
        h1Ref.current,
        { opacity: 0, x: 300 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: h1Ref.current,
            start: "top 85%",
          },
        }
      );
    }

    if (h2Ref.current) {
      gsap.fromTo(
        h2Ref.current,
        { opacity: 0, x: 300 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: h2Ref.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="testimonials">
      <h1 ref={h1Ref}>
        The narrative of Two Good Co is far reaching; our touch points are broad
        in their impact and experience. To fully understand the fabric of Two
        Good Co, we ask everyone in our community to share their stories.
      </h1>

      <h2 ref={h2Ref}>
        We can’t tell our story without telling theirs. Browse through them and
        take the time to explore our world; each adds another layer to the Two
        Good experience, and every perspective adds another dimension to who we
        are and what we mean to the world.
      </h2>

      <div className="testimonials-grid">
        {testimonialsContent.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const { name, desc, image, date, color } = testimonial;
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.5, y: 100 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          delay: 0.1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="impact-testimonial-card" ref={cardRef}>
      <img src={image} alt={name} />

      <div
        className="impact-testimonial-content"
        style={{ backgroundColor: color }}
      >
        <div className="impact-testimonial-date">{date}</div>

        <div className="impact-testimonial-text">
          <h1>{desc}</h1>
          <h2>-{name}</h2>
        </div>
      </div>
    </div>
  );
};
