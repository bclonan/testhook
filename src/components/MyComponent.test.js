// src/components/MyComponent.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MyComponent from "./MyComponent";
import useData from "../hooks/useData";

// Mock useData hook
jest.mock("../hooks/useData");

const mockRefetch = jest.fn();

beforeEach(() => {
  useData.mockClear();
  mockRefetch.mockClear();
});

test("should display loading, then data, and handle refetch", async () => {
  useData.mockReturnValue({
    data: {},
    validOffer: null,
    loading: true,
    error: null,
    refetch: mockRefetch,
  });

  render(<MyComponent />);

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  useData.mockReturnValue({
    data: { all_active_promo_offers: [{ offer_id: 2, amount: 20 }] },
    validOffer: { offer_id: 2, amount: 20 },
    loading: false,
    error: null,
    refetch: mockRefetch,
  });

  await waitFor(() => {
    expect(screen.getByText(/Highest Valid Offer/i)).toBeInTheDocument();
    expect(screen.getByText(/Offer ID: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Amount: 20/i)).toBeInTheDocument();
  });

  fireEvent.click(screen.getByText(/Refetch Data/i));
  expect(mockRefetch).toHaveBeenCalledTimes(1);
});

test("should handle error state", async () => {
  useData.mockReturnValue({
    data: [],
    validOffer: null,
    loading: false,
    error: "Network Error",
    refetch: mockRefetch,
  });

  render(<MyComponent />);

  await waitFor(() => {
    expect(screen.getByText(/Error: Network Error/i)).toBeInTheDocument();
  });
});
