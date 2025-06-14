import React, { useState } from 'react';
import styles from '../../styles/editProfile/Profile.module.css';
import { useNavigate } from 'react-router-dom';
import headerImage from '../../assets/images/Healthy Barf icono sin fondo-12.png'; // Asegúrate de tener esta imagen


const Profile = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('personal'); // 'personal', 'orders' o 'favorites'

  const handleBack = () => {
    navigate(-1);
  };

  const handleViewAllOrders = () => {
        navigate('/all-orders');
    };

  return (
    <div className={styles.profileContainer}>
     {/* Nueva sección de imagen de encabezado */}
      <div className={styles.profileHeader}>
        <img 
          src={headerImage} 
          alt="Healthy Barf" 
          className={styles.headerImage}
        />
      </div>
      {/* Encabezado con botón de volver */}
      <div className={styles.header}>
        <button onClick={handleBack} className={styles.backButton}>
          &lt; Volver
        </button>
      </div>

      {/* Sección de título y pestañas */}
      <div className={styles.profileSection}>
        <h1 className={styles.profileTitle}>Mi perfil</h1>
        <div className={styles.userWelcome}>
          <span className={styles.username}>NewUser12345</span>
          <p className={styles.welcomeText}>Bienvenido</p>
        </div>

        {/* Pestañas de navegación */}
        <div className={styles.tabsContainer}>
          <button 
            className={`${styles.tab} ${activeTab === 'personal' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Información personal
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'orders' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Mis pedidos
          </button>
        </div>

          
        {activeTab === 'personal' && (
          <div className={styles.formContainer}>
            <form className={styles.profileForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre y apellido</label>
                <input type="text" id="name" className={styles.formInput} />
              </div>

              {/* Contenedor para documentos (nuevo) */}
              <div className={styles.documentRow}>
                <div className={`${styles.formGroup} ${styles.documentType}`}>
                  <label htmlFor="documentType">Tipo de documento</label>
                  <select id="documentType" className={styles.formInput}>
                    <option value="cc">Cédula de ciudadanía</option>
                    <option value="ce">Cédula de extranjería</option>
                    <option value="passport">Pasaporte</option>
                  </select>
                </div>

                <div className={`${styles.formGroup} ${styles.documentNumber}`}>
                  <label htmlFor="documentNumber">Número</label>
                  <input 
                    type="text" 
                    id="documentNumber" 
                    className={styles.formInput} 
                    placeholder="Ej: 1234567890"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" className={styles.formInput} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" className={styles.formInput} />
              </div>

              <button type="submit" className={styles.updateButton}>
                Actualizar
              </button>
            </form>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className={styles.ordersContainer}>
            <h2 className={styles.ordersTitle}>Mis Pedidos</h2>
            <div className={styles.ordersTable}>
              <div className={styles.tableHeader}>
                <span>Producto</span>
                <span>Cantidad</span>
                <span>Precio</span>
              </div>
              <div className={styles.tableRow}>
                <span>Dieta de pollo</span>
                <span>1</span>
                <span>$3.500</span>
              </div>
              <div className={styles.tableRow}>
                <span>Dieta de res</span>
                <span>1</span>
                <span>$3.500</span>
              </div>
            </div>
            <button className={styles.detailsButton}
            onClick={handleViewAllOrders}
            >
              Ver más detalles
            </button>
          </div>
        )}


      </div>
    </div>
  );
};

export default Profile;