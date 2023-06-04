import React from "react";
import Wrapper from ".././Wrapper/Alert";

const Alert = ({ setAlert }) => {
  const ok = () => {
    setAlert(false);
  };
  return (
    <Wrapper>
      {" "}
      <div className="alert-option">
        <div className="option-box">
          <i className="fa-solid fa-circle-exclamation"></i>
        </div>
        <div className="option-box">
          <h1>Error!</h1>
        </div>
        <div className="option-box">
          <p>You should select color and size </p>
        </div>
        <div className="option-box">
          <div>
            <button className="btn btn-primary text-white" onClick={ok}>
              Ok
            </button>{" "}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Alert;
