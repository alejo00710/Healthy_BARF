import React, { useState } from 'react';
import styles from '../../styles/home/PortionCalculator.module.css';
import dogIcon from '../../assets/images/perro.png';
import catIcon from '../../assets/images/gato1.png';
import bgImage from '../../assets/images/pexels-mali-65175.jpg'; 

const PortionCalculator = () => {
  const [petSize, setPetSize] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calcularPorcion = () => {
    const peso = parseFloat(weight);
    if (!petSize || isNaN(peso) || peso <= 0) {
      setResult({ error: 'Por favor selecciona un tamaño y un peso válido.' });
      return;
    }

    let porcentaje = 0;

    switch (petSize) {
      case 'pequeño':
        porcentaje = 0.03;
        break;
      case 'mediano':
        porcentaje = 0.025;
        break;
      case 'grande':
        porcentaje = 0.02;
        break;
      default:
        porcentaje = 0;
    }

    const porcionDiaria = peso * 1000 * porcentaje; // gramos
    const porcionIndividual = porcionDiaria / 2; // dos comidas al día

    setResult({
      diaria: porcionDiaria.toFixed(0),
      porcion: porcionIndividual.toFixed(0),
    });
  };

  return (
    <section
      className={styles.portionCalculator}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
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
          <label htmlFor="weight">Peso de tu mascota (kg)</label>
          <input
            type="number"
            id="weight"
            className={styles.petWeight}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ej: 5.5"
          />
        </div>

        <button className={styles.calculateBtn} onClick={calcularPorcion}>
          Calcular porción
        </button>

        {result && (
          <div className={styles.result}>
            {result.error ? (
              <p className={styles.error}>{result.error}</p>
            ) : (
              <>
                <p>🍖 <strong>Ración diaria:</strong> {result.diaria} gr</p>
                <p>🥩 <strong>Por comida (2 al día):</strong> {result.porcion} gr</p>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortionCalculator;
