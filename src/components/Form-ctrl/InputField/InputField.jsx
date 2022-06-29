import React from "react";
import "./style.scss";
import { Controller } from "react-hook-form";

const Input = (props) => {
  const { form, label, name, placeholder } = props;
  const {
    formState: { errors },
  } = form; // lấy ra lỗi trong form đã đc định nghĩa từ trước
  const hasError = errors[name];
  console.log("input error: ", !!hasError);
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
          <>
            <div className="">
              <div className="form-group_input">
                <label htmlFor="" style={{ fontSize: "1.2rem" }}>
                  {label}
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder={placeholder}
                  onChange={onChange}
                  onBlur={onBlur}
                  name={name}
                  value={value}
                />
              </div>
              <p className="error-message" style={{ textAlign: "right" }}>
                {" "}
                {!!hasError ? errors[name]?.message : ""}
              </p>
            </div>
          </>
        )}
      />
    </>
  );
};

export default Input;
