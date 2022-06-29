import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../app/apiRequest";
import RegisterForm from "../RegisterForm/RegisterForm";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (userRegis) => {
    console.log("Login Submit: ", userRegis);
    const newUser = {
      username: userRegis.username,
      email: userRegis.email,
      dateOfBirth: `${userRegis.day}/${userRegis.month}/${userRegis.year}`,
      phoneNumber: userRegis.phone,
      password: userRegis.password,
    };

    registerUser(newUser, dispatch, navigate);
  };

  return (
    <>
      <RegisterForm onSubmit={handleSubmit} />
    </>
  );
};

export default Register;
