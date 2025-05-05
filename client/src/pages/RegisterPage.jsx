import React from 'react';
import Register from '../components/auth/RegisterForm';
import '../styles/auth/authGlobal.css'

const RegisterPage = () => {
  return (
    <div className="authBody">
      <Register />
    </div>
  );
};

export default RegisterPage;