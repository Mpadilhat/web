import React from "react";
import * as s from "./styled-black-input-icon";

export default ({
  mask,
  invalid,
  value,
  onChange,
  placeholder,
  src,
  type,
  width,
  margin,
  size,
  readOnly,
}) => {
  return (
    <s.DivInput margin={margin} size={size} invalid={invalid}>
      <s.Icon src={src} />

      {mask ? (
        <s.InputMasked
          mask={mask}
          readOnly={readOnly}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type || "text"}
          width={width}
        />
      ) : (
        <s.Input
          readOnly={readOnly}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type || "text"}
          width={width}
        />
      )}
    </s.DivInput>
  );
};
