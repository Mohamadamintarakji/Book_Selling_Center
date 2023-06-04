import React from "react";

const AlertMsg = ({ alertType, alertText }) => {
  return (
    <div className={`alert alert-${alertType}`} role="alert">
      {alertText}
    </div>
  );
};

export default AlertMsg;
