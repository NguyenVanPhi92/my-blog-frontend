import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "../redux/authSlice";
import { toast } from "react-toastify";
import ToastSuccess from "../components/Toast/ToastSuccess";
import ToastError from "../components/Toast/ToastError";
import ToastInfo from "../components/Toast/ToastInfo";
import {
  getAllBlogError,
  getAllBlogStart,
  getAllBlogSuccess,
  getOneBlogError,
  getOneBlogStart,
  getOneBlogSuccess,
} from "../redux/blogSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());

  try {
    const res = await axios.post("http://localhost:8000/v1/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/");
    // <ToastSuccess message="🦄 login success!" />;
    toast.success("🦄 login success!", {
      position: "top-right",
      autoClose: 600,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    <ToastError message="UserName or Password Failed" />;
    toast.error("UserName or Password Failed", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    <ToastInfo />;
  } catch (error) {
    console.log(error);
    dispatch(logoutFailed());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());

  try {
    await axios.post("http://localhost:8000/v1/auth/register", user);
    dispatch(registerSuccess());
    navigate("/login");
    toast.success("🦄 Register success!", {
      position: "top-right",
      autoClose: 600,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    dispatch(registerFailed());
    toast.error(`🦄 Register failed! ${error.response.data.message}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const getAllBlog = async (dispatch) => {
  dispatch(getAllBlogStart());
  try {
    const res = await axios.get("http://localhost:8000/v1/post-article");
    dispatch(getAllBlogSuccess(res.data));
    console.log("blog List: ", res.data);
  } catch (error) {
    dispatch(getAllBlogError());
  }
};
export const getOneBlog = async (id, dispatch) => {
  dispatch(getOneBlogStart());

  try {
    const res = await axios.get(`http://localhost:8000/v1/post-article/${id}`);
    dispatch(getOneBlogSuccess(res.data));
  } catch (error) {
    dispatch(getOneBlogError());
  }
};
