import React from 'react';
import Login from '../components/auth/LoginForm';
import '../styles/auth/authGlobal.css'

const LoginPage = () => {
  return (
    <div className="authBody">
      <Login />
    </div>
  );
};

export default LoginPage;