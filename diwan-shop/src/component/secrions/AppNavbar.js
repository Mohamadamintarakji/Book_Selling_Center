import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppContext } from "../../context/appContext";
import React from "react";
// import Wrapper from "../../Wrapper/AppNavbar";
import Header from "./Header";
function AppNavbar({ filtereHandler, value }) {
  const { user } = useSelector((state) => state.auth);
  const { handleLogOut } = useAppContext();

  return (
    <>
      {/* <Wrapper> */}
      <Header filtereHandler={filtereHandler} value={value} />
      <nav id="navigation">
        <div className="container">
          <div id="responsive-nav">
            <ul
              className="main-nav nav navbar-nav"
              style={{ display: "block" }}
            >
              <li className="active">
                <Link className="nav-link" to="/">
                  <a href="/">Home</a>
                </Link>
              </li>
              {user && user.isAdmin && (
                <li>
                  <Link className="nav-link" to="/dashboard">
                    <a href="/dashboard">Dashboard</a>
                  </Link>
                </li>
              )}

              {user ? (
                <li>
                  <Link className="nav-link" to="/" onClick={handleLogOut}>
                    <a href="/">Log Out</a>
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link className="nav-link" to="/login">
                      <a href="/login">Login</a>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/register">
                      <a href="/register">Register</a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* </Wrapper> */}
    </>
  );
}
export default AppNavbar;
