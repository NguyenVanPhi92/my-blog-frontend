import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaReact } from "react-icons/fa";
import * as yup from "yup";
import InputField from "../../../components/Form-ctrl/InputField/InputField";
import PasswordField from "../../../components/Form-ctrl/InputPassword/PasswordField";
import RadioField from "../../../components/Form-ctrl/Radio/Radio";
import Select from "../../../components/Form-ctrl/Select/Select";
import "./style.scss";

const RegisterForm = (props) => {
  const arrValueDay = Array.from({ length: 31 }, (_, i) => i + 1);
  const arrValueMonth = Array.from({ length: 12 }, (_, i) => i + 1);
  const arrValueYear = Array.from(
    { length: (2010 - 1950) / 1 + 1 },
    (_, i) => 1950 + i * 1
  );
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter the required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: yup.string().required("Please enter your email").email(),
    day: yup.string().required("required choose"),
    month: yup.string().required("required choose"),
    year: yup.string().required("required choose"),
    phone: yup
      .string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    password: yup
      .string()
      .required("Please enter your password")
      .min(7, "password ít nhất 7 kí tự"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      day: "",
      month: "",
      year: "",
      phone: "",
      password: "",
      confirmPassword: "",
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

  return (
    <form className="form" onSubmit={form.handleSubmit(handleOnsubmit)}>
      <div className="form-group">
        <div className="icon">
          <FaReact />
        </div>
        <InputField
          placeholder="Enter your username..."
          name="username"
          label="User Name"
          form={form}
        />
        <InputField
          placeholder="Enter your email..."
          name="email"
          label="Email"
          form={form}
        />
        <div className="date-group">
          <label htmlFor="" style={{ fontSize: "1.2rem" }}>
            Ngày sinh
          </label>
          <div className="selector">
            <Select
              form={form}
              name="day"
              valueDefault="Ngày"
              valueChoose={arrValueDay}
            />
            <Select
              form={form}
              name="month"
              valueDefault="Tháng"
              valueChoose={arrValueMonth}
            />
            <Select
              form={form}
              name="year"
              valueDefault="Năm"
              valueChoose={arrValueYear}
            />
          </div>
        </div>
        {/* <div className="radio-group">
          <label htmlFor="">Giới tính</label>
          <div>
            <RadioField form={form} name="male" label="nam" />
          </div>
        </div> */}
        <InputField
          placeholder="Enter your phone..."
          name="phone"
          label="Phone"
          form={form}
        />
        <PasswordField
          placeholder="Enter your Password..."
          name="password"
          label="Password"
          form={form}
        />
        <PasswordField
          placeholder="..."
          name="confirmPassword"
          label="Confirm Password"
          form={form}
        />
        <div className="button-submit">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
