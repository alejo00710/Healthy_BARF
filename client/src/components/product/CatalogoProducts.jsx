import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import styles from '../../styles/product/CatalogoProducts.module.css';
import pescado from '../../assets/images/Pescado Premium.jpg';
import pollo from '../../assets/images/pollo y verduras.jpg';
import pollo2 from '../../assets/images/pollo y frutas.jpg';
import res from '../../assets/images/res y verduras.jpg';
import ternera from '../../assets/images/ternera y cordero.jpg';
import horneadito from '../../assets/images/horneadito.jpg';

const productData = [
    {
        category: 'Perros',
        products: [
            { id: 1, name: 'Dieta Pollo y verduras', price: '$2.300', weight: '200gr', description: 'Conoce más acerca de este producto...', image: pollo },
            { id: 2, name: 'Dieta Pollo y verduras', price: '$5.200', weight: '500gr', description: 'Conoce más acerca de este producto...', image: pollo },
            { id: 3, name: 'Dieta Pollo y frutas', price: '$5.700', weight: '400gr', description: 'Conoce más acerca de este producto...', image: pollo2 },
            { id: 4, name: 'Dieta Ternera y cordero Premium', price: '$7.200', weight: '400gr', description: 'Conoce más acerca de este producto...', image: ternera },
            { id: 5, name: 'Dieta Res y verduras', price: '$6.200', weight: '400gr', description: 'Conoce más acerca de este producto...', image: res },
            { id: 6, name: 'Horneadito Premium', price: '$8.000', weight: '500gr', description: 'Conoce más acerca de este producto...', image: horneadito },
        ],
    },
    {
        category: 'Gatos',
        products: [
            { id: 9, name: 'Pescado Premium', price: '$4.700', weight: '200gr', description: 'Conoce más acerca de este producto...', image: pescado },
        ],
    },
];

const CatalogoProducts = () => {
    const navigate = useNavigate();
    const { toggleFavorite, isFavorite } = useFavorites();

    const handleBack = () => {
        navigate(-1);
    };

    const handleFavoriteClick = (e, product) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        toggleFavorite(product);
    };

    return (
        <section className={styles.catalogo}>
            <button onClick={handleBack} className={styles.backButton}>
                &lt; Volver
            </button>
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
                                        <button 
                                            onClick={(e) => handleFavoriteClick(e, product)}
                                            className={`${styles.iconBtn} ${isFavorite(product.id) ? styles.favoriteActive : ''}`}
                                        >
                                            {isFavorite(product.id) ? '❤️' : '🤍'}
                                        </button>
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