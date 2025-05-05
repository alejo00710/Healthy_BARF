import React from "react";
import "../../styles/auth/auth.css";
import logo from "../../assets/images/Healthy Barf icono sin fondo-14.png"
import { Link, useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <div className="close-button" onClick={() => navigate('/')}>×</div>
      <div className="logo">
        <img src={logo} alt="Healthy BARF Logo" />
      </div>

      <form>
        <div className="form-group">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Telefono" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Correo Electronico" />
          <input type="text" placeholder="Direccion" />
        </div>
        <div className="form-group-full">
          <input type="password" placeholder="Contraseña" />
        </div>
        <div className="form-group-full">
          <input type="password" placeholder="Confirmación de contraseña" />
        </div>
        <div className="form-button">
          <button type="submit">Registrarme</button>
        </div>
        <div className="form-footer">
          <Link to="/login">¿Tienes una cuenta? Inicia sesión</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
