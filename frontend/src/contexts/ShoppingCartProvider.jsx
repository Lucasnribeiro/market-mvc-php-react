import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (item) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(newCartItems);
  };

  const emptyCart = () => {
    setCartItems([]);
  }

  const calculateCartTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.price) + (item.price * (item.tax / 100));
    });
    setCartTotal(total);
  };

  useEffect(() => {
    calculateCartTotal();
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, cartTotal, addItemToCart, removeItemFromCart, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
  