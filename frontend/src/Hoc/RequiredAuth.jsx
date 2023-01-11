import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const RequiredAuth = ({ children }) => {
  const tokendata = useSelector((store) => {
    return store.auth.token;
  });
  if (tokendata) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default RequiredAuth;
