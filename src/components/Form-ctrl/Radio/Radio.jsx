import React from "react";
import "./style.scss";
import { Controller } from "react-hook-form";

const RadioField = (props) => {
  const { label, name, placeholder, form } = props;
  const { errors } = form; // lấy ra lỗi trong form đã đc định nghĩa từ trước
  // const hasError = errors[name];
  console.log("error: ", errors);
  console.log("check form react hook form: ", form);

  return (
    <>
      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => (
          <div className="form-group_input">
            <label htmlFor="" style={{ fontSize: "1.2rem" }}>
              {label}
            </label>
            <input
              type="radio"
              className="input"
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
            {/* <p>{!!hasError ? errors[name]?.message : ""}</p> */}
          </div>
        )}
      />
    </>
  );
};

export default RadioField;
