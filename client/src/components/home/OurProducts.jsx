import React from 'react';
import styles from '../../styles/home/OurProducts.module.css';
import dogImage from '../../assets/images/perro.png';
import catImage from '../../assets/images/gato1.png';
import bgImage from '../../assets/images/Diseño sin título (2).png';

const OurProducts = () => {
  return (
    <section 
      className={styles.ourProducts} 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <h2 className={styles.sectionTitle1}>Nuestros Productos</h2>
        
        <div className={styles.productsGrid1}>
          <div className={`${styles.productCard1} ${styles.blueCard}`}>
            <h3 className={styles.productTitle}>Alimento BARF</h3>
            <div className={styles.productImage1}>
              <img src={dogImage} alt="Para perros" className={styles.petImg} />
              <img src={catImage} alt="Para gatos" className={styles.petImg} />
            </div>
          </div>
          
          <div className={`${styles.productCard1} ${styles.yellowCard}`}>
            <h3 className={styles.productTitle}>Snacks</h3>
            <div className={styles.productImage1}>
              <img src={dogImage} alt="Para perros"className={styles.petImg}/>
              <img src={catImage} alt="Para gatos" className={styles.petImg}/>
            </div>
          </div>
        </div>
        
        <div className={styles.viewAllContainer}>
          <a href="#" className={styles.viewAllBtn}>VER TODO</a>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;