
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ProductDisplay } from './components/ProductDisplay';
import Addproduct from './components/Addproduct';
import { useState } from 'react';
import Editproduct from './components/Editproduct';

function App() {
  const [productData, setProductData] = useState([]);
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductDisplay />} />
          <Route path="/product/addProduct" element={<Addproduct productData={productData} setProductData={setProductData} />} />
          <Route path="/product/editProduct/:id" element={<Editproduct />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}



export default App;
