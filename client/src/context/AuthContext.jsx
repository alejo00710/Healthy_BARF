import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const login = (email) => {
    setUserEmail(email);
    localStorage.setItem("userEmail", email);
  };

  const logout = () => {
    setUserEmail(null);
    localStorage.removeItem("userEmail");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
