import React, { useState } from "react";
import * as s from "./styled-gray-input-icon";
import { icons } from "../../../assets";

export default ({
  mask,
  invalid,
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
    <s.DivInput margin={margin} password={password} invalid={invalid}>
      <s.Icon sizeWidth={sizeWidth} sizeHeight={sizeHeight} src={src} />

      {mask ? (
        <s.InputMasked
          mask={mask}
          src={src}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type || "text"}
          width={width}
          height={height}
          padding={padding}
        />
      ) : (
        <s.Input
          src={src}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={password ? (!verSenha ? "password" : "text") : type || "text"}
          width={width}
          height={height}
          padding={padding}
          minLength={password && 5}
        />
      )}
      {password && (
        <s.Icon
          className="img2-gray-input-icon"
          style={{ cursor: "pointer" }}
          src={!verSenha ? icons.eye : icons.blockEye}
          password
          onClick={() => setVerSenha(!verSenha)}
        />
      )}
    </s.DivInput>
  );
};
