import React, { useState } from 'react';
import styles from '../../styles/metodoEntrega/Entrega.module.css';
import headerImage from '../../assets/images/Healthy Barf icono sin fondo-12.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const MetodoEntrega = () => {
  const [department, setDepartment] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [recipient, setRecipient] = useState('');
  const [municipality, setMunicipality] = useState('');

  const navigate = useNavigate();
  const { user, token } = useAuth();
  const { cartItems, clearCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  const gastosEnvio = 3500;
  const total = subtotal + gastosEnvio;

  const handleBack = () => {
    navigate(-1);
  };

  const handleGoToPayment = async () => {
    if (!street || !neighborhood || !municipality || !department || !recipient) {
      alert("Por favor completa todos los campos de dirección.");
      return;
    }

    if (!user || !token) {
      alert("Debes iniciar sesión para hacer un pedido.");
      return;
    }

    const direccion = `${street}, ${neighborhood}, ${municipality}, ${department}`;
    const items = cartItems.map(item => ({
      productoId: item.id,
      cantidad: item.cantidad,
      precioUnitario: item.precio
    }));

    try {
      const response = await fetch("http://localhost:3000/pedido", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          usuarioId: user.id,
          direccion,
          total,
          items,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al crear el pedido");
      }

      const data = await response.json();
      console.log("Pedido generado con éxito:", data);

      clearCart(); // Limpiar el carrito después de hacer el pedido
      navigate('/Pago');
    } catch (error) {
      console.error("Error al generar pedido:", error);
    }
  };

  return (
    <div className={styles.containerEntrega}>
      <div className={styles.headerBackButton}>
        <button onClick={handleBack} className={styles.backButton}>
          &lt; Volver
        </button>
      </div>

      <div className={styles.profileHeader}>
        <img src={headerImage} alt="Healthy Barf" className={styles.headerImage} />
      </div>

      <h2 className={styles.title}>Método de entrega</h2>

      <div className={styles.tabsContainer}>
        <h3 className={styles.tabTitle}>Envío a domicilio</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.deliverySection}>
          <div className={styles.formGroup}>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Departamento"
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              value={municipality}
              onChange={(e) => setMunicipality(e.target.value)}
              placeholder="Municipio"
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              placeholder="Barrio"
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Dirección"
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Destinatario"
            />
          </div>
        </div>

        <button className={styles.paymentButton} onClick={handleGoToPayment}>
          Ir a método de pago
        </button>

        <div className={styles.summaryCard}>
          <h3>Resumen de la compra</h3>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Descuentos</span>
            <span>$0</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Gastos de envío</span>
            <span>${gastosEnvio.toLocaleString()}</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetodoEntrega;
