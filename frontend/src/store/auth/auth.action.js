import axios from "axios";
import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGOUT,
  AUTH_LOGIN_SUCCESS,
} from "./auth.actionTypes";

export const login = (creads) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    let res = await axios.post(`http://localhost:8000/users/login`, creads);
    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};
export const logout = () => ({ type: AUTH_LOGOUT });
