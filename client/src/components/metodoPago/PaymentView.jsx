// PaymentView.jsx
import React, { useState } from 'react';
import { QrCode } from 'lucide-react';
import styles from '../../styles/metodoPago/PaymentView.module.css';
import headerImage from '../../assets/images/Healthy Barf icono sin fondo-12.png';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

export default function PaymentView() {
    const [selectedPayment, setSelectedPayment] = useState('mercadopago');
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handlePayNow = () => {
        setShowModal(true);
    };

    const handleViewOrder = () => {
        setShowModal(false);
        navigate('/Detalle'); 
    };

    const handleGoHome = () => {
        setShowModal(false);
        navigate('/'); 
    };

    const paymentMethods = [
        { id: 'mercadopago', label: 'Mercado pago', showQR: false },
        { id: 'bancolombia', label: 'Bancolombia', showQR: true },
        { id: 'nequi', label: 'Nequi', showQR: true },
        { id: 'contraentrega', label: 'Pago contra entrega', showQR: false }
    ];

    const selectedMethod = paymentMethods.find(method => method.id === selectedPayment);
    const canPayNow = selectedPayment === 'contraentrega';

    return (
        <div className={styles.containerPayment}>

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
                {/* Payment Methods Section */}
                <div className={styles.paymentSection}>
                    <h2 className={styles.title}>Método de pago</h2>

                    <div className={styles.paymentMethods}>
                        {paymentMethods.map((method) => (
                            <button
                                key={method.id}
                                onClick={() => setSelectedPayment(method.id)}
                                className={`${styles.paymentButton} ${selectedPayment === method.id ? styles.paymentButtonActive : styles.paymentButtonInactive
                                    }`}
                            >
                                {method.label}
                            </button>
                        ))}
                    </div>

                    {/* Payment Details */}
                    {selectedMethod && selectedMethod.showQR && (
                        <div className={styles.paymentDetails}>
                            <h3 className={styles.paymentDetailsTitle}>
                                Pagar con {selectedMethod.label}
                            </h3>
                            <div className={styles.qrContainer}>
                                <div className={styles.qrCode}>
                                    <QrCode size={120} className={styles.qrIcon} />
                                </div>
                                <p className={styles.qrText}>
                                    Escanea el código QR con tu aplicación de {selectedMethod.label}
                                </p>
                            </div>
                        </div>
                    )}

                    {selectedPayment === 'mercadopago' && (
                        <div className={styles.paymentDetails}>
                            <h3 className={styles.paymentDetailsTitle}>
                                Pagar con Mercado Pago
                            </h3>
                            <p className={styles.mercadopagoText}>
                                Serás redirigido a Mercado Pago para completar tu pago de forma segura.
                            </p>
                            <div className={styles.mercadopagoInfo}>
                                <p className={styles.mercadopagoInfoText}>
                                    💳 Acepta tarjetas de crédito, débito y otros métodos de pago
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Order Summary Section */}
                <div className={styles.summarySection}>
                    <div className={styles.summaryCard}>
                        <h3 className={styles.summaryTitle}>Resumen de la compra</h3>

                        <div className={styles.summaryItems}>
                            <div className={styles.summaryItem}>
                                <span>Subtotal</span>
                                <span>$7,000</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span>Descuentos</span>
                                <span>$ -1,500</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span>Gastos de envío</span>
                                <span>$1,500</span>
                            </div>
                            <hr className={styles.summaryDivider} />
                            <div className={`${styles.summaryItem} ${styles.summaryTotal}`}>
                                <span>Total</span>
                                <span>$7,000</span>
                            </div>
                        </div>

                        {/* Pay Button */}
                        <button
                            disabled={!canPayNow}
                            onClick={handlePayNow}
                            className={`${styles.payButton} ${canPayNow ? styles.payButtonEnabled : styles.payButtonDisabled
                                }`}
                        >
                            Pedir ahora
                        </button>

                        {!canPayNow && (
                            <p className={styles.payButtonMessage}>
                                Completa el pago con {selectedMethod?.label} para continuar
                            </p>
                        )}

                        <ConfirmationModal
                            isOpen={showModal}
                            onClose={() => setShowModal(false)}
                            onViewOrder={handleViewOrder}
                            onGoHome={handleGoHome}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}