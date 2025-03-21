import gsap from "gsap";
import { useEffect, useState } from "react";

export const MainSectionVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const handleVideoClick = () => {
    setIsMuted(!isMuted);
    setShowControls(!showControls);
  };

  useEffect(() => {
    // Top Animation
    gsap.fromTo(
      ".main-section-video",
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".main-section-video",
          start: "top 100%",
        },
      }
    );
  }, []);

  return (
    <video
      className="main-section-video"
      loop
      autoPlay
      playsinline
      muted={isMuted}
      controls={showControls}
      src="/assets/video.mp4"
      onClick={handleVideoClick}
    ></video>
  );
};
