import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_LOADING,
} from "./product.actionTypes";

export const getData = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let res = await axios.get(`http://localhost:8000/products`);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};
