import React from 'react';
import styles from '../../styles/home/Hero.module.css';
import heroImage from '../../assets/images/cute-puppy-group-sitting-looking-camera-indoors-generated-by-artificial-intelligence.jpg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroSliderPlaceholder}>
        <img src={heroImage} alt="Mascotas felices" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default Hero;