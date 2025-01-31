import React from "react";
import DonationJourney from "./DonationJourney/DonationJourney";
import SignInJourney from "./SignInJourney/SignInJourney";

const MenuJourney = ({
  showDonationMenu,
  showSignInMenu,
  setShowSignInMenu,
  setShowDonationMenu,
}) => {
  return (
    <div className="overlay-menu">
      {showDonationMenu ? (
        <DonationJourney setShowDonationMenu={setShowDonationMenu} />
      ) : null}
      {showSignInMenu ? (
        <SignInJourney setShowSignInMenu={setShowSignInMenu} />
      ) : null}
    </div>
  );
};

export default MenuJourney;
