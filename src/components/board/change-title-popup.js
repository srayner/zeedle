import React from "react";
import Popup from "../ui/popup";
import Text from "../ui/text";
import { SuccessButton } from "../ui/button";
import Label from "../ui/label";

const popupData = {
  title: "Rename Board",
  width: "250px",
  bodyPadding: "15px 0 10px 0",
  position: {
    top: "48px",
    left: "16px"
  }
};

const ChangeTitleModal = props => {
  return (
    <Popup {...popupData} onClose={props.onClose}>
      <Label>Title</Label>
      <Text value={props.title} />
      <SuccessButton>Rename</SuccessButton>
    </Popup>
  );
};

export default ChangeTitleModal;
