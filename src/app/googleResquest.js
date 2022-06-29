import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
} from "../redux/authSlice";
import { toast } from "react-toastify";
import { auth } from "../fireBase/firebase";

export const googleSignIn = (dispatch, navigate) => {
  dispatch(loginStart());

  try {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    const accountGoogle = onAuthStateChanged(auth, (currentUser) => {
      dispatch(loginSuccess(accountGoogle));
      console.log("User", currentUser);
    });
    navigate("/");
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
    toast.error("Login Failed", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(loginFailed());
  }
};

export const logOut = (dispatch, navigate) => {
  try {
    dispatch(logoutStart());
    signOut(auth);
    navigate("/login");
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailed());
  }
};
