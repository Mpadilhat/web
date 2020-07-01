import React from "react";
import * as s from "../card-empresa/styled-card-empresa";
import { images } from "../../assets";

export default ({ dados, onClick }) => {
  return (
    <s.Card onClick={onClick}>
      <s.Header>
        <s.Img src={images.alfineteAzul} />
      </s.Header>
      <s.Content>
        <s.Line line>
          <s.Foto src={images.logo} />
          <s.Head>
            <s.Name>{dados.nome}</s.Name>
            <s.Text>{dados.endereco}</s.Text>
          </s.Head>
        </s.Line>
        <s.Column>
          <s.Line>
            <s.Title>Telefone:</s.Title> <s.P>{dados.telefone}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>Faixa de preço:</s.Title> <s.P>R${dados.preco}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>Zonas de atuação:</s.Title> <s.P>{dados.zonas}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>Vans:</s.Title> <s.P>{dados.vans}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>Ônibus:</s.Title> <s.P>{dados.onibus}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>Redes sociais:</s.Title>
            <s.Link href={dados.link}>{dados.redes}</s.Link>
          </s.Line>
        </s.Column>
      </s.Content>
    </s.Card>
  );
};
