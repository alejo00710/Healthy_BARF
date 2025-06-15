import React from 'react';
import styles from '../../styles/personalData/PersonalData.module.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const PersonalData = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { cartItems } = useCart();

    const subtotal = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const descuento = 3500;
    const envio = 3500;
    const total = subtotal - descuento + envio;

    const handleBack = () => navigate(-1);

    return (
        <div className={styles.container}>
            <button onClick={handleBack} className={styles.backButton}>
                &lt; Volver
            </button>

            <img className={styles.logo} src={logo} alt="Healthy BARF logo" />

            <div className={styles.formulario}>
                <h3>Datos personales</h3>
                <p><strong>Nombre y apellido:</strong> {user?.nombre || 'No disponible'}</p>
                <p><strong>Email:</strong> {user?.correo || 'No disponible'}</p>

                <button className={styles.btnSiguiente} onClick={() => navigate('/Entrega')}>
                    Ir a método de entrega
                </button>
            </div>

            <div className={styles.resumen}>
                <h3>Resumen de la compra</h3>

                <div className={styles.listaProductos}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.producto}>
                            {item.imagen && (
                                <img
                                    src={item.imagenUrl}
                                    alt={item.nombre}
                                    className={styles.productImage}
                                />
                            )}
                            <div>
                                <p><strong>{item.nombre}</strong></p>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Precio unitario: ${item.precio.toLocaleString()}</p>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>

                <p><span>Subtotal</span> <span>${subtotal.toLocaleString()}</span></p>
                <p><span>Descuentos</span> <span>− ${descuento.toLocaleString()}</span></p>
                <p><span>Gastos de envío</span> <span>${envio.toLocaleString()}</span></p>
                <hr />
                <p><strong>Total</strong> <strong>${total.toLocaleString()}</strong></p>

                <div className={styles.cupon}>
                    <p><strong>¿Tienes un cupón?</strong></p>
                    <input type="text" placeholder="Ingresar el código promocional" />
                    <button>Agregar</button>
                </div>
            </div>
        </div>
    );
};

export default PersonalData;
