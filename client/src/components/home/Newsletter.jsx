import React from 'react';
import styles from '../../styles/home/Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div className="container">
        <h3>¡Suscríbete para recibir ofertas especiales!</h3>
        <p>Obtén los nuevos lanzamientos y promociones</p>
        <form className={styles.newsletterForm}>
          <input 
            type="email" 
            placeholder="Correo Electrónico" 
            required 
          />
          <button type="submit" className={styles.btnSubscribe}>
            Suscríbete
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;