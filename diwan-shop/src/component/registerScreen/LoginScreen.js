import React, { useState } from "react";
import { useSelector } from "react-redux";
import AlertMsg from "../AlertMsg";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../Wrapper/Register";

function LoginScreen(props) {
  const { login } = useAppContext();

  const { showAlert, alertType, alertText } = useSelector(
    (state) => state.auth
  );

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Wrapper>
        <form className="registerform " onSubmit={(e) => login(e, data)}>
          <h3>Log In</h3>
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

          <div className="mb-3 text-start">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/register">Not a member yet?</a>
            <a href="/reset-password">Reset Password</a>
          </p>
        </form>
      </Wrapper>
    </>
  );
}

export default LoginScreen;
