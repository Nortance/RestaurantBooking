import React, { useState, useReducer, useEffect } from "react";
import BookingForm from "./bookingForm";
import styles from "./styles.css";

const BookingPage = () => {
  const bookingsReducer = (state, action) => {
    switch (action.type) {
      case "ADD_BOOKING":
        return [...state, action.booking];
      default:
        return state;
    }
  };

  const [bookings, dispatch] = useReducer(bookingsReducer, []);

  return (
    <div className="booking-container" role="main" aria-label="Booking Page">
      <h2 style={{ marginBottom: "2rem" }}>Book Now</h2>
      <BookingForm dispatch={dispatch} />
      <div
        className="current-bookings"
        role="region"
        aria-label="Current Bookings"
      >
        {bookings.map((booking, index) => (
          <div
            key={index}
            className="booking-card"
            role="article"
            aria-label={`Booking ${index + 1}`}
          >
            <p>Date: {booking.date}</p>
            <p>Time: {booking.time}</p>
            <p>Guests: {booking.guests}</p>
            <p>Occasion: {booking.occasion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
