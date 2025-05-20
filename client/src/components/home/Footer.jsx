import React from 'react';
import styles from '../../styles/home/Footer.module.css';
import whatsappIcon from '../../assets/images/icons8-whatsapp-100.png';

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={`container ${styles.container}`}>
        <div className={styles.footerGrid}>
          {/* Columna Contacto */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Contáctanos</h3>
            <a href="#" className={styles.whatsappBtn}>
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
          </div>

          {/* Columna Términos */}
          <div className={styles.footerColumn}>
            <h4 className={styles.sectionTitle}>Términos y condiciones</h4>
            <ul>
              <li><a href="#">Política de envío</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Política de reembolso</a></li>
              <li><a href="#">Términos y condiciones</a></li>
            </ul>
          </div>

          {/* Columna Dirección */}
          <div className={styles.footerColumn}>
            <h4 className={styles.sectionTitle}>Encuéntranos en:</h4>
            <address>
              <p>Cra 45b # 45-66 Barrio Buenos Aires</p>
              <p>Tel: 32/4432222 - 300500222</p>
              <p>L-V: 8:00 am a 6:00 pm</p>
              <p>Sábados: 9:00 am a 2:00 pm</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>Copyright © 2024 | Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
