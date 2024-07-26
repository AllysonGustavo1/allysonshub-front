import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  toggleMode = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };

  render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        {
          className: `form-box ${
            this.state.isLogin ? "login-mode" : "register-mode"
          }`,
        },
        React.createElement(HeaderForm, null),
        React.createElement(
          "div",
          { className: "body-form" },
          React.createElement(
            "form",
            null,
            React.createElement(ToggleMessage, {
              isLogin: this.state.isLogin,
              toggleMode: this.toggleMode,
            }),
            React.createElement(FormContent, {
              isLogin: this.state.isLogin,
            }),
            React.createElement(
              "button",
              { type: "button", className: "btn btn-secondary btn-block" },
              this.state.isLogin ? "LOGIN" : "CADASTRAR"
            ),
            this.state.isLogin && React.createElement(Message, null)
          )
        )
      )
    );
  }
}

const HeaderForm = () =>
  React.createElement(
    "div",
    { className: "header-form" },
    React.createElement(
      "h4",
      { className: "text-primary text-center" },
      React.createElement("img", {
        src: "/img/login-image.jpg",
        alt: "User Icon",
        className: "profile-image",
      })
    )
  );

const ToggleMessage = ({ isLogin, toggleMode }) =>
  React.createElement(
    "div",
    { className: "toggle-message" },
    React.createElement(
      "span",
      null,
      isLogin ? "Não possui uma conta?" : "Já possui uma conta?"
    ),
    React.createElement("input", {
      id: "form-toggler",
      type: "checkbox",
      onClick: toggleMode,
      style: { display: "none" },
      "aria-label": isLogin ? "Switch to Register" : "Switch to Login",
    }),
    React.createElement(
      "label",
      { htmlFor: "form-toggler", className: "form-toggler-label" },
      isLogin ? " Clique aqui" : " Clique aqui"
    )
  );

const FormContent = ({ isLogin }) =>
  React.createElement(
    "div",
    {
      className: `form-content ${isLogin ? "show-login" : "show-register"}`,
    },
    isLogin
      ? [
          React.createElement(
            "div",
            { className: "input-group mb-3", key: "login-username" },
            React.createElement(
              "div",
              { className: "input-group-prepend" },
              React.createElement(
                "span",
                { className: "input-group-text" },
                React.createElement("i", { className: "fa fa-user" })
              )
            ),
            React.createElement("input", {
              type: "text",
              className: "form-control",
              placeholder: "Usuário",
            })
          ),
          React.createElement(
            "div",
            { className: "input-group mb-3", key: "login-password" },
            React.createElement(
              "div",
              { className: "input-group-prepend" },
              React.createElement(
                "span",
                { className: "input-group-text" },
                React.createElement("i", { className: "fa fa-lock" })
              )
            ),
            React.createElement("input", {
              type: "password",
              className: "form-control",
              placeholder: "Senha",
            })
          ),
        ]
      : [
          React.createElement(
            "div",
            {
              className: "input-group mb-3 register animate",
              key: "register-username",
            },
            React.createElement(
              "div",
              { className: "input-group-prepend" },
              React.createElement(
                "span",
                { className: "input-group-text", "aria-label": "Username" },
                React.createElement("i", { className: "fa fa-user" })
              )
            ),
            React.createElement("input", {
              type: "text",
              className: "form-control",
              placeholder: "Usuário",
            })
          ),
          React.createElement(
            "div",
            {
              className: "input-group mb-3 register animate",
              key: "register-email",
            },
            React.createElement(
              "div",
              { className: "input-group-prepend" },
              React.createElement(
                "span",
                { className: "input-group-text", "aria-label": "Email" },
                React.createElement("i", { className: "fa fa-envelope" })
              )
            ),
            React.createElement("input", {
              type: "email",
              className: "form-control",
              placeholder: "Email",
            })
          ),
          React.createElement(
            "div",
            {
              className: "input-group mb-3 register animate",
              key: "register-password",
            },
            React.createElement(
              "div",
              { className: "input-group-prepend" },
              React.createElement(
                "span",
                { className: "input-group-text", "aria-label": "Password" },
                React.createElement("i", { className: "fa fa-lock" })
              )
            ),
            React.createElement("input", {
              type: "password",
              className: "form-control",
              placeholder: "Senha",
              "aria-required": "true",
            })
          ),
          React.createElement(
            "div",
            {
              className: "input-group mb-3 register animate",
              key: "register-repeat-password",
            },
            React.createElement(
              "div",
              { className: "input-group-prepend" },
              React.createElement(
                "span",
                {
                  className: "input-group-text",
                  "aria-label": "Repeat Password",
                },
                React.createElement("i", { className: "fa fa-lock" })
              )
            ),
            React.createElement("input", {
              type: "password",
              className: "form-control",
              placeholder: "Repita a Senha",
              "aria-required": "true",
            })
          ),
          React.createElement(
            "div",
            {
              className: "input-group mb-3 register animate",
              key: "register-unique-code",
            },
            React.createElement(
              "div",
              { className: "input-group-prepend" },
              React.createElement(
                "span",
                { className: "input-group-text", "aria-label": "Unique Code" },
                React.createElement("i", { className: "fa fa-id-card" })
              )
            ),
            React.createElement("input", {
              type: "text",
              className: "form-control",
              placeholder: "Código Único",
              "aria-required": "true",
            })
          ),
        ]
  );

const Message = () =>
  React.createElement(
    "div",
    { className: "message" },
    React.createElement(
      "div",
      { className: "checkbox-container" },
      React.createElement("input", { type: "checkbox" }),
      " Lembrar-me"
    ),
    React.createElement(
      "div",
      null,
      React.createElement("a", { href: "#" }, "Esqueci minha senha")
    )
  );

export default App;
