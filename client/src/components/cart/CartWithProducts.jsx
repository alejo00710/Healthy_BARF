import React from 'react';
import styles from '../../styles/cart/CartWithProducts.module.css';
import logo from '../../assets/images/logo.png';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWithProducts = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const envio = cartItems.length > 0 ? 3500 : 0;
  const total = subtotal + envio;

  if (cartItems.length === 0) {
    return (
      <div className={styles.cartContainer}>
        <img className={styles.logo} src={logo} alt="Healthy BARF logo" />
        <h2>Tu carrito está vacío</h2>
        <Link to="/catalogo">
          <button className={styles.checkoutBtn}>Ir al catálogo</button>
        </Link>
      </div>
    );
  }

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
          {cartItems.map(producto => (
            <tr key={producto.id}>
              <td>
                <img src={producto.imagenUrl} alt={producto.nombre} />
                <br />{producto.nombre}
              </td>
              <td className={styles.cantidad}>
                <button onClick={() => updateQuantity(producto.id, -1)}>-</button>
                {producto.cantidad}
                <button onClick={() => updateQuantity(producto.id, 1)}>+</button>
              </td>
              <td>
                ${producto.precio * producto.cantidad}{' '}
                <span className={styles.eliminar} onClick={() => removeFromCart(producto.id)}>×</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.divider}></div>

      <div className={styles.summary}>
        <h2>Resumen de la compra</h2>
        <div className={styles.item}>
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className={styles.item}>
          <span>Descuentos</span>
          <span>$0</span>
        </div>
        <div className={styles.item}>
          <span>Gastos de envío</span>
          <span>${envio}</span>
        </div>
      </div>

      <div className={styles.totalp}>
        <p><strong>Total</strong> <strong>${total}</strong></p>
      </div>

      <a href="/datos">
        <button className={styles.checkoutBtn}>Finalizar compra</button>
      </a>
    </div>
  );
};

export default CartWithProducts;
