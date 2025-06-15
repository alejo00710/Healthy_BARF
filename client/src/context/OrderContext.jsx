import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const { token } = useAuth();

 const fetchOrders = async () => {
  if (!token) return;

  try {
    const response = await fetch('http://localhost:3000/pedido/mis-pedidos', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("La respuesta del backend no es un array");
    }

    const mapped = data.map(pedido => ({
  id: pedido.id,
  date: new Date(pedido.creadoEn).toLocaleDateString('es-CO', {
    day: 'numeric', month: 'long', year: 'numeric'
  }),
  total: `$ ${pedido.total.toLocaleString()}`,
  status: pedido.estado || 'Pendiente',
  products: pedido.items.map(i => ({
    name: i.producto.nombre,
    image: i.producto.imagen || '', // Asegúrate de tener este campo en tu modelo
  })),
  productCount: pedido.items.length,
}));


    setOrders(mapped);
  } catch (err) {
    console.error('Error al traer pedidos:', err);
  }
};



  useEffect(() => {
    fetchOrders();
  }, [token]);

  const getAllOrders = () => orders;

  return (
    <OrderContext.Provider value={{ orders, fetchOrders, getAllOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);

