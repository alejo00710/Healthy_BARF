import React, { useEffect, useState } from 'react';
import styles from '../../styles/home/FeaturedProducts.module.css';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import ValidacionModal from '../ConfirmationModal/ValidacionModal';
import { useAuth } from '../../context/AuthContext';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const {favorites, toggleFavorite, isFavorite } = useFavorites();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, token } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`http://localhost:3000/producto/listar`);
        const data = await res.json();

        // Filtra productos que sean "featured" y "disponible"
        const destacados = data
          
          .slice(0, 4); // Solo los primeros 4

        setFeaturedProducts(destacados);
      } catch (error) {
        console.error('Error al cargar productos destacados:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleFavoriteClick = async (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    

    if (!user || !token) {
      setShowLoginModal(true);
      console.warn("Usuario no autenticado. No se puede guardar favorito.");
      return;
    }

    try {
      const isAlreadyFav = favorites.some(fav => fav.id === product.id);

      if (isAlreadyFav) {
        const res = await fetch(`http://localhost:3000/favoritos/${product.id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Error al eliminar favorito");
      } else {
        const res = await fetch(`http://localhost:3000/favoritos`, {
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
        toggleFavorite(product);
        if (!res.ok) throw new Error("Error al agregar favorito");
      }
      toggleFavorite(product);
    } catch (error) {
      console.error("Error al actualizar favorito:", error);
    }
  };

  return (
    <section className={styles.featuredProducts}>
      <div className="container">
        <div className={styles.productsHeader}>
          <h2>Productos destacados</h2>
          <p className={styles.productsDescription}>
          Cada uno de los ingredientes son libres de conservantes y aditivos. Las frutas y verduras son frescas y de los campos colombianos; y con todo esto, logramos la fórmula perfecta para que sea el alimento que mantendrá a tu peludo saludable y feliz.
          </p>
        </div>

        <div className={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <Link to={`/product/${product.id}`} className={styles.productCard} key={product.id}>
              <div
                className={styles.productImage}
                style={{ backgroundImage: `url(${product.imagenUrl})` }}
              ></div>
              <div className={styles.productInfo}>
                <h3>{product.nombre}</h3>
                <p className={styles.price}>$ {product.precio} <span> {product.gramos} gr</span></p>
              </div>
              <div className={styles.productOverlay}>
                <p className={styles.overlayDescription}>{product.descripcion}</p>
                <div className={styles.productIcons}>
                  <button className={styles.iconBtn}>🛒</button>
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
      <ValidacionModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginRedirect={() => {
          setShowLoginModal(false);
          window.location.href = '/login';
        }}
      />
    </section>
  );
};

export default FeaturedProducts;
