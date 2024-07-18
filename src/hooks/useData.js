// src/hooks/useData.js
import { useState, useEffect } from "react";

/**
 * Custom hook for data fetching and state management
 * @param {Object} data - The data to be processed
 * @returns {Object} - Contains valid offer and other states
 */
const useData = (data) => {
  const [validOffer, setValidOffer] = useState(null);

  useEffect(() => {
    if (!data) {
      setValidOffer(null);
      return;
    }

    const findAllActivePromoOffers = (obj) => {
      if (!obj || typeof obj !== "object") return null;
      if (obj.all_active_promo_offers) return obj.all_active_promo_offers;
      for (const key of Object.keys(obj)) {
        const nestedResult = findAllActivePromoOffers(obj[key]);
        if (nestedResult) return nestedResult;
      }
      return null;
    };

    const validOffers = findAllActivePromoOffers(data) || [];
    if (validOffers.length > 0) {
      const highestOffer = validOffers.reduce(
        (max, offer) => (offer.amount > max.amount ? offer : max),
        validOffers[0],
      );
      setValidOffer(highestOffer);
    } else {
      setValidOffer(null);
    }
  }, [data]);

  return { validOffer };
};

export default useData;
