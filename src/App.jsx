import CryptoTable from './components/CryptoTable';
import PriceUpdater from './components/PriceUpdater';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Real-Time Crypto Price Tracker</h1>
      <PriceUpdater />
      <CryptoTable />
    </div>
  );
};

export default App;
