import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import AlertMsg from "../AlertMsg";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../Wrapper/Register";
import axios from "axios";
import { useParams } from "react-router-dom";
function NewPassword(props) {
  const { updatePassword } = useAppContext();
  const params = useParams();

  const { showAlert, alertType, alertText } = useSelector(
    (state) => state.auth
  );

  const [data, setData] = useState({
    newPassword: "",
    token: "",
    userId: "",
  });
  const UpdatePassword = async () => {
    try {
      const res = await axios.post(`/reset-password/${params.token}`);
      const token = res.data.user.resetToken;
      const userId = res.data.user._id;
      setData({ ...data, token: token, userId: userId });
    } catch (e) {
      console.log(e.response.data.msg);
    }
  };
  const x = useRef(true);

  useEffect(() => {
    if (x.current) {
      x.current = false;
      UpdatePassword();
    }
  }, []);
  return (
    <>
      <Wrapper>
        <form
          className="registerform "
          onSubmit={(e) => updatePassword(e, data)}
        >
          {showAlert && (
            <AlertMsg alertType={alertType} alertText={alertText} />
          )}

          <div className="mb-3 text-start">
            <label>Write your new password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) =>
                setData({ ...data, newPassword: e.target.value })
              }
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

export default NewPassword;
