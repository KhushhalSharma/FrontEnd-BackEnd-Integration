import axios from "axios";
import {
  GET_MY_CART_ITEMS_ERROR,
  GET_MY_CART_ITEMS_SUCCESS,
  GET_MY_CART_ITEMS_LOADING,
} from "./cart.actionTypes";

export const getMyCartItems = (token) => async (dispatch) => {
  dispatch({ type: GET_MY_CART_ITEMS_LOADING });
  try {
    let res = await axios.get(`http://localhost:8000/carts`, {
      headers: {
        token: token,
      },
    });
    dispatch({ type: GET_MY_CART_ITEMS_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    dispatch({ type: GET_MY_CART_ITEMS_ERROR });
  }
};
