import Login from "./login";
import Register from "./register";
import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Table from "./table";
function PrivateRoute({ children, ...rest }) {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));

  return isLogin ? (
    <>
      <Outlet />{" "}
    </>
  ) : (
    <Navigate to="/login" />
  );
}
function App() {
  // const registerData = [
  //   {
  //     id: 1,
  //     name: "Joe",
  //     email: "Joe@gmail.com",
  //     mobileno: "123432156",
  //     password: "india@123",
  //   },
  //   {
  //     id: 2,
  //     name: "Joy",
  //     email: "Joy@gmail.com",
  //     mobileno: "7689534678",
  //     password: "india@123",
  //   },
  //   {
  //     id: 3,
  //     name: "Deepak",
  //     email: "deepak@gmail.com",
  //     mobileno: "7600757473",
  //     password: "india@123",
  //   },
  // ];
  useEffect(() => {
    // localStorage.setItem("registerData", JSON.stringify(registerData));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route path="table" element={<Table />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
