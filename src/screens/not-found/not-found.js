import React from "react";
import * as s from "./styled-not-found";
import { images } from "../../assets";

const NotFound = () => {
  return (
    <s.Container>
      <s.Image src={images.erro} alt="erro" />
      <s.Column>
        <s.Title> Erro 404 </s.Title>
        <s.Label>Rota inexistente</s.Label>
        <br />
        <br />
        <s.Link href="/">Home</s.Link>
      </s.Column>
    </s.Container>
  );
};

export default NotFound;
