import React, { useContext, useState } from "react";
import styles from "../../styles/home/Header.module.css";
import logo from "../../assets/images/logo-blanco.png";
import carrito from "../../assets/icons/carrito-de-compras.svg";
import usuario from "../../assets/icons/usuario.svg";
import favorito from "../../assets/icons/corazon.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleCategoriaClick = (tipo) => {
    navigate(`/catalogo?categoria=${tipo}`);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.cantidad, 0);

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
            <button
  className={styles.menuToggle}
  onClick={() => setDropdownVisible(!dropdownVisible)}
>
  ☰
</button>
<ul
  className={`${styles.navLinks} ${
    dropdownVisible ? styles.navLinksVisible : ""
  }`}
>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <button
                  className={styles.linkBtn}
                  onClick={() => handleCategoriaClick("Perro")}
                >
                  Perros
                </button>
              </li>
              <li>
                <button
                  className={styles.linkBtn}
                  onClick={() => handleCategoriaClick("Gato")}
                >
                  Gatos
                </button>
              </li>
              <li>
                <a href="#nosotros">Nosotros</a>
              </li>
              {user?.rol === "ADMIN" && (
  <li>
    <Link to="/admin">Admin</Link>
  </li>
)}
            </ul>

            <div className={styles.navIcons}>
              <div style={{ position: "relative" }}>
                <Link to="/carritoProduct">
                  <img src={carrito} alt="carrito" />
                  {totalItems > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        top: "-5px",
                        right: "-8px",
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "50%",
                        padding: "2px 6px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>

              {user ? (
                <div className={styles.dropdownContainer}>
                  <button
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                    className={styles.userBtn}
                  >
                    <img src={usuario} alt="Usuario" /> ⌄
                  </button>

                  {dropdownVisible && (
                    <div className={styles.dropdownMenu}>
                      <button
                        onClick={()=>{navigate("/all-orders")}}
                        className={styles.logoutBtn}
                      >
                        Mis pedidos
                      </button>
                       <button
                        onClick={handleLogout}
                        className={styles.logoutBtn}
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <img src={usuario} alt="Usuario" />
                </Link>
              )}

              <button
                onClick={() => {
                  if (user) {
                    navigate("/favorite");
                  } else {
                    navigate("/login");
                  }
                }}
                className={styles.iconfavorito}
              >
                <img src={favorito} alt="Favorito" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
