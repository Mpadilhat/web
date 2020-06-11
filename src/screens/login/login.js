import React, { useState } from "react";
import { images, icons } from "../../assets";
import * as s from "./styled-login";

const Login = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  return (
    <s.Body>
      <s.Container>
        <s.Box>
          <s.Line>
            <s.Image src={images.logo} />
            <s.Image src={images.title} />
          </s.Line>

          <s.DivInput>
            <s.Icon src={icons.mail} />
            <s.Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </s.DivInput>
          <s.DivInput style={{ marginTop: 10 }}>
            <s.Icon src={icons.lock} />
            <s.Input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              type="password"
            />
          </s.DivInput>
          <s.Div
            style={{
              paddingLeft: 10,
            }}
          >
            <s.Link href="www.google.com">Esqueci minha senha</s.Link>
          </s.Div>
          <s.Button disabled={!email || !senha}>
            {<s.Image src={icons.entrar} width={"85px"} height={"25px"} />}
          </s.Button>
          <s.Div
            style={{
              justifyContent: "center",
            }}
          >
            <s.Label> Sua empresa ainda não tem uma conta? </s.Label>
            <s.Link size={15} href="www.google.com">
              Registre-se
            </s.Link>
          </s.Div>
        </s.Box>
      </s.Container>
    </s.Body>
  );
};

export default Login;
