import React from "react";
import * as s from "./styled-footer";

const Footer = () => {
  return (
    <s.Footer>
      ©{" "}
      <s.Link href="https://github.com/Mpadilhat" target="_blank">
        Marcos
      </s.Link>{" "}
      & {""}
      <s.Link href="https://github.com/kovalskiduda" target="_blank">
        Maria
      </s.Link>{" "}
      - 2020
    </s.Footer>
  );
};

export default Footer;
