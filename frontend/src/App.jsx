import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './components/products/Products.jsx';
import Signup from './components/signup/Signup.jsx';
import Cart from './components/cart/Cart.jsx';
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddProduct(product) {
    const productExist = cartItems.find(item => {
      return item.id === product.id;
    });

    if (productExist) {
      setCartItems(cartItems.map(item => {
        return item.id === product.id ?
          { ...productExist, quantity: productExist.quantity + 1 } :
          item;
      }))
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function handleRemoveProduct(product) {
    const productExist = cartItems.find(item => {
      return item.id === product.id;
    });

    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter(item => {
        return item.id !== product.id;
      }));
    }
    else {
      setCartItems(cartItems.map(item => {
        return item.id === product.id ?
          { ...productExist, quantity: productExist.quantity - 1 } :
          item
      }))
    }
  }

  function handleCartClearence() {
    setCartItems([]);
  }

  return (
    <React.Fragment>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path='/' element={<Products handleAddProduct={handleAddProduct} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleCartClearence={handleCartClearence} handleRemoveProduct={handleRemoveProduct} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
