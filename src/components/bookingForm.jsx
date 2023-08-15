import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ dispatch }) => {
  const occasions = ["Birthday", "Anniversary"];
  const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date: date, time: time, guests: guests, occasion: occasion });
    dispatch({
      type: "ADD_BOOKING",
      booking: { date: date, time: time, guests: guests, occasion: occasion },
    });
    // I would like to store the date to the local storage
    // but I don't know how to do it
    localStorage.setItem("date", date);
    if (date !== "") {
      navigate("/");
    }
    alert("Your reservation has been made!");
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          width: "250px",
          maxWidth: "300px",
          gap: "10px",
        }}
      >
        <label htmlFor="res-date">
          <h4>Choose date</h4>
        </label>
        <input
          type="date"
          id="res-date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <label htmlFor="res-time">
          <h4>Choose time</h4>
        </label>
        <select
          id="res-time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          role="combobox"
          aria-expanded={time !== ""}
          aria-label="Select time"
        >
          <option value="">Select time</option>
          {initializeTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">
          <h4>Number of guests</h4>
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setGuests(e.target.value)}
          value={guests}
          role="spinbutton"
          aria-valuemin="1"
          aria-valuemax="10"
          aria-valuenow={guests}
          aria-label="Number of guests"
        />
        <label htmlFor="occasion">
          <h4>Occasion</h4>
        </label>
        <select
          id="occasion"
          onChange={(e) => setOccasion(e.target.value)}
          value={occasion}
          aria-label="Select occasion"
        >
          <option value="">Select occasion</option>
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
        <input
          disabled={
            date === "" || time === "" || guests === "" || occasion === ""
          }
          type="submit"
          value="Make Your reservation"
        />
      </form>
    </>
  );
};

export default BookingForm;
