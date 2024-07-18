// src/hooks/useData.js
import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook for data fetching and state management
 * @param {Function} dataSource - Function that fetches data
 * @returns {Object} - Contains data, valid offer, loading, error states, and refetch function
 */
const useData = (dataSource) => {
  const [data, setData] = useState([]);
  const [validOffer, setValidOffer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await dataSource();
      setData(result);

      const validOffers = result.all_active_promo_offers || [];
      if (validOffers.length > 0) {
        const highestOffer = validOffers.reduce(
          (max, offer) => (offer.amount > max.amount ? offer : max),
          validOffers[0],
        );
        setValidOffer(highestOffer);
      } else {
        setValidOffer(null);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [dataSource]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, validOffer, loading, error, refetch: fetchData };
};

export default useData;
