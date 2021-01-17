import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import * as s from "./styled-header";
import { images, icons } from "../../assets";
//import { usuarioActions } from "../../store";

export default () => {
  const history = useHistory();

  const usuario = useSelector((state) => state.usuario.usuario);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "USUARIO/SET_USUARIO", usuario: false });
    //usuarioActions.setUsuario()
  };

  return (
    <s.Header>
      <s.Div>
        <s.Title>Minha Van</s.Title>
        <s.Image src={images.logo} />
      </s.Div>
      <s.Div>
        {!usuario && (
          <s.Div>
            <s.P>Novo por aqui?</s.P>
            <s.Link href="/register">Registre-se</s.Link>
          </s.Div>
        )}

        {usuario ? (
          <>
            <s.PerfilButton onClick={() => history.push("/profile")}>
              Perfil
            </s.PerfilButton>
            <s.User src={icons.perfil} alt="user" />
            <s.Sair onClick={logout}>Sair</s.Sair>
          </>
        ) : (
          <s.Button onClick={() => history.push("/login")}>Entrar</s.Button>
        )}
      </s.Div>
    </s.Header>
  );
};
