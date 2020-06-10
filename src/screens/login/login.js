import React from "react";
import { images } from "../../assets";
import * as s from "./styled-login";

const Login = () => {
  return (
    <s.Body>
      <s.Container>
        <s.Box>
          <s.Line>
            <s.Image src={images.logo} />
            <s.Image src={images.title} />
          </s.Line>

          <s.Input placeholder="E-mail" />
          <s.Input placeholder="Senha" />
          <s.Button>Enviar</s.Button>
        </s.Box>
      </s.Container>
    </s.Body>
  );
};

export default Login;
