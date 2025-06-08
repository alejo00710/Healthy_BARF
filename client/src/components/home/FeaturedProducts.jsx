import React from 'react';
import styles from '../../styles/home/FeaturedProducts.module.css';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';





const FeaturedProducts = () => {
  return (
    <section className={styles.featuredProducts}>
      <div className="container">
        <div className={styles.productsHeader}>
          <h2>Productos destacados</h2>
          <p className={styles.productsDescription}>
            Ingredientes libres de conservantes y aditivos...
          </p>
        </div>

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
                  <button className={styles.iconBtn}> 🛒</button>
                  <button className={styles.iconBtn}>❤️</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;