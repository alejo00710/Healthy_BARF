import React from 'react';
import styles from '../../styles/detalleCompra/OrderDetails.module.css';
import headerImage from '../../assets/images/Healthy Barf icono sin fondo-12.png';
import polloVerduras from '../../assets/images/pollo y verduras.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import { useOrder } from '../../context/OrderContext';

export default function OrderDetailsView() {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const { getOrder } = useOrder();

    let orderData = getOrder(orderId);

    if (!orderData) {
        const ordersDatabase = {
            1: {
                id: 1,
                products: [
                    {
                        id: 1,
                        name: "Dosis de pollo",
                        weight: "500gr",
                        image: polloVerduras
                    },
                    {
                        id: 2,
                        name: "Dosis de res",
                        weight: "500gr",
                        image: polloVerduras
                    }
                ],
                address: "Calle 50a # 20 - 20\nMedellín Antioquia",
                recipient: "Alejandro Vanegas",
                total: "$ 7.000",
                date: "12 de marzo de 2025",
                status: "Entregado"
            },
            2: {
                id: 2,
                products: [
                    {
                        id: 1,
                        name: "Dosis de pollo",
                        weight: "500gr",
                        image: polloVerduras
                    }
                ],
                address: "Carrera 45 # 15 - 30\nMedellín Antioquia",
                recipient: "Alejandro Vanegas",
                total: "$ 3.500",
                date: "8 de marzo de 2025",
                status: "En camino"
            },
            3: {
                id: 3,
                products: [
                    {
                        id: 1,
                        name: "Dosis de pollo",
                        weight: "500gr",
                        image: polloVerduras
                    },
                    {
                        id: 2,
                        name: "Dosis de res",
                        weight: "500gr",
                        image: polloVerduras
                    },
                    {
                        id: 3,
                        name: "Dosis de pescado",
                        weight: "500gr",
                        image: polloVerduras
                    }
                ],
                address: "Calle 70 # 52 - 10\nMedellín Antioquia",
                recipient: "Alejandro Vanegas",
                total: "$ 10.500",
                date: "25 de febrero de 2025",
                status: "Entregado"
            }
        };

        // Obtener los datos del pedido específico
        orderData = ordersDatabase[orderId];

    }

    // Si no existe el pedido, mostrar error o redirigir
    if (!orderData) {
        return (
            <div className={styles.containerDetalle}>
                <div className={styles.headerBackButton}>
                    <button onClick={() => navigate(-1)} className={styles.backButton}>
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
                    <h1 className={styles.title}>Pedido no encontrado</h1>
                    <p style={{ textAlign: 'center', color: '#6B7280' }}>
                        El pedido #{orderId} no existe o ha sido eliminado.
                    </p>
                </div>
            </div>
        );
    }

    const handleBack = () => {
        navigate(-1);
    };

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
                <h1 className={styles.title}>
                    Detalle de la compra #{orderData.id}
                </h1>

                {/* Estado del pedido */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Estado del pedido</h2>
                    <div className={styles.infoCard}>
                        <p className={`${styles.statusText} ${styles[orderData.status.toLowerCase().replace(' ', '')]}`}>
                            {orderData.status}
                        </p>
                    </div>
                </div>

                {/* Productos */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Productos</h2>
                    <div className={styles.productList}>
                        {orderData.products.map((product) => (
                            <div key={product.id} className={styles.productCard}>
                                <span className={styles.productNumber}>{product.id}</span>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={styles.productImage}
                                />
                                <div className={styles.productInfo}>
                                    <p className={styles.productName}>{product.name}</p>
                                    <p className={styles.productWeight}>{product.weight}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dirección de envío */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Dirección de envío</h2>
                    <div className={styles.infoCard}>
                        <p className={styles.infoText}>{orderData.address}</p>
                    </div>
                </div>

                {/* Destinatario */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Destinatario</h2>
                    <div className={styles.infoCard}>
                        <p className={styles.recipientText}>{orderData.recipient}</p>
                    </div>
                </div>

                {/* Total pagado */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Total pagado</h2>
                    <div className={styles.infoCard}>
                        <p className={styles.totalText}>{orderData.total}</p>
                    </div>
                </div>

                {/* Fecha de compra */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Fecha de compra</h2>
                    <div className={styles.infoCard}>
                        <p className={styles.dateText}>{orderData.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}