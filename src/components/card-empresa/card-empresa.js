import React from "react";
import * as s from "./styled-card-empresa";
import { images } from "../../assets";
import { capitalizeFirstLetter } from "../../utils";

export default ({ dados, onClick }) => {
  return (
    <s.Card first onClick={onClick}>
      <s.Header first>
        <s.Img src={images.alfinete} />
      </s.Header>
      <s.Content>
        <s.Line line>
          <s.Foto src={images.logo} />
          <s.Head>
            <s.Name>{capitalizeFirstLetter(dados.empresa)}</s.Name>
            <s.Text>{capitalizeFirstLetter(dados.endereco)}</s.Text>
          </s.Head>
        </s.Line>
        <s.Column>
          <s.Line>
            <s.Title>Contato:</s.Title> <s.P>{dados.contato}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>Faixa de preço:</s.Title> <s.P>{dados.faixaPreco}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>Zonas de atuação:</s.Title> <s.P>{capitalizeFirstLetter(dados.zonasAtuacao)}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>Vans:</s.Title> <s.P>{dados.vans.length}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>Ônibus:</s.Title> <s.P>{dados.onibus.length}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>Redes sociais:</s.Title>
            <s.Link href={dados.redeSocial}>{dados.redeSocial}</s.Link>
          </s.Line>
        </s.Column>
      </s.Content>
    </s.Card>
  );
};
