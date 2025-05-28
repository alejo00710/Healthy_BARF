import React, { useState, useContext } from "react";
import "../../styles/auth/auth.css";
import logo from "../../assets/images/Healthy Barf icono sin fondo-14.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password
      });

      const { token } = response.data;

      localStorage.setItem("token", token); // Guardamos el token
      login(formData.email);                // Guardamos el email en el contexto

      navigate("/"); // Redirigir al home
    } catch (error) {
      console.error("Error en el login:", error);
      alert(error.response?.data?.message || "Error en el servidor");
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
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
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
