import React, { useEffect, useRef, useState } from "react";
import "./MainSection.css";
import gsap from "gsap";
import ArrowRight from "../../../assets/ArrowRight";

const impactParameters = [
  { title: "In wages through Work Work", value: "$2,480,208" },
  { title: "Hours of paid employment through Work Work", value: "83,787" },
  { title: "Women employed through Work Work", value: 157 }, // Number
  { title: "Meals Donated", value: "2,92,250" },
  { title: "Good things donations", value: "19,211" },
  { title: "South Coast donation runs to regional refuges", value: 8 }, // Number
];

export const ImpactParameters = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayValue, setDisplayValue] = useState(impactParameters[0].value);
  const counterRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const currentValue = impactParameters[currentIndex].value;
    const numericalValue = parseInt(
      String(currentValue).replace(/[^0-9]/g, ""),
      10
    );

    if (!isNaN(numericalValue)) {
      let obj = { value: 0 };

      gsap.to(obj, {
        value: numericalValue,
        duration: 1.5,
        ease: "power1.inOut",
        onUpdate: function () {
          setDisplayValue(formatValue(obj.value, currentValue));
        },
      });
    } else {
      setDisplayValue(currentValue);
    }
  }, [currentIndex]);

  const formatValue = (value, originalValue) => {
    const formattedValue = Math.ceil(value).toLocaleString();
    return String(originalValue).includes("$")
      ? `$${formattedValue}`
      : formattedValue;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % impactParameters.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + impactParameters.length) % impactParameters.length
    );
  };

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
  }, [currentIndex]);

  return (
    <div className="impact-parameters">
      <div className="impact-counter" ref={counterRef}>
        {displayValue}
      </div>

      <div className="impact-carousel">
        <div className="impact-carousel-controls">
          <div onClick={handlePrev} className="impact-previous">
            <ArrowRight />
          </div>
          <div onClick={handleNext} className="impact-next">
            <ArrowRight />
          </div>
        </div>

        <div className="impact-title" ref={titleRef}>
          {impactParameters[currentIndex].title}
        </div>
      </div>
    </div>
  );
};
