import React from "react";
import * as s from "./styled-header";
import { useHistory } from "react-router-dom";
import { images } from "../../assets";

export default () => {
  const history = useHistory();
  return (
    <s.Header>
      <s.Div>
        <s.Title>Minha Van</s.Title>
        <s.Image src={images.logo} />
      </s.Div>
      <s.Div>
        <s.Div>
          <s.P>Novo por aqui?</s.P>
          <s.Link href="/register">Registre-se</s.Link>
        </s.Div>
        <s.Button onClick={() => history.push("/login")}>Entrar</s.Button>
      </s.Div>
    </s.Header>
  );
};
