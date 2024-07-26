import React from 'react';
import { Link } from 'react-router-dom';

const ToggleMessage = ({ isLogin }) => (
  <div className="toggle-message">
    <span>{isLogin ? "Não tem uma conta?" : "Já tem uma conta?"} </span>
    <Link to={isLogin ? "/register" : "/login"}>
      {isLogin ? "Cadastre-se" : "Login"}
    </Link>
  </div>
);

export default ToggleMessage;
