// ConfirmationModal.jsx
import React from 'react';
import { Check } from 'lucide-react';
import styles from '../../styles/confirmationModal/ConfirmationModal.module.css';

const ConfirmationModal = ({ isOpen, onClose, onViewOrder, onGoHome }) => {
    if (!isOpen) return null;

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
                    Gracias por su compra si quieres saber mas acerca de su compra puedes ver tu pedido aquí
                </p>

                {/* Botones */}
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.primaryButton}
                        onClick={onViewOrder}
                    >
                        Ver pedido
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