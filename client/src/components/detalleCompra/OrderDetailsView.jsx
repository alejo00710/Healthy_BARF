import React from 'react';
import styles from '../../styles/detalleCompra/OrderDetails.module.css';
import headerImage from '../../assets/images/Healthy Barf icono sin fondo-12.png';
import polloVerduras from '../../../../server/uploads/pollo-verduras.jpg'; // Fallback local
import { useNavigate, useParams } from 'react-router-dom';
import { useOrder } from '../../context/OrderContext';

export default function OrderDetailsView() {
    const { orderId } = useParams(); // <- obtener ID de la URL
    const navigate = useNavigate();
    const { orders } = useOrder(); // <- acceder al contexto

    const order = orders.find(o => o.id === parseInt(orderId)); // <- buscar por ID

    const handleBack = () => {
        navigate(-1);
    };

    if (!order) {
        return (
            <div className={styles.containerDetalle}>
                <p style={{ textAlign: 'center' }}>Pedido no encontrado.</p>
                <button onClick={handleBack} className={styles.backButton}>
                    &lt; Volver
                </button>
            </div>
        );
    }

    return (
        <div className={styles.containerDetalle}>
            <div className={styles.headerBackButton}>
                <button onClick={handleBack} className={styles.backButton}>
                    &lt; Volver
                </button>
            </div>
            <div className={styles.profileHeader}>
                <img
                    src={headerImage}
                    alt="Healthy Barf"
                    className={styles.headerImage}
                />
            </div>

            <div className={styles.wrapper}>
                <h1 className={styles.title}>Detalle de la compra</h1>

                {/* Productos */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Productos</h2>
                    <div className={styles.productList}>
                        {order.products.map((product, idx) => (
                            <div key={idx} className={styles.productCard}>
                                <span className={styles.productNumber}>{idx + 1}</span>
                                <img
                                    src={product.image || polloVerduras}
                                    alt={product.name}
                                    className={styles.productImage}
                                />
                                <div className={styles.productInfo}>
                                    <p className={styles.productName}>{product.name}</p>
                                    <p className={styles.productWeight}>
                                        {product.cantidad ? `${product.cantidad} und` : ''}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dirección de envío */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Dirección de envío</h2>
                    <div className={styles.infoCard}>
                        <p className={styles.infoText}>{order.address || 'No disponible'}</p>
                    </div>
                </div>

                {/* Total pagado */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Total pagado</h2>
                    <div className={styles.infoCard}>
                        <p className={styles.totalText}>{order.total}</p>
                    </div>
                </div>

                {/* Fecha de compra */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Fecha de compra</h2>
                    <div className={styles.infoCard}>
                        <p className={styles.dateText}>{order.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

