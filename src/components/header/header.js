import React, { useState, useEffect } from "react";
import * as s from "./styled-header";
import { useHistory } from "react-router-dom";
import { images, icons } from "../../assets";

export default () => {
  const history = useHistory();
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    setLogado(localStorage.getItem("logado"));
  }, []);

  return (
    <s.Header>
      <s.Div>
        <s.Title>Minha Van</s.Title>
        <s.Image src={images.logo} />
      </s.Div>
      <s.Div>
        {!logado && (
          <s.Div>
            <s.P>Novo por aqui?</s.P>
            <s.Link href="/register">Registre-se</s.Link>
          </s.Div>
        )}

        {logado ? (
          <>
            <s.PerfilButton onClick={() => history.push("/perfil")}>
              Perfil
            </s.PerfilButton>
            <s.User src={icons.perfil} alt="user" />
            <s.Sair
              onClick={() => {
                localStorage.removeItem("logado");
                setLogado(false);
              }}
            >
              Sair
            </s.Sair>
          </>
        ) : (
          <s.Button onClick={() => history.push("/login")}>Entrar</s.Button>
        )}
      </s.Div>
    </s.Header>
  );
};
