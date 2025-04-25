import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    {
      id: 1,
     
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 45000,
      percent1h: 0.5,
      percent24h: 2.3,
      percent7d: 1.2,
      volume24h: 3000000,
      marketCap: 8500000,
      circulatingSupply: 1850000,
      maxSupply: 21000000,
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: 3000,
      percent1h: -0.2,
      percent24h: 1.5,
      percent7d: -0.5,
      volume24h: 1500000,
      marketCap: 3500000,
      circulatingSupply: 1150000,
      maxSupply: 120000000,
    },
    {
      id: 3,
      name: 'Tether',
      symbol: 'USDT',
      price: 1.00,
      percent1h: 0.0,
      percent24h: 0.0,
      percent7d: 0.1,
      volume24h: 2000000,
      marketCap: 7000000,
      circulatingSupply: 1000000,
      maxSupply: 100000000,
    },
    {
      id: 4,
      name: 'BNB',
      symbol: 'BNB',
      price: 350,
      percent1h: 0.1,
      percent24h: -1.1,
      percent7d: -2.5,
      volume24h: 1200000,
      marketCap: 50000000,
      circulatingSupply: 1700000,
      maxSupply: 200000000,
    },
    {
      id: 5,
      name: 'Solana',
      symbol: 'SOL',
      price: 150,
      percent1h: 0.3,
      percent24h: 0.6,
      percent7d: 3.0,
      volume24h: 900000,
      marketCap: 4500000,
      circulatingSupply: 4000000,
      maxSupply: 500000000,
    }
  ],
  filter: 'all',
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAsset: (state, action) => {
      const { id, updatedData } = action.payload;
      const asset = state.assets.find((asset) => asset.id === id);
      if (asset) {
        Object.assign(asset, updatedData);
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { updateAsset, setFilter } = cryptoSlice.actions;
export default cryptoSlice.reducer;
