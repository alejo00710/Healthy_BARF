import React, { useState } from 'react';
import styles from '../../styles/home/PortionCalculator.module.css';
import dogIcon from '../../assets/images/perro.png';
import catIcon from '../../assets/images/gato1.png';
import bgImage from '../../assets/images/pexels-mali-65175.jpg'; 

const PortionCalculator = () => {
  const [petSize, setPetSize] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <section className={styles.portionCalculator}
    style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.calculatorContainer}>
        <div className={styles.petImages}>
          <img src={dogIcon} alt="Perro" className={styles.petIcon} />
          <img src={catIcon} alt="Gato" className={styles.petIcon} />
        </div>
        <h2 className={styles.calculatorTitle}>¿Qué porción darle a tu peludo?</h2>
        <div className={styles.inputGroup}>
          <label>Seleccionar tamaño</label>
          <div className={styles.sizeOptions}>
            {['Pequeño', 'Mediano', 'Grande'].map((size) => (
              <button
                key={size}
                className={`${styles.sizeBtn} ${petSize === size.toLowerCase() ? styles.active : ''}`}
                onClick={() => setPetSize(size.toLowerCase())}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="weight" >Peso de tu mascota (kg)</label>
          <input
            type="number"
            id="weight"
            className={styles.petWeight}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ej: 5.5"
          />
        </div>
        <button className={styles.calculateBtn}>Calcular porción</button>
      </div>
    </section>
  );
};

export default PortionCalculator;