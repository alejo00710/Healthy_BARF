import React from 'react';
import styles from '../../styles/allOrders/AllOrders.module.css';
import headerImage from '../../assets/images/Healthy Barf icono sin fondo-12.png';
import polloVerduras from '../../assets/images/pollo y verduras.jpg';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../../context/OrderContext'; 

export default function AllOrdersView() {
    const navigate = useNavigate();
    const { getAllOrders } = useOrder();

    // Obtener todos los pedidos del contexto
    const allOrders = getAllOrders();

    // Datos de ejemplo si no hay pedidos guardados (para testing)
    const defaultOrders = [
        {
            id: 1,
            date: "12 de marzo de 2025",
            total: "$ 7.000",
            status: "Entregado",
            products: [
                { name: "Dosis de pollo", weight: "500gr", image: polloVerduras },
                { name: "Dosis de res", weight: "500gr", image: polloVerduras }
            ],
            productCount: 2
        },
        {
            id: 2,
            date: "8 de marzo de 2025",
            total: "$ 3.500",
            status: "En camino",
            products: [
                { name: "Dosis de pollo", weight: "500gr", image: polloVerduras }
            ],
            productCount: 1
        },
        {
            id: 3,
            date: "25 de febrero de 2025",
            total: "$ 10.500",
            status: "Entregado",
            products: [
                { name: "Dosis de pollo", weight: "500gr", image: polloVerduras },
                { name: "Dosis de res", weight: "500gr", image: polloVerduras },
                { name: "Dosis de pescado", weight: "500gr", image: polloVerduras }
            ],
            productCount: 3
        }
    ];

    // Usar pedidos del contexto o datos de ejemplo
    const ordersToShow = allOrders.length > 0 ? allOrders : defaultOrders;

    const handleBack = () => {
        navigate(-1);
    };

    const handleOrderClick = (orderId) => {
        // Navegar a la vista de detalle pasando el ID del pedido
        navigate(`/order-details/${orderId}`);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Entregado':
                return styles.statusDelivered;
            case 'En camino':
                return styles.statusInTransit;
            case 'Preparando':
                return styles.statusPreparing;
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
                                            src={product.image}
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
                                        {order.productCount || order.products?.length || 0} {(order.productCount || order.products?.length || 0) === 1 ? 'producto' : 'productos'}
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