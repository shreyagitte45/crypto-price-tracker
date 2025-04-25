import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAsset, setFilter } from '../store/cryptoSlice';
import './CryptoTable.css';

import graphImg from '../assets/img/graph.png';

const CryptoTable = () => {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.crypto.assets);
  const filter = useSelector((state) => state.crypto.filter);

  useEffect(() => {
    const interval = setInterval(() => {
      assets.forEach((asset) => {
        const updatedData = {
          price: (asset.price * (1 + (Math.random() - 0.5) * 0.01)).toFixed(2),
          percent1h: (Math.random() * 2 - 1).toFixed(2),
          percent24h: (Math.random() * 4 - 2).toFixed(2),
          percent7d: (Math.random() * 6 - 3).toFixed(2),
          volume24h: Math.floor(asset.volume24h * (1 + (Math.random() - 0.5) * 0.2)),
        };

        dispatch(updateAsset({ id: asset.id, updatedData }));
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [assets, dispatch]);

  // Filter logic
  const filteredAssets = [...assets].sort((a, b) => {
    if (filter === 'gainers') return b.percent24h - a.percent24h;
    if (filter === 'losers') return a.percent24h - b.percent24h;
    return 0;
  });

  return (
    <>
      <div className="table-controls">
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('gainers'))}>Top Gainers</button>
        <button onClick={() => dispatch(setFilter('losers'))}>Top Losers</button>
      </div>

      <div className="table-container">
        <table className="crypto-table">
          <thead>
            <tr>
              <th>#</th>
             
              <th>Name</th>
              <th>Symbol</th>
              <th>Price ($)</th>
              <th>1h %</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>24h Volume</th>
              <th>Circulating Supply</th>
              <th>Max Supply</th>
              <th>7D Chart</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset, index) => (
              <tr key={asset.id}>
                <td>{index + 1}</td>
                
                <td>{asset.name}</td>
            <td>{asset.symbol}</td> 
                <td>${asset.price}</td>
                <td className={asset.percent1h >= 0 ? 'green' : 'red'}>{asset.percent1h}%</td>
                <td className={asset.percent24h >= 0 ? 'green' : 'red'}>{asset.percent24h}%</td>
                <td className={asset.percent7d >= 0 ? 'green' : 'red'}>{asset.percent7d}%</td>
                <td>${asset.marketCap.toLocaleString()}</td>
                <td>${asset.volume24h.toLocaleString()}</td>
                <td>{asset.circulatingSupply.toLocaleString()}</td>
                <td>{asset.maxSupply.toLocaleString()}</td>
                <td>
                   <img src={graphImg} alt="7d chart" height="60" />
                  </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CryptoTable;
