import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <div>
      <Navbar />
      <ProductCard/>
    </div>
  );
}

export default App;
