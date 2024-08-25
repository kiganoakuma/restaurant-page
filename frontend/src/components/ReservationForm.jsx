import React, { useState } from "react";
import CalendarUI from "./CalendarUI";
import "./ReservationForm.css";

const ReservationForm = ({ isVisible, setIsVisible }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null); // Track the selected button
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSlotClick = (index) => {
    setSelectedSlotIndex(index); // Set the clicked button as selected
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const slots = generateTimeSlots(date);
    setTimeSlots(slots);
    setSelectedSlotIndex(null); // Reset selected slot when date changes
  };

  const generateTimeSlots = (date) => {
    const availableSlots = [
      "07:00 PM",
      "08:00 PM",
      "09:00 PM",
      "10:00 PM",
      "11:00 PM",
      "12:00 AM",
    ];
    return availableSlots;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationData = {
      ...formData,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message); // Display success message
        setIsVisible(false); // Hide the form after successful submission
      } else {
        alert("Failed to make reservation.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="form-visible"
      style={{
        display: isVisible ? "block" : "none",
      }}
    >
      <div className="main-container">
        <CalendarUI onDateChange={handleDateChange} />
        {selectedDate && (
          <div className="slot-picker">
            <h3>{selectedDate.toLocaleDateString()}:</h3>
            <div className="time-slots">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  className={`button-slot ${selectedSlotIndex === index ? "inverted" : ""}`}
                  onClick={() => handleSlotClick(index)}
                  style={{
                    filter: selectedSlotIndex === index ? "invert(1)" : "none",
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          onChange={handleInputChange}
          className="form-inputs"
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />

          <button
            onClick={() => setIsVisible(!isVisible)}
            id="submit"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
