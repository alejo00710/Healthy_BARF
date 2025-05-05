import React from 'react';
import styles from '../../styles/home/AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className="container">
        <h2 className={styles.sectionTitle}>¿Quiénes somos?</h2>
        <div className={styles.aboutContent}>
          <h3>¡Bienvenido a Healthy BARF!</h3>
          <p>En Healthy BARF, mejoramos la vida de tus mascotas con alimentos crudos y saludables, sin aditivos ni conservantes. Nuestros productos frescos optimizan la salud, el peso y el sistema inmune de perros y gatos.</p>
          <p>Ofrecemos asesoría personalizada y una plataforma en línea para compras fáciles y acceso a toda la información que necesitas. Estamos comprometidos con el bienestar de tus mascotas.</p>
          <p className={styles.signature}>¡Gracias por confiar en Healthy BARF!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;