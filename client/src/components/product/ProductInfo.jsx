import React, { useState } from 'react';
import styles from '../../styles/product/ProductInfo.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { useFavorites } from '../../context/FavoritesContext';

const ProductInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toggleFavorite, isFavorite } = useFavorites();
    const [quantity, setQuantity] = useState(1);

    // Buscar el producto por ID
    const product = products.find(p => p.id === parseInt(id));

    const handleBack = () => {
        navigate(-1);
    };

    const handleFavoriteClick = () => {
        toggleFavorite(product);
    };

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prev => prev > 1 ? prev - 1 : 1);
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 1) {
            setQuantity(value);
        }
    };

    if (!product) {
        return (
            <div className={styles.container}>
                <button onClick={handleBack} className={styles.backButton}>
                    &lt; Volver
                </button>
                <p>Producto no encontrado</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <button onClick={handleBack} className={styles.backButton}>
                &lt; Volver
            </button>
            <div className={styles.productWrapper}>
                <div className={styles.productImage}>
                    <img src={product.image} alt={product.name} />
                </div>

                <div className={styles.productInfo}>
                    <div className={styles.productTitle}>{product.name}</div>
                    <div className={styles.productPrice}>
                        Unidad por {product.weight}<br />
                        <strong>{product.price}</strong>
                    </div>

                    <div className={styles.btnGroup}>
                        <div className={styles.quantityControls}>
                            <button 
                                onClick={decreaseQuantity}
                                className={styles.quantityBtn}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <input 
                                type="number" 
                                value={quantity}
                                onChange={handleQuantityChange}
                                className={styles.quantityInput}
                                min="1"
                            />
                            <button 
                                onClick={increaseQuantity}
                                className={styles.quantityBtn}
                            >
                                +
                            </button>
                        </div>
                        <button className={styles.addToCartBtn}>
                            Añadir al carrito ({quantity})
                        </button>
                        <button 
                            onClick={handleFavoriteClick}
                            className={`${styles.favoriteBtn} ${isFavorite(product.id) ? styles.favoriteActive : ''}`}
                        >
                            {isFavorite(product.id) ? '❤️ Quitar de favoritos' : '🤍 Añadir a favoritos'}
                        </button>
                    </div>

                    <h2 className={styles.productDesc}>
                        {product.shortDescription || product.description}
                    </h2>

                    <p className={styles.descTitle}>Descripción</p>
                    <h2 className={styles.productDesc}>
                        {product.fullDescription ||
                            "Es el mejor alimento que le puedes dar a tu mascota 🐶 Puedes estar completamente seguro porque contamos con la mejor calidad y cuidado para que tu peludo disfrute de un delicioso y sano alimento."}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;