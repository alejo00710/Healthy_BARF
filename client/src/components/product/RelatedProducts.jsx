import React from 'react';
import styles from '../../styles/product/RelatedProducts.module.css';
import sampleImage from '../../assets/images/pd1.jpg'; // Asegúrate de tener esta imagen

const RelatedProducts = () => {
    return (
        <div className={styles.relatedProducts}>
            <h3>Más productos</h3>
            <div className={styles.relatedList}>
                <div className={styles.productCard}>
                    <img src={sampleImage} alt="Dieta Pollo" />
                    <p>Dieta Pollo <span className={styles.priceTag}>$3.500 • 500gr</span></p>
                </div>
                <div className={styles.productCard}>
                    <img src="https://via.placeholder.com/150x100?text=Producto" alt="Producto" />
                    <p>Dieta Pollo <span className={styles.priceTag}>$3.500 • 500gr</span></p>
                </div>
                <div className={styles.productCard}>
                    <img src="https://via.placeholder.com/150x100?text=Producto" alt="Producto" />
                    <p>Dieta Pollo <span className={styles.priceTag}>$3.500 • 500gr</span></p>
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;
