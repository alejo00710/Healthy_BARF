import React, { useState } from 'react';
import styles from '../../styles/metodoEntrega/Entrega.module.css';
import headerImage from '../../assets/images/Healthy Barf icono sin fondo-12.png';
import { useNavigate } from 'react-router-dom';

const MetodoEntrega = () => {
    const [department, setDepartment] = useState('');
    const [street, setStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [recipient, setRecipient] = useState('');
    const [municipality, setMunicipality] = useState('');

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleGoToPayment = () => {
        navigate('/Pago');
    };

    return (
        <div className={styles.containerEntrega}>
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
            
            <h2 className={styles.title}>Método de entrega</h2>

            {/* Menú deslizante */}
            <div className={styles.tabsContainer}>
                <h3 className={styles.tabTitle}>Envio a domicilio</h3>
            </div>

            {/* Contenido principal - ahora en columna */}
            <div className={styles.content}>
                <div className={styles.deliverySection}>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            placeholder="Departamento"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            value={municipality}
                            onChange={(e) => setMunicipality(e.target.value)}
                            placeholder="Municipio"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            value={neighborhood}
                            onChange={(e) => setNeighborhood(e.target.value)}
                            placeholder="Barrio"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            placeholder="Dirección"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                            placeholder="Destinatario"
                        />
                    </div>
                </div>

                {/* Botón de pago */}
                <button
                    className={styles.paymentButton}
                    onClick={handleGoToPayment}
                >
                    Ir a método de pago
                </button>

                {/* Resumen de compra ahora abajo */}
                <div className={styles.summaryCard}>
                    <h3>Resumen de la compra</h3>
                    <div className={styles.summaryRow}>
                        <span>Subtotal</span>
                        <span>$7000</span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span>Descuentos</span>
                        <span>$-3.500</span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span>Gastos de envío</span>
                        <span>$3.500</span>
                    </div>
                    <div className={styles.summaryTotal}>
                        <span>Total</span>
                        <span>$7000</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MetodoEntrega;