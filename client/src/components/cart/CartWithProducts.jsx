import React from 'react';
import styles from '../../styles/cart/CartWithProducts.module.css';
import logo from '../../assets/images/logo.png'; // Asegúrate de tener esta imagen en tu carpeta

import pd1 from '../../assets/images/pd1.jpg'; // Imagen de producto

const CartWithProducts = () => {
    return (
        <div className={styles.cartContainer}>
            <img className={styles.logo} src={logo} alt="Healthy BARF logo" />

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={pd1} alt="Dieta de pollo" />
                            <br />Dieta de pollo
                        </td>
                        <td className={styles.cantidad}>
                            <button>-</button> 1 <button>+</button>
                        </td>
                        <td>$3.500 <span className={styles.eliminar}>×</span></td>
                    </tr>
                    <tr>
                        <td>
                            <img src={pd1} alt="Dieta de res" />
                            <br />Dieta de res
                        </td>
                        <td className={styles.cantidad}>
                            <button>-</button> 1 <button>+</button>
                        </td>
                        <td>$3.500 <span className={styles.eliminar}>×</span></td>
                    </tr>
                </tbody>
            </table>

            <div className={styles.divider}></div>

            <div className={styles.summary}>
                <h2>Resumen de la compra</h2>
                <div className={styles.item}>
                    <span>Subtotal</span>
                    <span>$7.000</span>
                </div>
                <div className={styles.item}>
                    <span>Descuentos</span>
                    <span>-$3.500</span>
                </div>
                <div className={styles.item}>
                    <span>Gastos de envío</span>
                    <span>$3.500</span>
                </div>
            </div>

            <div className={styles.totalp}>
                <p><strong>Total</strong> <strong>$7.000</strong></p>
            </div>

            <a href="/datos">
                <button className={styles.checkoutBtn}>Finalizar compra</button>
            </a>
        </div>
    );
};

export default CartWithProducts;
