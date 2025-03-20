import React, { useEffect, useRef } from "react";
import "./CheckoutLeftSection.css";
import { Input } from "../../../components/Input/Input";
import gsap from "gsap";

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

  const customerRef = useRef(null);
  useEffect(() => {
    if (customerRef.current) {
      gsap.fromTo(
        customerRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, [open]);

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
        <div className="customer-form" ref={customerRef}>
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
