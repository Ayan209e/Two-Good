import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedLogo = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll("path");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              paths,
              { opacity: 0, scale: 0 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                delay: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)",
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(svgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width="216"
      height="215"
      viewBox="0 0 216 215"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <path
        d="M51.7757 0C38.0521 0 24.8906 5.43423 15.1866 15.1072C5.48261 24.7802 0.0309982 37.8997 0.0309982 51.5794C0.0309982 65.2591 5.48261 78.3785 15.1866 88.0515C24.8906 97.7245 38.0521 103.159 51.7757 103.159C65.4992 103.159 78.6607 97.7245 88.3647 88.0515C98.0687 78.3785 103.52 65.2591 103.52 51.5794C103.52 37.8997 98.0687 24.7802 88.3647 15.1072C78.6607 5.43423 65.4992 0 51.7757 0Z"
        fill="black"
        data-svg-origin="51.775497406721115 51.579498291015625"
        transform="matrix(1,0,0,1,0,0)"
      ></path>

      <path
        d="M163.911 0C150.187 0 137.026 5.43423 127.322 15.1072C117.618 24.7802 112.166 37.8997 112.166 51.5794C112.166 65.2591 117.618 78.3785 127.322 88.0515C137.026 97.7245 150.187 103.159 163.911 103.159C177.634 103.159 190.796 97.7245 200.5 88.0515C210.204 78.3785 215.655 65.2591 215.655 51.5794C215.655 37.8997 210.204 24.7802 200.5 15.1072C190.796 5.43423 177.634 0 163.911 0Z"
        fill="black"
        data-svg-origin="163.9104995727539 51.579498291015625"
        transform="matrix(1,0,0,1,0,0)"
      ></path>

      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 129.002L17.3035 111.753L51.795 146.135L86.2649 111.775L103.568 129.023L69.0982 163.383L103.562 197.737L86.2586 214.985L51.7947 180.631L17.3099 215.006L0.00634766 197.758L34.4914 163.383L0 129.002Z"
        fill="black"
        data-svg-origin="51.784000396728516 163.37949752807617"
        transform="matrix(1,0,0,1,0,0)"
      ></path>

      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M112.128 128.988L129.431 111.739L163.923 146.121L198.393 111.761L215.696 129.009L181.226 163.369L215.69 197.722L198.386 214.971L163.923 180.617L129.438 214.992L112.134 197.744L146.619 163.369L112.128 128.988Z"
        fill="black"
        data-svg-origin="163.9119987487793 163.3655014038086"
        transform="matrix(1,0,0,1,0,0)"
      ></path>
    </svg>
  );
};

export default AnimatedLogo;
