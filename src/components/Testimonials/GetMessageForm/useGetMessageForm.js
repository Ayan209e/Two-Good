import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export const useGetMessageForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [formButtonMessage, setFormButtonMessage] = useState(
    "Send your own message"
  );

  const formRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        closeForm();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isFormVisible && formRef.current) {
      gsap.fromTo(
        formRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3 }
      );
    }
  }, [isFormVisible]);

  const toggleFormVisibility = () => {
    if (isFormVisible) {
      closeForm();
    } else {
      setIsFormVisible(true);
    }
  };

  const closeForm = () => {
    if (formRef.current) {
      gsap.to(formRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: () => setIsFormVisible(false),
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.message) {
      setErrorMessage("Please fill out all the fields !!!");
      return;
    }
    setFormButtonMessage("Message sent!");
    setErrorMessage("");
    setFormData({ name: "", message: "" });
    setTimeout(() => {
      setFormButtonMessage("Send your own message");
      closeForm();
    }, 1000);
  };

  return {
    containerRef,
    errorMessage,
    formButtonMessage,
    formData,
    formRef,
    handleSubmit,
    isFormVisible,
    setFormData,
    toggleFormVisibility,
  };
};
