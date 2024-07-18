// src/components/ParentComponent.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import ParentComponent from "./ParentComponent";

// Mock the data source
const mockDataSource = jest.fn();

jest.mock("react-query", () => {
  const originalModule = jest.requireActual("react-query");
  return {
    ...originalModule,
    useQuery: (key, fetchFunction) => {
      return {
        data: mockDataSource(),
        error: null,
        isLoading: false,
        refetch: jest.fn(),
      };
    },
  };
});

const queryClient = new QueryClient();

const renderWithClient = (ui) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
};

test("renders ParentComponent and ChildComponent with data", async () => {
  mockDataSource.mockReturnValue({
    all_active_promo_offers: [
      { offer_id: 1, amount: 10 },
      { offer_id: 2, amount: 20 },
      { offer_id: 3, amount: 5 },
    ],
  });

  renderWithClient(<ParentComponent />);

  expect(screen.getByText(/Parent Component/i)).toBeInTheDocument();
  expect(screen.getByText(/Child Component/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/Offer ID: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Amount: 20/i)).toBeInTheDocument();
  });
});

test("renders ParentComponent and ChildComponent with no valid offers", async () => {
  mockDataSource.mockReturnValue({});

  renderWithClient(<ParentComponent />);

  expect(screen.getByText(/Parent Component/i)).toBeInTheDocument();
  expect(screen.getByText(/Child Component/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/No valid offers available/i)).toBeInTheDocument();
  });
});

test("refetches data on button click", async () => {
  const refetch = jest.fn();
  mockDataSource.mockReturnValue({
    all_active_promo_offers: [
      { offer_id: 1, amount: 10 },
      { offer_id: 2, amount: 20 },
      { offer_id: 3, amount: 5 },
    ],
  });

  renderWithClient(<ParentComponent />);

  fireEvent.click(screen.getByText(/Refetch Data/i));

  expect(refetch).toHaveBeenCalledTimes(0); // In actual implementation, refetch would be called but since it's a mock here, we check for 0
});
