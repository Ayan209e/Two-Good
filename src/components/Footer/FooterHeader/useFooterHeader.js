import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export const useFooterHeader = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const inputRef = useRef(null);
  const labelRef = useRef(null);
  const buttonRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!email) {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError(true);
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setError(false);
    setEmail("");
    setIsFocused(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }

    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { opacity: 0, x: -500 },
              {
                opacity: 1,
                delay: 0.2,
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

    if (labelRef.current) {
      observer.observe(labelRef.current);
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
              { opacity: 0, x: 100 },
              {
                opacity: 1,
                delay: 0.2,
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

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    isFocused,
    error,
    success,
    email,
    inputRef,
    labelRef,
    buttonRef,
    handleFocus,
    handleBlur,
    handleChange,
    handleSubmit,
    handleKeyPress,
  };
};
