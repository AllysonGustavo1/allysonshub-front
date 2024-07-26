// src/components/ToggleMessage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ToggleMessage = ({ isLogin }) => (
  <div className="toggle-message">
    <p>{isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}</p>
    <Link to={isLogin ? "/register" : "/login"}>
      {isLogin ? "Cadastre-se" : "Login"}
    </Link>
  </div>
);

export default ToggleMessage;
