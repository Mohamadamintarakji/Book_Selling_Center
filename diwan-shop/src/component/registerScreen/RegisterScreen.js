import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import AlertMsg from "../AlertMsg";
import Wrapper from "../../Wrapper/Register";
import { useAppContext } from "../../context/appContext";
function RegisterScreen(props) {
  const [data, setData] = useState({
    email: "",
    url: window.location.origin,
  });
  console.log(data);
  const email = useRef(null);
  const { showAlert, alertType, alertText } = useSelector(
    (state) => state.auth
  );
  const { verifyRegister } = useAppContext();
  return (
    <>
      <Wrapper>
        <form
          className="registerform"
          onSubmit={(e) => verifyRegister(e, data)}
        >
          <h3>Sign Up</h3>
          {showAlert && (
            <AlertMsg alertType={alertType} alertText={alertText} />
          )}

          <div className="mb-3 text-start">
            <label>Email address</label>
            <input
              type="email"
              value={data.email}
              ref={email}
              className="form-control"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered? <a href="/login">Login</a>
          </p>
        </form>
      </Wrapper>
    </>
  );
}

export default RegisterScreen;
