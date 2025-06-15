import React, { useEffect } from 'react';
import styles from '../../styles/allOrders/AllOrders.module.css';
import headerImage from '../../assets/images/Healthy Barf icono sin fondo-12.png';
import polloVerduras from '../../assets/images/pollo-verduras.jpg'; // Puedes usar como placeholder si no hay imagen
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../../context/OrderContext'; 

export default function AllOrdersView() {
    const navigate = useNavigate();
    const { orders, fetchOrders } = useOrder();

    useEffect(() => {
        fetchOrders();
    }, []);

    const ordersToShow = orders.length > 0 ? orders : [];

    const handleBack = () => {
        navigate(-1);
    };

    const handleOrderClick = (orderId) => {
        navigate(`/order-details/${orderId}`);
    };

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'entregado':
                return styles.statusDelivered;
            case 'en camino':
                return styles.statusInTransit;
            case 'preparando':
                return styles.statusPreparing;
            case 'pendiente':
                return styles.statusDefault;
            default:
                return styles.statusDefault;
        }
    };

    return (
        <div className={styles.containerAllOrders}>
            <div className={styles.profileHeader}>
                <img
                    src={headerImage}
                    alt="Healthy Barf"
                    className={styles.headerImage}
                />
            </div>

            <div className={styles.headerBackButton}>
                <button onClick={handleBack} className={styles.backButton}>
                    &lt; Volver
                </button>
            </div>

            <div className={styles.wrapper}>
                <h1 className={styles.title}>
                    Mis Pedidos
                </h1>

                <div className={styles.ordersContainer}>
                    {ordersToShow.map((order) => (
                        <div 
                            key={order.id} 
                            className={styles.orderCard}
                            onClick={() => handleOrderClick(order.id)}
                        >
                            <div className={styles.orderHeader}>
                                <div className={styles.orderInfo}>
                                    <h3 className={styles.orderNumber}>Pedido #{order.id}</h3>
                                    <p className={styles.orderDate}>{order.date}</p>
                                </div>
                                <div className={styles.orderStatus}>
                                    <span className={`${styles.statusBadge} ${getStatusClass(order.status)}`}>
                                        {order.status}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.orderProducts}>
                                <div className={styles.productImages}>
                                    {order.products && order.products.slice(0, 3).map((product, index) => (
                                        <img
                                            key={index}
                                            src={product.image || polloVerduras}
                                            alt={product.name}
                                            className={styles.productImage}
                                        />
                                    ))}
                                    {order.productCount > 3 && (
                                        <div className={styles.moreProducts}>
                                            +{order.productCount - 3}
                                        </div>
                                    )}
                                </div>
                                <div className={styles.productInfo}>
                                    <p className={styles.productCount}>
                                        {order.productCount} {order.productCount === 1 ? 'producto' : 'productos'}
                                    </p>
                                    <p className={styles.orderTotal}>{order.total}</p>
                                </div>
                            </div>

                            <div className={styles.orderFooter}>
                                <span className={styles.viewDetails}>
                                    Ver detalles →
                                </span>
                            </div>
                        </div>
                    ))}

                    {ordersToShow.length === 0 && (
                        <div className={styles.emptyState}>
                            <p>No tienes pedidos aún</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

