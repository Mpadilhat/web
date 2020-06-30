import React from "react";
import * as s from "../gray-input-icon/styled-gray-input-icon";

export default ({ value, onChange, placeholder, width, height, margin }) => {
  return (
    // <s.DivInput>
    <s.Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={"text"}
      width={width}
      height={height}
      margin={margin}
    />
    // </s.DivInput>
  );
};
