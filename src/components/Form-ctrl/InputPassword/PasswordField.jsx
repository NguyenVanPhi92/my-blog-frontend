import React from "react";
import "./style.scss";
import { Controller } from "react-hook-form";

const PasswordField = (props) => {
  const { label, name, placeholder, form } = props;
  const {
    formState: { errors },
  } = form; // lấy ra lỗi trong form đã đc định nghĩa từ trước
  const hasError = errors[name];

  return (
    <>
      <Controller
        name={name}
        control={form.control}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, isDirty, error },
          formState,
        }) => (
          <div>
            <div className="form-group_input">
              <label htmlFor="" style={{ fontSize: "1.2rem" }}>
                {label}
              </label>
              <input
                type="password"
                className="input"
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                value={value}
              />
            </div>
            <p className="error-message" style={{ textAlign: "right" }}>
              {" "}
              {!!hasError ? errors[name]?.message : ""}
            </p>
          </div>
        )}
      />
    </>
  );
};

export default PasswordField;
