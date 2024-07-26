// src/pages/Login.js
import React, { useState } from "react";
import ToggleMessage from "../components/ToggleMessage";
import HeaderForm from "../components/HeaderForm";
import FormContent from "../components/FormContent";
import Message from "../components/Message";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className={`form-box ${isLogin ? "login-mode" : "register-mode"}`}>
        <HeaderForm />
        <div className="body-form">
          <form>
            <ToggleMessage isLogin={isLogin} toggleMode={toggleMode} />
            <FormContent isLogin={isLogin} />
            <button type="button" className="btn btn-secondary btn-block">
              {isLogin ? "LOGIN" : "CADASTRAR"}
            </button>
            {isLogin && <Message />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
