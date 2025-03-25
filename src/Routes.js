import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { Catering } from "./pages/Catering/Catering";
import { Contact } from "./pages/Contact/Contact";
import { Impact } from "./pages/Impact/Impact";
import { About } from "./pages/About/About";
import { PDP } from "./pages/PDP/PDP";
import { NotFound } from "./pages/NotFound/NotFound";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import { Career } from "./pages/Career/Career";
import { Terms } from "./pages/TermsAndPrivacy/Terms";
import { PrivacyPolicy } from "./pages/TermsAndPrivacy/PrivacyPolicy";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<Shop />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:slug" element={<PDP />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/terms-of-use" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
