import {
  GET_MY_CART_ITEMS_ERROR,
  GET_MY_CART_ITEMS_SUCCESS,
  GET_MY_CART_ITEMS_LOADING,
} from "./cart.actionTypes";

let initialState = {
  loading: false,
  error: false,
  data: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_CART_ITEMS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_MY_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case GET_MY_CART_ITEMS_LOADING: {
      return {
        ...state,
        error: false,
        loading: true,
      };
    }

    default: {
      return state;
    }
  }
};
