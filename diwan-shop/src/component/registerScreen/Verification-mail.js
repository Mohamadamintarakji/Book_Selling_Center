import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import AlertMsg from "../AlertMsg";
import Wrapper from "../../Wrapper/Register";
import { useAppContext } from "../../context/appContext";
function VerificationMail(props) {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const fname = useRef(null);
  const lname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const { showAlert, alertType, alertText } = useSelector(
    (state) => state.auth
  );
  const { register } = useAppContext();

  return (
    <>
      <Wrapper>
        <form className="registerform" onSubmit={(e) => register(e, data)}>
          <h3>Sign Up</h3>
          {showAlert && (
            <AlertMsg alertType={alertType} alertText={alertText} />
          )}

          <div className="mb-3 text-start">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              value={data.fname}
              ref={fname}
              onChange={(e) => setData({ ...data, fname: e.target.value })}
            />
          </div>

          <div className="mb-3 text-start">
            <label>Last name</label>

            <input
              type="text"
              className="form-control"
              value={data.lname}
              ref={lname}
              onChange={(e) => setData({ ...data, lname: e.target.value })}
            />
          </div>

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

          <div className="mb-3 text-start">
            <label>Password</label>
            <input
              type="password"
              value={data.password}
              ref={password}
              className="form-control"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </Wrapper>
    </>
  );
}

export default VerificationMail;
