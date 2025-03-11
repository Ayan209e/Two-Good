import gsap from "gsap";
import { useEffect, useRef } from "react";

export const useFeatureSectionAnimation = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    const cta = ctaRef.current;

    // Image moves faster on scroll
    gsap.to(img, {
      y: 0, // Move the image up faster
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 2, // Smooth effect
      },
    });

    // CTA moves slower on scroll
    gsap.to(cta, {
      y: 80, // Moves slightly compared to the image
      ease: "power1.out",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1, // Slower effect than the image
      },
    });
  }, []);

  return { containerRef, imgRef, ctaRef };

};
