import React from 'react';
import styles from '../../styles/home/Testimonials.module.css';
import userImage from '../../assets/images/happy-handsome-man.jpg';

const testimonials = [
  {
    id: 1,
    name: "Antonio Vélez",
    comment: "Desde que usé Healthy BARF, mi perro está más activo y feliz."
  },
  {
    id: 2,
    name: "Antonio Vélez",
    comment: "Desde que usé Healthy BARF, mi perro está más activo y feliz."
  },
  {
    id: 3,
    name: "Antonio Vélez",
    comment: "Desde que usé Healthy BARF, mi perro está más activo y feliz."
  },
  // Más testimonios...
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Testimonios reales</h2>
          <p className={styles.subtitle}>
          La experiencia Healthy Barf a través de los ojos de nuestros clientes felices. Únete a nuestra comunidad y comparte la alegría con tus peludos.
          </p>
        </div>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div 
                className={styles.userAvatar} 
                style={{ backgroundImage: `url(${userImage})` }}
              />
              <div className={styles.stars}>
                {'★'.repeat(5).split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <blockquote>
                <footer>{testimonial.name}</footer>
                <p>"{testimonial.comment}"</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;