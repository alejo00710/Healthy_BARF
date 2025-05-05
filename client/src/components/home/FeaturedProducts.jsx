import React from 'react';
import styles from '../../styles/home/FeaturedProducts.module.css';
import polloVerduras from '../../assets/images/pollo y verduras.jpg';


const products = [
  {
    id: 1,
    name: "Dieta Pollo",
    price: "$3.500",
    weight: "500gr",
    image: polloVerduras,
    description: "Descripción detallada del producto..."
  },
  {
    id: 2,
    name: "Dieta Pollo",
    price: "$3.500",
    weight: "500gr",
    image: polloVerduras,
    description: "Descripción detallada del producto..."
  },
  {
    id: 3,
    name: "Dieta Pollo",
    price: "$3.500",
    weight: "500gr",
    image: polloVerduras,
    description: "Descripción detallada del producto..."
  },
  {
    id: 4,
    name: "Dieta Pollo",
    price: "$3.500",
    weight: "500gr",
    image: polloVerduras,
    description: "Descripción detallada del producto..."
  },
  // Más productos...
];

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
            <div key={product.id} className={styles.productCard}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;