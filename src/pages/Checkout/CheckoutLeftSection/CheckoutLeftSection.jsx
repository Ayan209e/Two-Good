import React, { useEffect, useRef, useState } from "react";
import "./CheckoutLeftSection.css";
import { CustomerForm } from "./CustomerForm";
import { ShippingForm } from "./ShippingForm";
import { PaymentSection } from "./PaymentSection";
import { useDispatch } from "react-redux";
import { resetCart } from "../../../store/action";
import gsap from "gsap";

export const CheckoutLeftSection = ({ setIsOrderPlaced, setCustomerName }) => {
  const dispatch = useDispatch();
  const [showCustomerForm, setShowCustomerForm] = useState(true);
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [showPaymentSection, setShowPaymentSection] = useState(false);

  const [customerFormSubmitted, setCustomerFormSubmitted] = useState(false);
  const [shippingFormSubmitted, setShippingFormSubmitted] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [email, setEmail] = useState("");
  const [shippingForm, setShippingForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    suburb: "",
    state: "",
    country: "Australia",
    postalCode: "",
    note: "",
  });

  const [isCustomerFormValid, setIsCustomerFormValid] = useState(false);
  const [isShippingFormValid, setIsShippingFormValid] = useState(false);

  useEffect(() => {
    validateCustomerForm();
  }, [email]);

  useEffect(() => {
    validateShippingForm();
  }, [shippingForm]);

  const validateCustomerForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsCustomerFormValid(email.trim() !== "" && emailRegex.test(email));
  };

  const validateShippingForm = () => {
    const { firstName, lastName, phoneNumber, address, state, postalCode } =
      shippingForm;
    setIsShippingFormValid(
      firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        phoneNumber.trim() !== "" &&
        address.trim() !== "" &&
        state.trim() !== "" &&
        postalCode.trim() !== ""
    );
  };

  const handleEmailSubmit = () => {
    console.log("email submitted", email);
    setShowCustomerForm(false);
    setShowShippingForm(true);
    setCustomerFormSubmitted(true);
  };

  const handleShippingFormSubmit = () => {
    console.log("Shipping form submitted", shippingForm);
    setShowShippingForm(false);
    setShowPaymentSection(true);
    setShippingFormSubmitted(true);
  };

  const placeOrder = () => {
    console.log("Order placed");
    setShowCustomerForm(false);
    setShowShippingForm(false);
    setShowPaymentSection(false);
    setOrderPlaced(true);
    setIsOrderPlaced(true);
    setCustomerName(shippingForm.firstName);
  };

  const toggleCustomerFormEdit = () => {
    setShowCustomerForm(true);
    setShowShippingForm(false);
    setShowPaymentSection(false);
  };

  const toggleShippingFormEdit = () => {
    setShowCustomerForm(false);
    setShowShippingForm(true);
    setShowPaymentSection(false);
  };

  const generateOrderId = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };
  const orderId = generateOrderId();

  const generateDeliveryDate = () => {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 3);

    const options = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    return deliveryDate.toLocaleDateString("en-US", options);
  };
  const deliveryDate = generateDeliveryDate();

  const continueShopping = () => {
    console.log("Continue shopping");
    dispatch(resetCart());
    window.location.href = "/";
  };

  useEffect(() => {
    if (orderPlaced) {
      setTimeout(() => {
        continueShopping();
      }, 10000);
    }
  }, [orderPlaced]);

  const leftRef = useRef(null);
  const orderPlacedRef = useRef(null);

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -500 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, []);
  useEffect(() => {
    if (orderPlacedRef.current) {
      gsap.fromTo(
        orderPlacedRef.current,
        { opacity: 0, y: 500 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, [orderPlaced]);

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
