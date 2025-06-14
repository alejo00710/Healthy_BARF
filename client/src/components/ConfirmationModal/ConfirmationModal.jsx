// ConfirmationModal.jsx
import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../../context/OrderContext'; 
import styles from '../../styles/confirmationModal/ConfirmationModal.module.css';

const ConfirmationModal = ({ isOpen, onClose, onGoHome }) => {
    const navigate = useNavigate();
    const { currentOrderId } = useOrder();

    if (!isOpen) return null;

    const handleViewOrder = () => {
        // Ir al detalle del pedido actual
        if (currentOrderId) {
            navigate(`/order-details/${currentOrderId}`);
            onClose();
        }
    };

    const handleViewAllOrders = () => {
        navigate('/all-orders');
        onClose();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {/* Ícono de check */}
                <div className={styles.iconContainer}>
                    <Check className={styles.checkIcon} size={48} />
                </div>

                {/* Título */}
                <h2 className={styles.title}>Pedido confirmado</h2>

                {/* Mensaje */}
                <p className={styles.message}>
                    Gracias por su compra. Si quieres saber más acerca de tu compra puedes ver tu pedido aquí
                </p>

                {/* Botones */}
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.primaryButton}
                        onClick={handleViewOrder}
                    >
                        Ver este pedido
                    </button>

                    <button
                        className={styles.tertiaryButton}
                        onClick={handleViewAllOrders}
                    >
                        Ver todos mis pedidos
                    </button>

                    <button
                        className={styles.secondaryButton}
                        onClick={onGoHome}
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;