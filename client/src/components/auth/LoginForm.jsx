import React, { useState, useContext } from "react";
import "../../styles/auth/auth.css";
import logo from "../../assets/images/logo-blanco.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    correo: "",
    contrasena: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        correo: formData.correo,
        contrasena: formData.contrasena
      });

      const { usuario, token } = response.data;

      // Guardamos el usuario y token en el contexto y localStorage
      login(usuario, token);

      // Redirigimos según el rol
      if (usuario.rol === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

    } catch (error) {
      console.error("Error en el login:", error);
      alert(error.response?.data?.mensaje || "Error en el servidor");
    }
  };

  return (
    <div className="form-container">
      <div className="close-button" onClick={() => navigate('/')}>×</div>
      <div className="logo">
        <img src={logo} alt="Healthy BARF Logo" />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="correo"
          placeholder="Correo Electrónico"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="contrasena"
          placeholder="Contraseña"
          value={formData.contrasena}
          onChange={handleChange}
          required
        />
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
