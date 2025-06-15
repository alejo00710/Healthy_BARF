import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../../styles/product/ProductInfo.module.css';
import { useCart } from '../../context/CartContext';

const ProductInfo = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:3000/producto/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar producto:', error);
        setLoading(false);
      });
  }, [id]);

  const aumentarCantidad = () => setCantidad(prev => prev + 1);
  const disminuirCantidad = () => setCantidad(prev => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    if (producto) {
      addToCart(producto, cantidad);
    }
  };

  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>‹ Volver</Link>

      <div className={styles.productWrapper}>
        <div className={styles.productImage}>
          <img src={producto.imagenUrl} alt={producto.nombre} />
        </div>

        <div className={styles.productInfo}>
          <div className={styles.productTitle}>{producto.nombre}</div>
          <div className={styles.productPrice}>
            Unidad por {producto.presentacion || '500gr'}<br />
            <strong>${producto.precio}</strong>
          </div>

          <div className={styles.btnGroup}>
            <button onClick={disminuirCantidad}>-</button>
            {cantidad}
            <button onClick={aumentarCantidad}>+</button>
            <button onClick={handleAddToCart}>Añadir al carrito</button>
            <button className={styles.favoriteBtn}>Añadir a favoritos</button>
          </div>

          <p className={styles.descTitle}>Descripción</p>
          <h2 className={styles.productDesc}>{producto.descripcion}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
