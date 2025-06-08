import React from 'react';
import styles from '../../styles/personalData/PersonalData.module.css';
import logo from '../../assets/images/logo.png'; // Asegúrate de que la ruta sea correcta

const PersonalData = () => {
    return (
        <div className={styles.container}>
            <a href="/">
                <div className={styles.volver}>&lt; Volver</div>
            </a>

            <img className={styles.logo} src={logo} alt="Healthy BARF logo" />

            <div className={styles.formulario}>
                <h3>Datos personales</h3>
                <input className={styles.campo} type="text" placeholder="Nombre y apellido" />
                <select className={styles.campo} defaultValue="">
                    <option value="" disabled>
                        Tipo de documento
                    </option>
                    <option value="cedula">Cédula</option>
                    <option value="pasaporte">Pasaporte</option>
                </select>
                <input className={styles.campo} type="text" placeholder="Cédula de ciudadanía" />
                <input className={styles.campo} type="tel" placeholder="Teléfono" />
                <input className={styles.campo} type="email" placeholder="Correo Electrónico" />
                <button className={styles.btnSiguiente}>Ir a método de entrega</button>
            </div>

            <div className={styles.resumen}>
                <h3>Resumen de la compra</h3>
                <p>
                    <span>Subtotal</span> <span>$7.000</span>
                </p>
                <p>
                    <span>Descuentos</span> <span>− $3.500</span>
                </p>
                <p>
                    <span>Gastos de envío</span> <span>$3.500</span>
                </p>
                <hr />
                <p>
                    <strong>Total</strong> <strong>$7.000</strong>
                </p>

                <div className={styles.cupon}>
                    <p>
                        <strong>¿Tienes un cupón?</strong>
                    </p>
                    <input type="text" placeholder="Ingresar el código promocional" />
                    <button>Agregar</button>
                </div>
            </div>
        </div>
    );
};

export default PersonalData;

