import React from 'react';
import styles from '../../styles/home/Header.module.css';
import logo from '../../assets/images/Healthy Barf icono sin fondo-13.png';
import carrito from '../../assets/icons/carrito-de-compras.svg';
import usuario from '../../assets/icons/usuario.svg';
import favorito from '../../assets/icons/corazon.svg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
      <div className="container">
        <p className={styles.slogan}>Salud y vitalidad en cada bocado</p>
      </div>
      </div>
      <div className={styles.mainNav}>
        <div className="container">
          <nav className={styles.navbar}>
            <div className={styles.logoPlaceholder}>
              <img src={logo} alt="Healthy BARF" className={styles.logoImg} />
            </div>
            <ul className={styles.navLinks}>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Perros</a></li>
              <li><a href="#">Gatos</a></li>
              <li><a href="#">Nosotros</a></li>
            </ul>
            <div className={styles.navIcons}>
              <a href="#"><img src={carrito} alt="Carrito" /></a> 
              <Link to="/editProfile"><img src={usuario} alt="Usuario" /></Link> 
              <Link to="/favorite"><img src={favorito} alt="Favorito" /></Link> 
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;