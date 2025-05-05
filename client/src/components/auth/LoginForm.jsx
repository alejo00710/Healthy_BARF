import React from "react";
import "../../styles/auth/auth.css";
import logo from "../../assets/images/Healthy Barf icono sin fondo-14.png"
import { Link, useNavigate } from 'react-router-dom';




function Login() {
  const navigate = useNavigate();
  return (
    <div className="form-container">
      <div className="close-button" onClick={() => navigate('/')}>×</div>
      <div className="logo">
        <img src={logo} alt="Healthy BARF Logo" />
      </div>

      <form>
        <input type="email" placeholder="Correo Electronico" required />
        <input type="password" placeholder="Contraseña" required />
        <div className="form-button">
          <button type="submit">Iniciar sesión</button>
        </div>
        <div className="form-footer">
          <Link to="/register">¿No tienes una cuenta? Regístrate</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
