import React from "react";
import Text from "./text";
import { Button } from "./button";

const LoginForm = props => {
  return (
    <form>
      <Text />
      <Text />
      <Button onClick={props.onSubmit}>{props.submitCaption}</Button>
    </form>
  );
};

export default LoginForm;
