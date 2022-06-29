import React from "react";
import "./style.scss";
import { Controller } from "react-hook-form";

const RadioField = (props) => {
  const { label, name, form, gender } = props;
  const {
    register,
    formState: { errors },
  } = form; // lấy ra lỗi trong form đã đc định nghĩa từ trước
  const hasError = errors[name];
  console.log("input error: ", !!hasError);

  return (
    <>
      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => (
          <div className="radio">
            <label style={{ fontSize: "1.2rem" }}>{label}</label>
            <input
              type="radio"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              name={gender}
            />
            {console.log("Male value: ", value)}
            <p className="error-message">
              {!!hasError ? errors[name]?.message : ""}
            </p>
          </div>
        )}
      />
    </>
  );
};

export default RadioField;
