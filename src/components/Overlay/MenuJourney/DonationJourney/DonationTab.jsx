import React from "react";
import "./DonationJourney.css";

const DonationTab = ({ activeTab, setActiveTab }) => {
  const tabs = ["One-Time", "Weekly", "Monthly"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getDonationMessage = (type) => {
    switch (type) {
      case "One-Time":
        return "Donating Once";
      case "Weekly":
        return "Donating Every Week";
      case "Monthly":
        return "Donating Every Month";
      default:
        return "Donating";
    }
  };

  return (
    <div className="donation-tab-wrapper">
      <h2>{getDonationMessage(activeTab)}</h2>
      <div className="donation-tab">
        {tabs.map((tab, index) => (
          <div
            key={tab}
            className={`tab-item 
            ${activeTab === tab ? "active" : ""} 
            ${index === 0 ? "first" : ""} 
            ${index === tabs.length - 1 ? "last" : ""}
            `}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationTab;
