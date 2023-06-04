import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Dashboard from "./component/Dashboard/Dashboard";
import Cart from "./component/Home/Cart";
import CheckOut from "./component/Home/CheckOut";
import RegisterScreen from "./component/registerScreen/RegisterScreen";
import VerificationMail from "./component/registerScreen/Verification-mail";
import LoginScreen from "./component/registerScreen/LoginScreen";
import ResetPassword from "./component/registerScreen/Reset-password";
import NewPassword from "./component/registerScreen/NewPassword";
import UserContext from "./context/userContext";
import { AppProvider } from "./context/appContext";
import ProDetailes from "./component/Home/ProDetailes";
import ProByCategory from "./component/Home/ProByCategory";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppProvider>
        <div className="App">
          <Routes>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route path="MangeProducts" element={<Dashboard />} />
              <Route path="MangeCategories" element={<Dashboard />} />
              <Route path="MangeColors" element={<Dashboard />} />
              <Route path="MangeSizes" element={<Dashboard />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/verify-register" element={<VerificationMail />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset-password/:token" element={<NewPassword />} />
            <Route path="/productDetailes/:id" element={<ProDetailes />} />
            <Route path="/category/:name" element={<ProByCategory />} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/check-out" element={<CheckOut />} />
          </Routes>
        </div>
      </AppProvider>
    </UserContext.Provider>
  );
}

export default App;
