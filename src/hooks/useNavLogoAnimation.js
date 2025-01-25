import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const useNavLogoAnimation = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(true);
  const twoGoodRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const navLinksRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight / 10) {
      setShowLogo(true);
      setShowNavLinks(false);
    } else {
      setShowLogo(false);
      setShowNavLinks(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showLogo) {
      gsap.to(twoGoodRef.current, { y: -100, opacity: 0, duration: 0.7 });
      gsap.fromTo(
        logoRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
    } else {
      gsap.to(logoRef.current, { y: 100, opacity: 0, duration: 0.7 });
      gsap.fromTo(
        twoGoodRef.current,
        { y: -150, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      );
    }
  }, [showLogo]);

  useEffect(() => {
    if (showNavLinks) {
      gsap.to(navLinksRef.current, { y: 0, opacity: 1, duration: 0.5 });
    } else {
      gsap.to(navLinksRef.current, { y: -100, opacity: 0, duration: 0.5 });
    }
  }, [showNavLinks]);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );
  }, []);

  return { twoGoodRef, logoRef, showLogo, navRef, navLinksRef };
};

export default useNavLogoAnimation;
