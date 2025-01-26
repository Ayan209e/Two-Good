import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./DonationJourney.css";
import { CaretUp, BlackHearts } from "../../../../assets";
import DonationTab from "./DonationTab";
import DonationOptions from "./DonationOptions";

const DonationJourney = ({ setShowDonationMenu }) => {
  const donationJourneyRef = useRef(null);
  const [inputValue, setInputValue] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeTab, setActiveTab] = useState("One-Time");
  const [showThanksMessage, setShowThanksMessage] = useState(false);

  useEffect(() => {
    gsap.from(donationJourneyRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const regex = /^\d*\.?\d{0,2}$/; // Regular expression to match up to two decimal places
    if (regex.test(value)) {
      setInputValue(value);
    }
  };

  useEffect(() => {
    setShowThanksMessage(false);
  }, [selectedOption, inputValue, activeTab]);

  const handleDonateClick = () => {
    setShowThanksMessage(true);
    setTimeout(() => {
      setShowThanksMessage(false);
    }, 300000);
  };

  const formatCurrency = (value) => {
    return value?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const formattedInputValue = formatCurrency(inputValue);

  return (
    <div className="donation-journey" ref={donationJourneyRef}>
      <div className="back-to-menu" onClick={() => setShowDonationMenu(false)}>
        Back to Menu
        <CaretUp />
      </div>
      <div className="donation-header">
        Thank you for donating to the Two Good Foundation. You are helping to
        change the course of a woman's life for good.
      </div>
      <DonationTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <DonationOptions
        inputValue={inputValue}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className="donation-input">
        <input
          type="number"
          inputMode="decimal"
          pattern="\d*"
          value={inputValue}
          onChange={handleInputChange}
        />
        <span className="dollar">$</span>
        {inputValue || selectedOption ? (
          <button className="donate-button" onClick={handleDonateClick}>
            Donate {selectedOption || `$${formattedInputValue}`}
          </button>
        ) : null}
      </div>

      {showThanksMessage ? (
        <div className="thanks">
          <div>Thank You For Donating!</div>
          <div className="transaction">
            <div>You Donated</div>
            <div className="summary">
              <div className="amount">
                {selectedOption || `$${formattedInputValue}`}
              </div>
              <div className="tab">{activeTab}*</div>
            </div>
            <div className="hearts">
              <BlackHearts />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DonationJourney;
