import React from "react";

const modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section>{children}</section>
      <button onClick={handleClose} />
    </div>
  );
};

export default modal;
