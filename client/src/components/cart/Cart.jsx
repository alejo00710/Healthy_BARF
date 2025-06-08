import React from 'react';
import styles from '../../styles/cart/Cart.module.css';
import logo from '../../assets/images/Healthy Barf icono sin fondo a color.png'; // pon la ruta correcta a tu logo

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo Healthy Barf" />
            </div>
            <h2 className={styles.title}>Su carrito está vacío</h2>
            <p className={styles.text}>Para seguir navegando por el sitio o busque su producto que más le guste.</p>
            <a href="/catalogo">
                <button className={styles.btn}>Elegir productos</button>
            </a>
        </div>
    );
};

export default Cart;

