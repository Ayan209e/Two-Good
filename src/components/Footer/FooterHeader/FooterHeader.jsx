import React from "react";
import "./FooterHeader.css";
import { ArrowRight, Enter } from "../../../assets";
import { CircleStroke } from "../../../assets/CircleStroke";
import { useFooterHeader } from "./useFooterHeader";

export const FooterHeader = () => {
  const {
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
  } = useFooterHeader();

  return (
    <div className="footer-header-container">
      <div className="footer-header">
        {!isFocused && !email && (
          <label htmlFor="email" ref={labelRef}>
            Enter your email address for good
            <div className="circle-stroke">
              <CircleStroke />
            </div>
          </label>
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

        <button onClick={handleSubmit} ref={buttonRef}>
          {isFocused || email ? <Enter /> : <ArrowRight />}
        </button>
      </div>

      {error && (
        <div className="error">
          Whoops! Check if your email is correct
        </div>
      )}

      {success && (
        <div className="success">
          You're on the list! Watch out for our next Twos'day Update!
        </div>
      )}
    </div>
  );
};
