import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Auth = () => {
  let isLogin = localStorage.getItem("token");
  return isLogin ? <Outlet /> : <Navigate replace to={"/register"} />;
};

export default Auth;
