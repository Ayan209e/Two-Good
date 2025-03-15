import { useEffect, useRef, useState } from "react";
import { getShopHeaderTextByPath } from "../../../utils/shop.utils";
import gsap from "gsap";

export const useShopHeader = () => {
  const pathName = window.location.pathname;
  const headerText = getShopHeaderTextByPath(pathName);

  let headerTitle = pathName.replace("/shop/", "").toUpperCase();
  if (headerTitle === "/SHOP" || headerTitle === "/SHOP/")
    headerTitle = "THINGS";

  const [headerOverlay, setHeaderOverlay] = useState(false);

  const toggleOverlay = () => {
    setHeaderOverlay(!headerOverlay);
    document.body.classList.toggle("shop-header-overlay-open", !headerOverlay);
  };

  const goodRef = useRef(null);
  const titleRef = useRef(null);
  const headerTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      goodRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: -0, duration: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: -0, duration: 0.6, ease: "power3.out", delay: 0.5 }
    );

    gsap.fromTo(
      headerTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: -0, duration: 0.6, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return {
    headerText,
    headerTitle,
    headerOverlay,
    setHeaderOverlay,
    toggleOverlay,
    goodRef,
    titleRef,
    headerTextRef,
  };
};
