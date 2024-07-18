// src/mocks/mockDataSource.js
const getRandomInt = (max) => Math.floor(Math.random() * max);

const mockDataSource = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const shouldReturnData = getRandomInt(2);
      const shouldIncludeKey = getRandomInt(2);

      if (!shouldReturnData) {
        resolve({});
        return;
      }

      const data = {
        all_active_promo_offers: [
          { offer_id: 1, amount: 10 },
          { offer_id: 2, amount: 20 },
          { offer_id: 3, amount: 5 },
        ],
      };

      if (shouldIncludeKey) {
        resolve(data);
      } else {
        resolve({});
      }
    }, 1000);
  });
};

export default mockDataSource;
