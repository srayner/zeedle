import React from "react";
import LoginForm from "../ui/login-form";

const SignupPage = props => {
  return (
    <div>
      <h1>Sign up</h1>
      <LoginForm submitCaption="Sign up" />
    </div>
  );
};

export default SignupPage;
