import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookingPage from "./bookingPage";

describe("BookingPage", () => {
  beforeEach(() => {
    render(<BookingPage />);
  });

  test("renders the booking page", () => {
    expect(screen.getByText("Book Now")).toBeInTheDocument();
  });

  test("adds a booking when the form is submitted", () => {
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2022-01-01" },
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });
    fireEvent.click(screen.getByText("Make Your reservation"));

    expect(screen.getByLabelText("Booking 1")).toBeInTheDocument();
    expect(screen.getByText("Date: 2022-01-01")).toBeInTheDocument();
    expect(screen.getByText("Time: 18:00")).toBeInTheDocument();
  });
});
