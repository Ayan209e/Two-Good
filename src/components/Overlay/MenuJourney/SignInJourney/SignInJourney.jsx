import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useDispatch } from "react-redux";
import "./SignInJourney.css";
import { CaretUp } from "../../../../assets";
import { setIsLoggedIn, setUserEmail } from "../../../../store/action";

const SignInJourney = ({ setShowSignInMenu }) => {
  const [showSignInJourney, setShowSignInJourney] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const signInJourneyRef = useRef(null);

  const handleSignIn = () => {
    dispatch(setIsLoggedIn(true));
    dispatch(setUserEmail(email));
    setEmail("");
    setPassword("");
    window.location.href = "/";
  };

  useEffect(() => {
    gsap.from(signInJourneyRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }, [showSignInJourney]);

  return (
    <div className="signin-journey" ref={signInJourneyRef}>
      <div className="back-to-menu" onClick={() => setShowSignInMenu(false)}>
        Back to Menu
        <CaretUp />
      </div>
      {showSignInJourney ? (
        <div className="signin-form">
          <div className="signin-header">Sign In</div>
          <div className="signin-fields">
            <div className="signin-input">
              <input
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="signin-input">
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="signin-button" onClick={handleSignIn}>
              Sign In
            </button>
          </div>
          <div className="signup-cta">
            Need an account?{" "}
            <button onClick={() => setShowSignInJourney(false)}>Sign Up</button>
          </div>
        </div>
      ) : (
        <div className="signin-form">
          <div className="signin-header">Sign Up</div>
          <div className="signin-fields">
            <div className="signin-input">
              <input
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="signin-input">
              <input
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="signin-input">
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="signin-button" onClick={handleSignIn}>
              Sign Up
            </button>
          </div>
          <div className="signup-cta">
            Already have an account?{" "}
            <button onClick={() => setShowSignInJourney(true)}>Sign In</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInJourney;
