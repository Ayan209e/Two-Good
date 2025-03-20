import React from "react";
import "./CheckoutLeftSection.css";
import { Input } from "../../../components/Input/Input";

export const CustomerForm = ({
  defaultEmail,
  open,
  email,
  setEmail,
  handleEmailSubmit,
  toggleEdit,
  customerFormSubmitted,
  isCustomerFormValid,
}) => {
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="customer-form-wrapper">
      <div className="checkout-content-heading">
        <div className="checkout-content-desc">
          <h1>Customer</h1>
          {customerFormSubmitted && !open && email && (
            <div className="form-summary">{email}dsfdsf</div>
          )}
        </div>
        {customerFormSubmitted && !open && (
          <div className="edit-btn" onClick={toggleEdit}>
            Edit
          </div>
        )}
      </div>

      {open && (
        <div className="customer-form">
          <Input
            label="Email"
            onChange={handleInputChange}
            type="email"
            defaultValue={defaultEmail}
          />
          <button onClick={handleEmailSubmit} disabled={!isCustomerFormValid}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
};
