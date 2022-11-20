import {
  registerStart,
  registerSuccess,
  registerError,
  logInStart,
  logInSuccess,
  logInError,
  logOutStart,
  logOutSuccess,
  logOutError,
} from "./userSlice";
import { userRequest } from "../axios";
import { toast } from "react-toastify";

export const register = async (dispatch, userInfo) => {
  dispatch(registerStart());
  try {
    const response = await userRequest.post("/auth/register", userInfo);
    dispatch(registerSuccess(response.data));
  } catch {
    dispatch(registerError);
  }
};
export const login = async (dispatch, userInfo) => {
  dispatch(logInStart());
  try {
    const response = await userRequest.post("/auth/login", userInfo);
    dispatch(logInSuccess(response.data));
  } catch (err) {
    dispatch(logInError);
    console.log(err.response.data);
    toast.error(err.response.data, {
      toastId: "toast-login-err",
    });
  }
};
export const logout = async (dispatch, userInfo) => {
  dispatch(logOutStart());
  try {
    const response = await userRequest.get("/auth/logout");
    dispatch(logOutSuccess(response.data));
  } catch {
    dispatch(logOutError);
  }
};
