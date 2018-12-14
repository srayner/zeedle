import React from "react";
import LoginForm from "../ui/login-form";

const LoginPage = props => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm submitCaption="Login" />
    </div>
  );
};

export default LoginPage;
