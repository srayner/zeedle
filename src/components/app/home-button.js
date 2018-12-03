import React from "react";
import TitleButton from "./title-button";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeButton = () => {
  return (
    <TitleButton>
      <FontAwesomeIcon icon={faHome} />
    </TitleButton>
  );
};

export default HomeButton;
