import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/product/CatalogoProducts.module.css';
import pollo from '../../assets/images/pd1.jpg';

const productData = [
    {
        category: 'Perros',
        products: [
            { id: 1, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Ideal para perros activos', image: pollo },
            { id: 2, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Ideal para perros activos', image: pollo },
            { id: 3, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Ideal para perros activos', image: pollo },
            { id: 4, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Ideal para perros activos', image: pollo },
            { id: 5, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Ideal para perros activos', image: pollo },
            { id: 6, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Ideal para perros activos', image: pollo },
            { id: 7, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Ideal para perros activos', image: pollo },
            { id: 8, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Ideal para perros activos', image: pollo },
        ],
    },
    {
        category: 'Gatos',
        products: [
            { id: 9, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Nutrición para gatos sanos', image: pollo },
            { id: 10, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Nutrición para gatos sanos', image: pollo },
            { id: 11, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Nutrición para gatos sanos', image: pollo },
            { id: 12, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Nutrición para gatos sanos', image: pollo },
            { id: 13, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Ideal para perros activos', image: pollo },
            { id: 14, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Ideal para perros activos', image: pollo },
            { id: 15, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Ideal para perros activos', image: pollo },
            { id: 16, name: 'Dieta Pollo', price: '$3.500', weight: '500gr', description: 'Ideal para perros activos', image: pollo },
        ],
    },
];

const CatalogoProducts = () => {
    return (
        <section className={styles.catalogo}>
            <Link to="/" className={styles.backLink}>‹ Volver</Link>
            <h1 className={styles.productsHeader}>Frescura y nutrición en cada bocado</h1>
            <p className={styles.productsDescription}>Consiente a tu peludo de la manera más sana con nuestras dietas BARF.</p>

            <h3 className={styles.sectionTitle}>Alimentos BARF</h3>

            {productData.map(({ category, products }) => (
                <div key={category}>
                    <h3 className={styles.categoryTitle}>{category}</h3>
                    <div className={styles.productsGrid}>
                        {products.map((product) => (
                            <Link to={`/product/${product.id}`} className={styles.productCard} key={product.id}>
                                <div
                                    className={styles.productImage}
                                    style={{ backgroundImage: `url(${product.image})` }}
                                ></div>
                                <div className={styles.productInfo}>
                                    <h3>{product.name}</h3>
                                    <p className={styles.price}>{product.price} <span>* {product.weight}</span></p>
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
            ))}
        </section>
    );
};

export default CatalogoProducts;

