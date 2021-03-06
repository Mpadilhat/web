import React from "react";
import * as s from "./styled-black-input-icon";

export default ({
  value,
  onChange,
  placeholder,
  src,
  type,
  width,
  margin,
  size,
}) => {
  return (
    <s.DivInput margin={margin} size={size}>
      <s.Icon src={src} />
      <s.Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type || "text"}
        width={width}
      />
    </s.DivInput>
  );
};
