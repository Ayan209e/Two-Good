import React from "react";
import DonationJourney from "./DonationJourney/DonationJourney";

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
      {showSignInMenu ? <div>Sign In Menu</div> : null}
    </div>
  );
};

export default MenuJourney;
