import React, { useEffect, useRef } from "react";
import { Input } from "../../../components/Input/Input";
import gsap from "gsap";

export const ShippingForm = ({
  defaultValues,
  open,
  shippingForm,
  setShippingForm,
  handleShippingFormSubmit,
  toggleEdit,
  shippingFormSubmitted,
  isShippingFormValid,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingForm({ ...shippingForm, [name]: value });
  };

  const {
    firstName,
    lastName,
    phoneNumber,
    address,
    suburb,
    state,
    postalCode,
    country,
  } = shippingForm;

  const {
    firstName: defaultFirstName,
    lastName: defaultLastName,
    phoneNumber: defaultPhoneNumber,
    address: defaultAddress,
    suburb: defaultSuburb,
    state: defaultState,
    postalCode: defaultPostalCode,
    note: defaultNote,
  } = defaultValues;

  const shippingRef = useRef(null);
  useEffect(() => {
    if (shippingRef.current) {
      gsap.fromTo(
        shippingRef.current,
        { opacity: 0, y: 500 },
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
          <h1>Shipping</h1>
          {shippingFormSubmitted && !open && shippingForm && (
            <div className="form-summary">
              {firstName && lastName && (
                <div>
                  {firstName ? `${firstName} ` : ""}
                  {lastName && lastName}
                </div>
              )}

              {phoneNumber && <div>{phoneNumber}</div>}

              {address && <div>{address}</div>}

              {suburb && state && (
                <div>
                  {suburb ? `${suburb} ` : ""}
                  {state && state}
                </div>
              )}

              {country && postalCode && (
                <div>
                  {country ? `${country} ` : ""}
                  {postalCode && postalCode}
                </div>
              )}
            </div>
          )}
        </div>
        {shippingFormSubmitted && !open && (
          <div className="edit-btn" onClick={toggleEdit}>
            Edit
          </div>
        )}
      </div>

      {open && (
        <div className="shipping-form" ref={shippingRef}>
          <div className="shipping-row">
            <Input
              label="First Name"
              name="firstName"
              onChange={handleInputChange}
              defaultValue={defaultFirstName}
            />
            <Input
              label="Last Name"
              name="lastName"
              onChange={handleInputChange}
              defaultValue={defaultLastName}
            />
          </div>

          <Input
            label="Phone Number"
            type="number"
            name="phoneNumber"
            onChange={handleInputChange}
            defaultValue={defaultPhoneNumber}
          />

          <Input
            label="Address"
            name="address"
            defaultValue={defaultAddress}
            onChange={handleInputChange}
          />

          <div className="shipping-row">
            <Input
              label="Suburb"
              name="suburb"
              onChange={handleInputChange}
              defaultValue={defaultSuburb}
            />
            <Input
              label="State/Province"
              name="state"
              onChange={handleInputChange}
              defaultValue={defaultState}
            />
          </div>

          <div className="shipping-row">
            <Input label="Country" disabled defaultValue="Australia" />
            <Input
              label="Postal Code"
              name="postalCode"
              type="number"
              defaultValue={defaultPostalCode}
              onChange={handleInputChange}
            />
          </div>

          <Input
            label="Note for Delivery"
            name="note"
            defaultValue={defaultNote}
            onChange={handleInputChange}
          />

          <button
            onClick={handleShippingFormSubmit}
            disabled={!isShippingFormValid}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};
