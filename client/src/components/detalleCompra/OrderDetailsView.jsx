
import React from 'react';
import styles from '../../styles/detalleCompra/OrderDetails.module.css';
import headerImage from '../../assets/images/Healthy Barf icono sin fondo-12.png';
import polloVerduras from '../../assets/images/pollo y verduras.jpg';
import { useNavigate } from 'react-router-dom';

export default function OrderDetailsView() {
    const orderData = {
        products: [
            {
                id: 1,
                name: "Dosis de polo",
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
        date: "12 de marzo de 2025"
    };

    const navigate = useNavigate();
    
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

            <div className={styles.headerBackButton}>
                <button onClick={handleBack} className={styles.backButton}>
                    &lt; Volver
                </button>
            </div>

            <div className={styles.wrapper}>
                <h1 className={styles.title}>
                    Detalle de la compra
                </h1>

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