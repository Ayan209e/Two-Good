import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./PDPImageSection.css";

export const PDPImage = ({ image, className }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <div className={`image-container ${className}`} ref={imgRef}>
      <img src={image} alt={`Product ${image + 1}`} />
    </div>
  );
};
