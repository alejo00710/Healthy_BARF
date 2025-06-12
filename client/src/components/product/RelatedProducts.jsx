import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/product/RelatedProducts.module.css';
import sampleImage from '../../assets/images/pd1.jpg'; // Reemplázalo con tus imágenes reales

const relatedProducts = [
    {
        id: 1,
        name: 'Dieta Pollo',
        price: '$3.500',
        weight: '500gr',
        image: sampleImage,
        description: 'Ideal para perros de todas las edades.',
    },
    {
        id: 2,
        name: 'Dieta Res',
        price: '$3.800',
        weight: '500gr',
        image: 'https://via.placeholder.com/300x200?text=Res',
        description: 'Proteína de alta calidad para tu mascota.',
    },
    {
        id: 3,
        name: 'Dieta Pavo',
        price: '$4.000',
        weight: '500gr',
        image: 'https://via.placeholder.com/300x200?text=Pavo',
        description: 'Alimento balanceado con sabor suave.',
    },
];

const RelatedProducts = () => {
    return (
        <div className={styles.relatedProducts}>
            <h3>Más productos</h3>
            <div className={styles.productsGrid}>
                {relatedProducts.map((product) => (
                    <Link
                        to={`/product/${product.id}`}
                        className={styles.productCard}
                        key={product.id}
                    >
                        <div
                            className={styles.productImage}
                            style={{ backgroundImage: `url(${product.image})` }}
                        ></div>

                        <div className={styles.productInfo}>
                            <h3>{product.name}</h3>
                            <p className={styles.price}>
                                {product.price} <span>* {product.weight}</span>
                            </p>
                        </div>

                        <div className={styles.productOverlay}>
                            <p className={styles.overlayDescription}>{product.description}</p>
                            <div className={styles.productIcons}>
                                <Link to="/carritoProduct" className={styles.iconBtn}>🛒</Link>
                                <Link to="/favorite" className={styles.iconBtn}>❤️</Link>                                
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;

