import React from "react";
import * as s from "./styled-gray-input-icon";

export default ({
  value,
  onChange,
  placeholder,
  src,
  type,
  width,
  height,
  margin,
}) => {
  return (
    <s.DivInput margin={margin}>
      <s.Icon src={src} />
      <s.Input
        src={src}
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
