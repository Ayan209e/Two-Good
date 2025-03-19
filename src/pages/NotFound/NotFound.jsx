import React from "react";
import "./NotFound.css";
import { CaretRight } from "../../assets";

export const NotFound = () => {
  return (
    <div className="not-found">
      <section className="scroll-wrapper">
        <div className="scroll">{Array(10).fill(<h1>404</h1>)}</div>
        <div className="scroll bottom">
          {Array(10).fill(<h1>Page Not Found!</h1>)}
        </div>
      </section>

      <div className="content">
        <div className="desc">Oops! The page seems to be missing.</div>

        <div className="cta">
          <div className="cta-icon">
            <CaretRight />
          </div>
          <a href="/">Back to home</a>
        </div>
      </div>
    </div>
  );
};
