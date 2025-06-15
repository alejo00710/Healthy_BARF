// src/routes/AdminRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.rol !== 'ADMIN') {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default AdminRoute;
