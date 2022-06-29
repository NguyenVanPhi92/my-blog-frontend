import React, { useEffect } from "react";
import { FaReact, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import InputField from "../../../components/Form-ctrl/InputField/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import PasswordField from "../../../components/Form-ctrl/InputPassword/PasswordField";
import { UserAuthGoogle } from "../../../context/googleContext";
import GoogleButton from "react-google-button";

const LoginForm = (props) => {
  const { googleSignIn, userGoogle } = UserAuthGoogle();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("Please enter your email").email(),
    password: yup
      .string()
      .required("Please enter your password")
      .min(7, "password ít nhất 7 kí tự"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  //handel
  const handleOnsubmit = (valueForm) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(valueForm);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userGoogle != null) {
      navigate("/");
    }
  }, [userGoogle]);

  return (
    <form className="form" onSubmit={form.handleSubmit(handleOnsubmit)}>
      <div className="form-group">
        <div className="icon">
          <FaReact />
        </div>
        <InputField
          placeholder="Enter your email..."
          name="email"
          label="Email"
          form={form}
        />
        <PasswordField
          placeholder="Enter your Password..."
          name="password"
          label="Password"
          form={form}
        />

        <div className="form-group_input submit-form">
          <button className="submit">Submit</button>
          <Link to="/register" className="register">
            Register
          </Link>
        </div>
        <div className="login_different">
          <div className="login-face">
            <a href="/">
              <p> FaceBook</p>
              <FaFacebookF className="icon-f" />
            </a>
          </div>
          <div className="login-google">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
