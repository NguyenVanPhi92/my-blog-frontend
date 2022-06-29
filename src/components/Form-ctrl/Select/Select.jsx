import React from "react";
import { Controller } from "react-hook-form";
import "./style.scss";

const Select = (props) => {
  const { name, valueDefault, valueChoose, form } = props;
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
          <div className="form-group_input">
            <div className="select-group">
              <select name={name} onChange={onChange}>
                <option value="" className="choose-option">
                  {valueDefault}
                </option>
                {valueChoose.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <p className="error-message">
                {!!hasError ? errors[name]?.message : ""}
              </p>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default Select;
