import React from "react";
import { FaReact } from "react-icons/fa";
import "./style.scss";
import Select from "../../../components/Form-ctrl/Select/Select";

const Register = () => {
  const arrValue = ["1", "2", "3", "4", "5"];

  return (
    <form className="form">
      <h1>Register</h1>
      {/* <div className="form-group">
        <div className="icon">
          <FaReact />
        </div>
        <Input type="text" label="User name" placeholder="Enter your name..." />
        <Input type="email" label="Email" placeholder="Enter your email..." />
        <div className="date-group">
          <label htmlFor="" style={{ fontSize: "1.2rem" }}>
            Ngày sinh
          </label>
          <div className="selector">
            <Select
              name="Ngày Sinh"
              valueDefault="Ngày"
              valueChoose={arrValue}
            />
            <Select name="" valueDefault="Ngày" valueChoose={arrValue} />
            <Select name="" valueDefault="Ngày" valueChoose={arrValue} />
          </div>
        </div>
        <div className="radio-group">
          <label style={{ fontSize: "1.2rem" }}>Giới tính</label>
          <div className="radio">
            <Input type="radio" label="nam" gender="gender" />
            <Input type="radio" label="nữ" gender="gender" />
          </div>
        </div>
        <Input type="text" label="Số điện thoại" />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password..."
        />
        <Input type="password" label="Confirm password" placeholder="....." />

        <div className="button-submit">
          <button>Submit</button>
        </div>
      </div> */}
    </form>
  );
};

export default Register;
