import React from "react";
import * as s from "./styled-black-input-icon";

export default ({ value, onChange, placeholder, src, type }) => {
  return (
    <s.DivInput>
      <s.Icon src={src} />
      <s.Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type || "text"}
      />
    </s.DivInput>
  );
};
