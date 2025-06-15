// ValidacionModal.jsx
import React from 'react';
import { AlertCircle } from 'lucide-react';
import styles from '../../styles/confirmationModal/ValidacionModal.module.css';

const ValidacionModal = ({ isOpen, onClose, onLoginRedirect }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {/* Ícono de advertencia */}
                <button
                        className={styles.secondaryButton}
                        onClick={onClose}
                    >
                        X
                    </button>
                <div className={styles.iconContainer}>
                    <AlertCircle className={styles.alertIcon} size={48} />
                </div>

                {/* Título */}
                <h2 className={styles.title}>Acción no permitida</h2>

                {/* Mensaje */}
                <p className={styles.message}>
                    Para agregar productos a favoritos necesitas iniciar sesión primero.
                </p>

                {/* Botones */}
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.primaryButton}
                        onClick={onLoginRedirect}
                    >
                        Iniciar sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ValidacionModal;
