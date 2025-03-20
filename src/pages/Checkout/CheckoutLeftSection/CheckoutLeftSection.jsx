import React from "react";
import "./CheckoutLeftSection.css";
import { CustomerForm } from "./CustomerForm";
import { ShippingForm } from "./ShippingForm";
import { PaymentSection } from "./PaymentSection";
import { useCheckoutLeftSection } from "./useCheckoutLeftSection";

export const CheckoutLeftSection = ({ setIsOrderPlaced, setCustomerName }) => {
  const {
    orderPlaced,
    leftRef,
    orderPlacedRef,
    email,
    setEmail,
    showCustomerForm,
    isCustomerFormValid,
    customerFormSubmitted,
    shippingForm,
    setShippingForm,
    showShippingForm,
    isShippingFormValid,
    shippingFormSubmitted,
    showPaymentSection,
    handleEmailSubmit,
    handleShippingFormSubmit,
    placeOrder,
    toggleCustomerFormEdit,
    toggleShippingFormEdit,
    orderId,
    deliveryDate,
    continueShopping,
  } = useCheckoutLeftSection({
    setIsOrderPlaced,
    setCustomerName,
  });

  return orderPlaced ? (
    <div className="checkout-left-section order-placed" ref={orderPlacedRef}>
      <h1>Your order has been placed!...</h1>
      <p>
        We've received your order and are processing your payment. Once the
        payment is verified, your order will be completed. We will send you an
        email when it's completed. Please note, this process may take a few
        minutes depending on the processing times of your chosen method. If you
        have any questions about your purchase, email us at
        orders@twogood.com.au.
      </p>
      <div className="order-details">
        <h2>Order id - {orderId}</h2>
        <h2>Expected delivery by - {deliveryDate}</h2>
      </div>

      <button className="continue-shopping" onClick={continueShopping}>
        Continue Shopping
      </button>
    </div>
  ) : (
    <div className="checkout-left-section" ref={leftRef}>
      <CustomerForm
        isCustomerFormValid={isCustomerFormValid}
        customerFormSubmitted={customerFormSubmitted}
        email={email}
        open={showCustomerForm}
        setEmail={setEmail}
        handleEmailSubmit={handleEmailSubmit}
        toggleEdit={toggleCustomerFormEdit}
        defaultEmail={email}
      />

      <ShippingForm
        isShippingFormValid={isShippingFormValid}
        shippingFormSubmitted={shippingFormSubmitted}
        defaultValues={shippingForm}
        open={showShippingForm}
        shippingForm={shippingForm}
        setShippingForm={setShippingForm}
        handleShippingFormSubmit={handleShippingFormSubmit}
        toggleEdit={toggleShippingFormEdit}
      />

      <PaymentSection open={showPaymentSection} placeOrder={placeOrder} />
    </div>
  );
};
