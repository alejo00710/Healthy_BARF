import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../../styles/product/CatalogoProducts.module.css';
import { CartContext } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { useAuth } from '../../context/AuthContext';

const CatalogoProducts = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const { user, token } = useAuth();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useContext(CartContext);

  const categoriaSeleccionada = new URLSearchParams(location.search).get('categoria');

  const handleBack = () => {
    navigate(-1);
  };

  const handleFavoriteClick = async (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user || !token) {
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
        if (!res.ok) throw new Error("Error al agregar favorito");
      }

      toggleFavorite(product);
    } catch (error) {
      console.error("Error al actualizar favorito:", error);
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/producto/listar')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      });
  }, []);

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(producto => producto.categoria?.toLowerCase() === categoriaSeleccionada.toLowerCase())
    : productos;

  return (
    <section className={styles.catalogo}>
      <button onClick={handleBack} className={styles.backButton}>
        &lt; Volver
      </button>

      <h1 className={styles.productsHeader}>Frescura y nutrición en cada bocado</h1>
      <p className={styles.productsDescription}>
        Consiente a tu peludo de la manera más sana con nuestras dietas BARF.
      </p>

      {categoriaSeleccionada && (
        <p className={styles.productsDescription}>
          Mostrando productos para: <strong>{categoriaSeleccionada}</strong>
        </p>
      )}

      {loading ? (
        <p>Cargando productos...</p>
      ) : productosFiltrados.length === 0 ? (
        <p>No hay productos para esta categoría.</p>
      ) : (
        <div className={styles.productsGrid}>
          {productosFiltrados.map(product => (
            <Link to={`/product/${product.id}`} className={styles.productCard} key={product.id}>
              <div
                className={styles.productImage}
                style={{ backgroundImage: `url(${product.imagenUrl})` }}
              ></div>
              <div className={styles.productInfo}>
                <h3>{product.nombre}</h3>
                <p className={styles.price}>
                  ${product.precio} <span> {product.gramos}gr</span>
                </p>
              </div>
              <div className={styles.productOverlay}>
                <p className={styles.overlayDescription}>{product.descripcion}</p>
                <div className={styles.productIcons}>
                  <button
                    className={styles.iconBtn}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    🛒
                  </button>
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
      )}
    </section>
    
  );
};

export default CatalogoProducts;
