import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGOUT,
  AUTH_LOGIN_SUCCESS,
} from "./auth.actionTypes";

let token = localStorage.getItem("token") || "";

let initialState = {
  loading: false,
  error: false,
  token,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case AUTH_LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case AUTH_LOGIN_SUCCESS: {
      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token);
      }
      return {
        ...state,
        loading: false,
        error: false,
        token: action.payload.token,
      };
    }

    case AUTH_LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        error: false,
        token: "",
      };
    }

    default: {
      return state;
    }
  }
};
