// src/hooks/useData.test.js
import { renderHook, act } from "@testing-library/react-hooks";
import useData from "./useData";

// Mock data source function
const mockDataSource = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        all_active_promo_offers: [
          { offer_id: 1, amount: 10 },
          { offer_id: 2, amount: 20 },
          { offer_id: 3, amount: 5 },
        ],
      });
    }, 1000);
  });
};

test("should fetch data and return the highest valid offer", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useData(mockDataSource),
  );

  expect(result.current.loading).toBe(true);

  await waitForNextUpdate();

  expect(result.current.loading).toBe(false);
  expect(result.current.validOffer).toEqual({ offer_id: 2, amount: 20 });
});

test("should handle errors", async () => {
  const errorDataSource = () => Promise.reject(new Error("Network Error"));
  const { result, waitForNextUpdate } = renderHook(() =>
    useData(errorDataSource),
  );

  expect(result.current.loading).toBe(true);

  await waitForNextUpdate();

  expect(result.current.loading).toBe(false);
  expect(result.current.error).toBe("Network Error");
});
