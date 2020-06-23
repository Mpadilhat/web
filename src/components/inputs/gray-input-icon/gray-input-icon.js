import React, { useState } from "react";
import * as s from "./styled-gray-input-icon";
import { icons } from "../../../assets";

export default ({
  value,
  onChange,
  placeholder,
  src,
  type,
  width,
  height,
  margin,
  password,
  sizeWidth,
  sizeHeight,
  padding,
}) => {
  const [verSenha, setVerSenha] = useState(false);

  return (
    <s.DivInput margin={margin} password={password}>
      <s.Icon sizeWidth={sizeWidth} sizeHeight={sizeHeight} src={src} />

      <s.Input
        src={src}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={password ? (!verSenha ? "password" : "text") : type || "text"}
        width={width}
        height={height}
        padding={padding}
      />
      {password && (
        <s.Icon
          style={{ cursor: "pointer" }}
          src={!verSenha ? icons.eye : icons.blockEye}
          password
          onClick={() => setVerSenha(!verSenha)}
        />
      )}
    </s.DivInput>
  );
};
