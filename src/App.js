import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StocksList from './components/StocksList';
import StocksDetails from './components/StocksDetails';

function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<StocksList />} />
        <Route path="/:symbol" element={<StocksDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
