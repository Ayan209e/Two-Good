/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../../store/action";
import {
  generateDeliveryDate,
  generateOrderId,
} from "../../../utils/cart.utils";

export const useCheckoutLeftSection = ({
  setIsOrderPlaced,
  setCustomerName,
}) => {
  const dispatch = useDispatch();

  // Customer Form States
  const [email, setEmail] = useState("");
  const [showCustomerForm, setShowCustomerForm] = useState(true);
  const [isCustomerFormValid, setIsCustomerFormValid] = useState(false);
  const [customerFormSubmitted, setCustomerFormSubmitted] = useState(false);

  // Shipping Form States
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [shippingFormSubmitted, setShippingFormSubmitted] = useState(false);
  const [isShippingFormValid, setIsShippingFormValid] = useState(false);
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

  //   Payment Section States
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  //   Customer & Shipping Form Validation
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

  useEffect(() => {
    validateCustomerForm();
  }, [email]);

  useEffect(() => {
    validateShippingForm();
  }, [shippingForm]);

  //   Handle Customer & Shipping Form Submission
  const handleEmailSubmit = () => {
    setShowCustomerForm(false);
    setShowShippingForm(true);
    setCustomerFormSubmitted(true);
  };

  const handleShippingFormSubmit = () => {
    setShowShippingForm(false);
    setShowPaymentSection(true);
    setShippingFormSubmitted(true);
  };

  //   Place Order
  const placeOrder = () => {
    setShowCustomerForm(false);
    setShowShippingForm(false);
    setShowPaymentSection(false);
    setOrderPlaced(true);
    setIsOrderPlaced(true);
    setCustomerName(shippingForm.firstName);
  };

  useEffect(() => {
    if (orderPlaced) {
      setTimeout(() => {
        continueShopping();
      }, 10000);
    }
  }, [orderPlaced]);

  //   Toggle Customer & Shipping Form Edit Toggler
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

  const orderId = generateOrderId();
  const deliveryDate = generateDeliveryDate();

  //   Continue Shopping
  const continueShopping = () => {
    dispatch(resetCart());
    window.location.href = "/";
  };

  //   Animation Refs
  const leftRef = useRef(null);
  const orderPlacedRef = useRef(null);

  //   Animations
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

  return {
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
  };
};
