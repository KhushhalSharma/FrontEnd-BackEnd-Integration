import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/auth/auth.action";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokendata = useSelector((store) => {
    return store.auth.token;
  });
  const toggelLogin = () => {
    if (tokendata) {
      dispatch(logout());
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Navbar:
      <Link to={"/"}>Products</Link>
      <Link to={"cart"}>Cart</Link>
      <button onClick={toggelLogin}>{tokendata ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
