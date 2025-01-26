import React from "react";

const MenuJourney = ({ showDonationMenu, showSignInMenu }) => {
  return (
    <div className="overlay-menu">
      {showDonationMenu ? <div>Donation Menu</div> : null}
      {showSignInMenu ? <div>Sign In Menu</div> : null}
    </div>
  );
};

export default MenuJourney;
