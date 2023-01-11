import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../store/auth/auth.action";
const Login = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const tokendata = useSelector((store) => {
    return store.auth.token;
  });
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispacth(login(creds));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  useEffect(() => {
    if (tokendata) {
      navigate("/");
    }
  }, [tokendata, navigate]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        <button type="submit" value={"submit"}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
