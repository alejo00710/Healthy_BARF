import React from 'react';
import styles from '../../styles/favorites/Favorites.module.css';
import { useNavigate } from 'react-router-dom';
import polloVerduras from '../../assets/images/pollo y verduras.jpg';

const Favorites = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  // Datos de ejemplo basados en tu estructura
  const favoriteProducts = [
    {
      id: 1,
      name: "Ditta Pollo",
      price: "$3.500",
      weight: "500gr",
      image: polloVerduras,
      description: "Una breve explicación de producto quel nome di cliente di computer."
    },
    {
      id: 2,
      name: "Ditta Pollo",
      price: "$3.500",
      weight: "500gr",
      image: polloVerduras,
      description: "Una breve explicación de producto quel nome di cliente di computer."
    },
    {
      id: 3,
      name: "Ditta Pollo",
      price: "$3.500",
      weight: "500gr",
      image: polloVerduras,
      description: "Una breve explicación de producto quel nome di cliente di computer."
    },
    {
      id: 4,
      name: "Ditta Pollo",
      price: "$3.500",
      weight: "500gr",
      image: polloVerduras,
      description: "Una breve explicación de producto quel nome di cliente di computer."
    }
  ];

  return (
    <div className={styles.favoritesContainer}>
      <div className={styles.header}>
        <button onClick={handleBack} className={styles.backButton}>
          &lt; Volver
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.productsHeader}>
          <h2>Favoritos</h2>
          <p className={styles.productsDescription}>
            Tus productos favoritos guardados para compra rápida
          </p>
        </div>
        
        <div className={styles.productsGrid}>
          {favoriteProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div 
                className={styles.productImage} 
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <button className={styles.favoriteIcon}>❤️</button>
              </div>
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p className={styles.price}>{product.price} <span>* {product.weight}</span></p>
              </div>
              <div className={styles.productOverlay}>
                <p className={styles.overlayDescription}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.productsHeader}>
          <h2>Te pueden interesar</h2>
          <p className={styles.productsDescription}>
            Productos recomendados basados en tus favoritos
          </p>
        </div>
        
        <div className={styles.productsGrid}>
          {favoriteProducts.map((product) => (
            <div key={`rec-${product.id}`} className={styles.productCard}>
              <div 
                className={styles.productImage} 
                style={{ backgroundImage: `url(${product.image})` }}
              >
              </div>
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p className={styles.price}>{product.price} <span>* {product.weight}</span></p>
              </div>
              <div className={styles.productOverlay}>
                <p className={styles.overlayDescription}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;