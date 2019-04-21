import React from "react";
import LoginContainer from "./login-container";
import Container from "../ui/container";

const SignupSent = () => {
  return (
    <Container colour="white">
      <LoginContainer>
        <h1>Sign Up</h1>
        <p>
          A verification link has been sent to your email address. Follow the
          link to complete the signup process.
        </p>
      </LoginContainer>
    </Container>
  );
};

export default SignupSent;
