import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/favorites/Favorites.module.css';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();

  const handleBack = () => {
    navigate(-1);
  };

  const handleFavoriteClick = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

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
        
        {favorites.length === 0 ? (
          <div className={styles.emptyFavorites}>
            <p>No tienes productos favoritos aún</p>
            <Link to="/catalogo" className={styles.catalogoLink}>
              Ver catálogo
            </Link>
          </div>
        ) : (
          <div className={styles.productsGrid}>
            {favorites.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className={styles.productCard}>
                <div 
                  className={styles.productImage} 
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <button 
                    onClick={(e) => handleFavoriteClick(e, product)}
                    className={styles.favoriteIcon}
                  >
                    ❤️
                  </button>
                </div>
                <div className={styles.productInfo}>
                  <h3>{product.name}</h3>
                  <p className={styles.price}>{product.price} <span>* {product.weight}</span></p>
                </div>
                <div className={styles.productOverlay}>
                  <p className={styles.overlayDescription}>{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;