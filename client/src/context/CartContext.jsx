import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Leer del localStorage al iniciar
    const saved = localStorage.getItem('carrito');
    return saved ? JSON.parse(saved) : [];
  });

  // Guardar en localStorage cada vez que cambie el carrito
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (producto, cantidad = 1) => {
    setCartItems(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        );
      } else {
        return [...prev, { ...producto, cantidad }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cantidad: Math.max(1, item.cantidad + delta) } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getSubtotal }}>
      {children}
    </CartContext.Provider>
  );
};
