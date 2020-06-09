import React from "react";
import { icons, images } from "../../assets";
import * as s from "./styled-login";

const Login = () => {
  return (
    <s.Body >
      <s.Container>
        <s.Box>
          <s.Line>
            <s.Image src={icons.logo} />
            <s.Image src={icons.title} width={"350px"} height={"280px"}/>
          </s.Line>
          <s.Input placeholder="E-mail" />
          <s.Input placeholder="Senha" />
          <s.Button>Entrarzzzzzzzzzzzzzzzzzzzzzzzzzzzz</s.Button>
        </s.Box>
      </s.Container>
    </s.Body>
  );
}

export default Login;