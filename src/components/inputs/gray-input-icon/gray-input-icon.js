import React from "react";
import * as s from "./styled-gray-input-icon";

export default ({ value, onChange, placeholder, src, type, width, height }) => {
  return (
    <s.DivInput>
      <s.Icon src={src} />
      <s.Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type || "text"}
        width={width}
        height={height}
      />
    </s.DivInput>
  );
};