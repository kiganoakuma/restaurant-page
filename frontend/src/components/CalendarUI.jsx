import { useState } from "react";
import Calendar from "react-calendar";
import "./CalendarUI.css";

const CalendarUI = ({ onDateChange }) => {
  const [value, onChange] = useState(new Date());

  const handleDateChange = (date) => {
    onChange(date); // Update the local state
    onDateChange(date); // Pass the selected date to the parent component
  };

  const disablePastDates = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date to midnight
    return date < today; // Disable dates before today
  };

  return (
    <div className="Calendar">
      <h1>Select a day & time to visit.</h1>
      <div className="Calendar__container">
        <main className="Calendar__container__content">
          <Calendar
            calendarType="gregory"
            locale="en-US"
            tileDisabled={disablePastDates}
            showWeekNumbers={false}
            onChange={handleDateChange} // Use the new handler
            value={value}
          />
        </main>
      </div>
    </div>
  );
};

export default CalendarUI;
