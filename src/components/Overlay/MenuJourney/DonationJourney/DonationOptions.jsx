import React, { useEffect } from "react";
import "./DonationJourney.css";

const DonationOptions = ({ inputValue, selectedOption, setSelectedOption }) => {
  const options = ["$2", "$4", "$8", "$16", "$32", "$64"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const formattedInputValue = `$${inputValue}`;
    if (options.includes(formattedInputValue)) {
      setSelectedOption(formattedInputValue);
    } else {
      setSelectedOption(null);
    }
  }, [inputValue]);

  return (
    <div className="donation-options">
      {options.map((option) => (
        <div
          key={option}
          className={`option-item ${
            selectedOption === option ? "selected" : ""
          }`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default DonationOptions;
