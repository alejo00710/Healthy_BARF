import React, { useState } from "react";
import { useEffect } from "react";
import "../../styles/auth/auth.css";
import logo from "../../assets/images/Healthy Barf icono sin fondo-14.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    direccion: '',
    contraseña: '',
    confirmarContraseña: ''
  });

  const handleCheckboxChange = (e) => {
    setAcceptedTerms(e.target.checked);
  };

  useEffect(() => {
  const accepted = sessionStorage.getItem('acceptedTerms');
  if (accepted === 'true') {
    setAcceptedTerms(true);
    sessionStorage.removeItem('acceptedTerms');
  }
}, []);

 const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.contraseña !== formData.confirmarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        nombre: formData.nombre,
        telefono: formData.telefono,
        email: formData.correo, 
        direccion: formData.direccion,
        password: formData.contraseña,
      });

      alert(response.data.mensaje);
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
      <div className="form-group">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="correo"
          placeholder="Correo Electrónico"
          value={formData.correo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={handleChange}
        />
      </div>
      <div className="form-group-full">
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formData.contraseña}
          onChange={handleChange}
        />
      </div>
      <div className="form-group-full">
        <input
          type="password"
          name="confirmarContraseña"
          placeholder="Confirmar Contraseña"
          value={formData.confirmarContraseña}
          onChange={handleChange}
        />
      </div>

      <div className="form-group-full">
        <label>
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={handleCheckboxChange}
          />
          &nbsp; He leído y acepto los <Link to="/terminos">Términos y Condiciones</Link>
        </label>
      </div>

      <div className="form-button">
        <button type="submit" disabled={!acceptedTerms}>
          Registrarme
        </button>
      </div>

      <div className="form-footer">
        <Link to="/login">¿Tienes una cuenta? Inicia sesión</Link>
      </div>
    </form>
  </div>
);

}

export default Register;
