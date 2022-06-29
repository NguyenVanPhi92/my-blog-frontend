import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../app/apiRequest";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (userValue) => {
    // console.log("Login Submit: ", userValue);
    loginUser(userValue, dispatch, navigate);
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
