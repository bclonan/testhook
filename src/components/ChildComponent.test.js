// src/components/ChildComponent.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import ChildComponent from "./ChildComponent";

const mockData = {
  all_active_promo_offers: [
    { offer_id: 1, amount: 10 },
    { offer_id: 2, amount: 20 },
    { offer_id: 3, amount: 5 },
  ],
};

test("renders ChildComponent with valid offer", () => {
  render(<ChildComponent data={mockData} />);

  expect(screen.getByText(/Child Component/i)).toBeInTheDocument();
  expect(screen.getByText(/Offer ID: 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Amount: 20/i)).toBeInTheDocument();
});

test("renders ChildComponent with no valid offers", () => {
  render(<ChildComponent data={{}} />);

  expect(screen.getByText(/Child Component/i)).toBeInTheDocument();
  expect(screen.getByText(/No valid offers available/i)).toBeInTheDocument();
});
