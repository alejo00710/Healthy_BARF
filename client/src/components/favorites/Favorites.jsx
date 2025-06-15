import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/favorites/Favorites.module.css';
import { useFavorites } from '../../context/FavoritesContext';
import { useAuth } from '../../context/AuthContext'; // si ya tenés un contexto de auth

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite, setFavorites } = useFavorites();
  const { user, token } = useAuth(); // user.id y token deben estar disponibles

  // 🔁 Cargar favoritos desde backend al iniciar componente
  useEffect(() => {
    if (!user || !token) return;

    const fetchFavorites = async () => {
      try {
        const response = await fetch(`http://localhost:3000/perfil/${user.id}/favoritos`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
    
        if (!response.ok) {
          const text = await response.text();
          console.error("Error de backend:", response.status, text); // <--- 👈 más detalles
          throw new Error("Error al obtener favoritos");
        }
    
        const data = await response.json();
        setFavorites(data);
      } catch (error) {
        console.error("Error al obtener favoritos:", error);
      }
    };

    fetchFavorites();
  }, [user, token, setFavorites]);

  const handleBack = () => navigate(-1);

  const handleFavoriteClick = async (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const isAlreadyFav = favorites.some(fav => fav.id === product.id);

      if (isAlreadyFav) {
        // DELETE favorito
        await fetch(`http://localhost:3000/favoritos/${product.id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        // POST favorito
        await fetch(`${import.meta.env.VITE_API_URL}/favoritos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            usuarioId: user.id,
            productoId: product.id,
          }),
        });
      }

      // Actualiza en frontend
      toggleFavorite(product);
    } catch (error) {
      console.error('Error al actualizar favorito:', error);
    }
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
  <div
    key={product.id}
    className={styles.productCard}
    onClick={() => navigate(`/product/${product.id}`)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/product/${product.id}`) }}
  >
    <div 
      className={styles.productImage} 
      style={{ backgroundImage: `url(${product.imagenUrl})` }}
    >
      <button 
        onClick={(e) => handleFavoriteClick(e, product)}
        className={styles.favoriteIcon}
      >
        ❤️
      </button>
    </div>
    <div className={styles.productInfo}>
      <h3>{product.nombre}</h3>
      <p className={styles.price}>
        ${product.precio} <span> {product.gramos}gr</span>
      </p>
    </div>
    <div className={styles.productOverlay}>
      <p className={styles.overlayDescription}>{product.description}</p>
    </div>
  </div>
))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
