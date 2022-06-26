import React from "react";
import "./style.scss";

const Select = (props) => {
  const { name, valueDefault, valueChoose } = props;
  return (
    <>
      <div className="form-group_input">
        <div className="select-group">
          <select name={name} id="cars">
            <option value="" className="choose-option">
              {valueDefault}
            </option>
            {valueChoose.map((idx, value) => (
              <option key={idx} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Select;
