import React, { useRef, useState } from "react";
import "./FooterHeader.css";
import { ArrowRight, Enter } from "../../../assets";

export const FooterHeader = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const inputRef = useRef(null);

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

  return (
    <div className="footer-header-container">
      <div className="footer-header">
        {!isFocused && !email && (
          <label htmlFor="">Enter your email address for good</label>
        )}

        <input
          type="email"
          id="email"
          ref={inputRef}
          value={email}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />

        <button onClick={handleSubmit}>
          {isFocused || email ? <Enter /> : <ArrowRight />}
        </button>
      </div>

      {error && (
        <div className="error">Whoops! Check if your email is correct</div>
      )}

      {success && (
        <div className="success">
          You're on the list! Watch out for our next Twos'day Update!
        </div>
      )}
    </div>
  );
};
