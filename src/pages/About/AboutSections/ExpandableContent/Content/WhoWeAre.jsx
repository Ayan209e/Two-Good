import { useEffect } from "react";
import "./Content.css";
import gsap from "gsap";

export const WhoWeAre = () => {
  useEffect(() => {
    gsap.fromTo(
      ".who-we-are-head",
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 0.5, delay: 0.2 }
    );

    gsap.fromTo(
      ".who-we-are-image",
      { opacity: 0, x: 200, scale: 0.5 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".who-we-are-image",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".who-we-are-desc-first-child",
      { opacity: 0, y: 300 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".who-we-are-desc-first-child",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".who-we-are-desc-last-child",
      { opacity: 0, y: 300 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".who-we-are-desc-last-child",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="who-we-are-wrapper">
      <div className="who-we-are">
        <div className="who-we-are-head">
          We’re the people who believe in second chances. Who believe that we
          are better together. Who believe in people, until they believe in
          themselves again.
        </div>

        <div className="who-we-are-image">
          <img
            src="https://cdn.sanity.io/images/w8f1ak3c/production/c005cfd171f055933d5e944f0f2795a0627916f9-7714x5143.jpg/HQ-Group-Shot-Jes-Lindsay-4443.jpg?w=1920&h=1280&auto=format"
            alt="who-we-are-image"
          />
        </div>

        <div className="who-we-are-desc">
          <div className="who-we-are-desc-first-child">
            <p>
              It all started when our founder Rob Caslick and two mates wheeled
              up a BBQ to Kings Cross to cook the very best, wholesome food for
              those living rough. Their ’anything but snags’ proposition stood
              out and it wasn’t long before they garnered a loyal following.
              ‘How can we scale from here?’, they thought. That’s when the Buy
              1, Give 1’ model came into play. Rob took a jar around the corner
              to see if a local domestic violence refuge would like some lunches
              too and it grew organically from there.{" "}
            </p>
            <p>
              We have since collaborated with some of the country’s best chefs
              to deliver the best meals we can, to domestic violence shelters
              and people in need. It didn’t take long for our ‘Buy 1, Give 1’
              idea to extend to luxury gift packs and self care essentials,
              designed to spark a sense of self-worth at a time of intense
              vulnerability.
            </p>
          </div>

          <div className="who-we-are-desc-last-child">
            <p>
              Social employment, however, is where we create the greatest
              impact. Through our flagship ‘Work Work’ employment pathways
              programs, we hire the women from the shelters we serve, empowering
              them to re-establish their self-belief and independence, while
              bridging the ‘love and skills’ gap in their journey to re-entering
              the workforce after living in crisis.
            </p>
            <p>
              Basically, we’re the people who just want to do some good. And we
              reckon you’re one of those people, too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
