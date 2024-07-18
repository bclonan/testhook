// src/components/__mocks__/mockDataSource.js
const mockDataSource = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const shouldReturnData = Math.random() > 0.5;
      const hasTargetKey = Math.random() > 0.5;
      const deeplyNested = Math.random() > 0.5;

      if (!shouldReturnData) {
        resolve({});
        return;
      }

      const data = deeplyNested
        ? {
            level1: {
              level2: {
                level3: {
                  all_active_promo_offers: hasTargetKey
                    ? [
                        { offer_id: 1, amount: 10 },
                        { offer_id: 2, amount: 20 },
                        { offer_id: 3, amount: 5 },
                      ]
                    : [],
                },
              },
            },
          }
        : {
            all_active_promo_offers: hasTargetKey
              ? [
                  { offer_id: 1, amount: 10 },
                  { offer_id: 2, amount: 20 },
                  { offer_id: 3, amount: 5 },
                ]
              : [],
          };

      resolve(data);
    }, 1000);
  });
};

export default mockDataSource;
