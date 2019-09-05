import React from "react";

const Alert = props => {
  return (
    <div>
      <strong style={{ color: "red" }}>{props.message}</strong>
    </div>
  );
};

export default Alert;
