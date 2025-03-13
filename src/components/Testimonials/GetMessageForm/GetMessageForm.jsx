import React from "react";
import "./GetMessageForm.css";
import { useGetMessageForm } from "./useGetMessageForm";

export const GetMessageForm = () => {
  const {
    containerRef,
    errorMessage,
    formButtonMessage,
    formData,
    formRef,
    handleSubmit,
    isFormVisible,
    setFormData,
    toggleFormVisibility,
  } = useGetMessageForm();

  return (
    <div className="get-message" ref={containerRef}>
      {!isFormVisible && (
        <div className="get-message-btn" onClick={toggleFormVisibility}>
          Send your own message
        </div>
      )}

      {isFormVisible && (
        <div className="get-message-form" ref={formRef}>
          <div className="form-inputs">
            <div>
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                placeholder="James M"
                id="name"
                className="form-input"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="message">
                <span>Message</span>
                <span>80 characters max</span>
              </label>
              <textarea
                required
                maxLength="80"
                minLength="5"
                placeholder="With every purchase, you have the potential to change the course of a woman’s life. We're changing the course of every homeless woman's life for good by selling meals and handcrafted products."
                id="message"
                className="form-input"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <button type="submit" className="form-btn" onClick={handleSubmit}>
            {formButtonMessage}
          </button>
        </div>
      )}

      {!isFormVisible && (
        <div className="get-message-desc">
          Sometimes it’s the smallest actions that can make the biggest impact.
        </div>
      )}
    </div>
  );
};
