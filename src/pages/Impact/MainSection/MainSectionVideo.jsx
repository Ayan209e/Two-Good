import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export const MainSectionVideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const handleVideoClick = () => {
    setIsMuted(!isMuted);
    setShowControls(!showControls);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 230;
    }

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
    <div className="impact-section-video-container">
      <video
        ref={videoRef}
        className="main-section-video"
        loop
        autoPlay
        playsinline
        muted={isMuted}
        controls={showControls}
        src="/assets/video.mp4"
        onClick={handleVideoClick}
      ></video>

      <h2>Doing good with two good.</h2>
    </div>
  );
};
