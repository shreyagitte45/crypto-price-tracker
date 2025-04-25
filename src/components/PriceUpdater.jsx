import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateAsset } from '../store/cryptoSlice';

const getRandomChange = () => {
  return (Math.random() * 2 - 1).toFixed(2); 
};

const PriceUpdater = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      
      for (let i = 1; i <= 5; i++) {  
        dispatch({
          type: 'crypto/updateAsset',
          payload: {
            id: i,  
            updatedData: {
              price: Math.random() * 50000,  
              percent1h: getRandomChange(),
              percent24h: getRandomChange(),
              percent7d: getRandomChange(),
              volume24h: Math.floor(Math.random() * 10000000),
            },
          },
        });
      }
    }, 1500);  // 1.5 seconds update 

    return () => clearInterval(interval);  
  }, [dispatch]);

  return null;  
};

export default PriceUpdater;
