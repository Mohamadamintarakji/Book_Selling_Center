import React, { useState } from "react";
import { useSelector } from "react-redux";
import AlertMsg from "../AlertMsg";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../Wrapper/Register";

function ResetPassword(props) {
  const { resetPassword } = useAppContext();

  const { showAlert, alertType, alertText } = useSelector(
    (state) => state.auth
  );

  const [data, setData] = useState({
    email: "",
    url: window.location.origin,
  });

  return (
    <>
      <Wrapper>
        <form
          className="registerform "
          onSubmit={(e) => resetPassword(e, data)}
        >
          <h3>Change Your Password</h3>
          {showAlert && (
            <AlertMsg alertType={alertType} alertText={alertText} />
          )}
          <div className="mb-3 text-start">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Wrapper>
    </>
  );
}

export default ResetPassword;
