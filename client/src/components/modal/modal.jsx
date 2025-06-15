// ValidacionModal.jsx
import React from 'react';
import styles from '../../styles/confirmationModal/ValidacionModal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modalCom}>
                {/* Ícono de advertencia */}
                <div className={styles.headModal}>
                <button
                        className={styles.secondaryButton}
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>
                <div className={styles.ContenidoContainer}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
