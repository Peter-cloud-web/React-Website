import React, { useState } from "react";
import "./PopupForm.css";

const PopupForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", phone: "", service: "", date: "" };

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      valid = false;
    }

    if (!formData.service) {
      newErrors.service = "Service is required";
      valid = false;
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    const { name, phone, service, date } = formData;
    const response = await fetch(
      "https://hooks.zapier.com/hooks/catch/20794379/2rqvjev/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, service, date }),
      }
    );

    if (response.ok) {
      alert("Booking submitted successfully!");
      onClose();
    } else {
      alert("Failed to submit booking. Please try again.");
    }
  };

  return (
    <div className="popup-form-overlay">
      <div className="popup-form-container">
        <h2 className="form-title">Book a Cleaning Session</h2>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="form-field">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label className="form-label">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-input"
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-field">
          <label className="form-label">Service:</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select a service</option>
            <option value="Carpet Cleaning">Carpet Cleaning</option>
            <option value="Sofa Cleaning">Sofa Cleaning</option>
            <option value="Mattress Cleaning">Mattress Cleaning</option>
            <option value="Post Construction/Renovation Cleaning">
              Post Construction/Renovation Cleaning
            </option>
            <option value="Office Cleaning">Office Cleaning</option>
            <option value="Tiles and Grout Cleaning">
              Tiles and Grout Cleaning
            </option>
            <option value="Fumigation Services">Fumigation Services</option>
            <option value="Pressure Washing and Cabro Cleaning">
              Pressure Washing and Cabro Cleaning
            </option>
          </select>
          {errors.service && <span className="error">{errors.service}</span>}
        </div>
        <div className="form-field">
          <label className="form-label">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="form-input"
            required
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
