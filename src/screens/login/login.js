import React, { useState } from "react";
import { images, icons } from "../../assets";
import * as s from "./styled-login";
import { BlackInputIcon, Footer, BlackButtonLoader } from "../../components";

const Login = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [verSenha, setVerSenha] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <s.Body>
      <s.Container>
        <s.Box>
          <s.Line>
            <s.Image src={images.logo} />
            <s.Image src={images.title} />
          </s.Line>

          <BlackInputIcon
            src={icons.mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <div style={{ marginTop: 10 }} />
          <BlackInputIcon
            src={icons.lock}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            type={!verSenha ? "password" : "text"}
          />

          <s.Div
            style={{
              padding: "0 10px",
              justifyContent: "space-between",
            }}
          >
            <s.Link href="/">Esqueci minha senha</s.Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <s.Checkbox
                type="checkbox"
                id="senha"
                onClick={() => setVerSenha(!verSenha)}
              />
              <s.Label
                size={"12"}
                style={{ margin: 0, fontWeight: "bold", cursor: "pointer" }}
                htmlFor="senha"
              >
                Ver senha
              </s.Label>
            </div>
          </s.Div>
          <div style={{ marginTop: 20 }} />
          <BlackButtonLoader
            text={"Entrar"}
            disabled={!email || !senha}
            isLoading={loading}
            onClick={() => setLoading(!loading)}
          >
            Entrar
          </BlackButtonLoader>
          <s.Div
            style={{
              justifyContent: "center",
            }}
          >
            <s.Label size={14}> Sua empresa ainda não tem uma conta? </s.Label>
            <s.Link size={13} href="/register">
              Registre-se
            </s.Link>
          </s.Div>
        </s.Box>

        <Footer />
      </s.Container>
    </s.Body>
  );
};

export default Login;
