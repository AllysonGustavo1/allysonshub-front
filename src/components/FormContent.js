import React from "react";

const FormContent = ({ isLogin }) => (
  <div className={`form-content ${isLogin ? "show-login" : "show-register"}`}>
    {isLogin ? (
      <>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-user" />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Usuário" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-lock" />
            </span>
          </div>
          <input type="password" className="form-control" placeholder="Senha" />
        </div>
      </>
    ) : (
      <>
        <div className="input-group mb-3 register animate">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-user" />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Usuário" />
        </div>
        <div className="input-group mb-3 register animate">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-envelope" />
            </span>
          </div>
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="input-group mb-3 register animate">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-lock" />
            </span>
          </div>
          <input type="password" className="form-control" placeholder="Senha" />
        </div>
        <div className="input-group mb-3 register animate">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-lock" />
            </span>
          </div>
          <input type="password" className="form-control" placeholder="Repita a Senha" />
        </div>
        <div className="input-group mb-3 register animate">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-id-card" />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Código Único" />
        </div>
      </>
    )}
  </div>
);

export default FormContent;
