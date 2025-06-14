// OrderContext.jsx - Contexto para manejar el pedido actual
import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrder must be used within an OrderProvider');
    }
    return context;
};

export const OrderProvider = ({ children }) => {
    const [currentOrderId, setCurrentOrderId] = useState(null);
    const [orderHistory, setOrderHistory] = useState([]);

    // Función para crear un nuevo pedido
    const createOrder = (orderData) => {
        const newOrderId = Date.now(); // Usamos timestamp como ID único
        const newOrder = {
            id: newOrderId,
            ...orderData,
            date: new Date().toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }),
            status: 'Preparando'
        };

        setCurrentOrderId(newOrderId);
        setOrderHistory(prev => [newOrder, ...prev]);
        
        return newOrderId;
    };

    // Función para obtener un pedido específico
    const getOrder = (orderId) => {
        return orderHistory.find(order => order.id === parseInt(orderId));
    };

    // Función para obtener todos los pedidos
    const getAllOrders = () => {
        return orderHistory;
    };

    const value = {
        currentOrderId,
        setCurrentOrderId,
        createOrder,
        getOrder,
        getAllOrders,
        orderHistory
    };

    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    );
};