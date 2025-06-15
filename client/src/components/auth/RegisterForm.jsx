import React, { useState } from "react";
import "../../styles/auth/auth.css";
import logo from "../../assets/images/logo-blanco.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contrasena: '',
    confirmarcontrasena: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.contrasena !== formData.confirmarcontrasena) {
      alert("Las contrasenas no coinciden");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/registro", {
        nombre: formData.nombre,
        correo: formData.correo,
        contrasena: formData.contrasena
      });

      alert("Registro exitoso", response);
      navigate("/login");

    } catch (error) {
      console.error("Error en el registro:", error);
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
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
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
          placeholder="contrasena"
          value={formData.contrasena}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmarcontrasena"
          placeholder="Confirmar contrasena"
          value={formData.confirmarcontrasena}
          onChange={handleChange}
          required
        />

        <label>
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            required
          />
          &nbsp; Acepto los{" "}
          <span onClick={() => navigate('/terminos')} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
            Términos y Condiciones
          </span>
        </label>

        <div className="form-button">
          <button type="submit" disabled={!acceptedTerms}>Registrarme</button>
        </div>

        <div className="form-footer">
          <Link to="/login">¿Tienes una cuenta? Inicia sesión</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
