import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
} from "../redux/authSlice";
import { toast } from "react-toastify";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());

  try {
    const res = await axios.post("http://localhost:8000/v1/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/");
    toast.success("Login Success");
  } catch (error) {
    toast.error("UserName or Password Failed");
    dispatch(loginFailed());
  }
};

export const logoutUser = async (
  dispatch,
  id,
  navigate,
  accessToken,
  axiosJWT
) => {
  dispatch(logoutStart());

  try {
    await axiosJWT.post("http://localhost:8000/v1/auth/logout", id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(logoutSuccess());
    navigate("/login");
  } catch (error) {
    console.log(error);
    dispatch(logoutFailed());
  }
};

export const getAllBlog = async (
  dispatch,
  id,
  navigate,
  accessToken,
  axiosJWT
) => {
  try {
  } catch (error) {}
};
