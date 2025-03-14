import React from "react";
import "./QuoteSection.css";
import { LinkButton } from "../../../components/LinkButton/LinkButton";

export const QuoteSection = () => {
  return (
    <div className="quote-section">
      <div className="heading">
        We believe in people, until they believe in themselves again.
      </div>

      <div className="content">
        <div>
          Everything we do is designed to rebuild self worth and independence,
          in order to break free from the cycle of disadvantage.
        </div>
        <div>
          With every purchase you make with us, you're helping to change the
          course of someone's life; you're walking alongside vulnerable women as
          they find their way home again.
        </div>

        <LinkButton title="Shop to support" href="/" />
      </div>
    </div>
  );
};
