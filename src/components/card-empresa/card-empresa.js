import React from "react";
import * as s from "./styled-card-empresa";
import { images } from "../../assets";

export default ({ first }) => {
  return (
    <>
      <s.Card first={first}>
        <s.Header first={first}>
          <s.Img src={images.alfinete} />
        </s.Header>
        <s.Content>
          <s.Line>
            <s.Foto src={images.logo} />
            <s.Head>
              <s.Name>Hönig Service</s.Name>
              <s.Text>Rua das flores, 27 - Sapiranga</s.Text>
            </s.Head>
          </s.Line>
          <s.Line>Contato:</s.Line>
          <s.Line>Faixa de preço:</s.Line>
          <s.Line>Vans:</s.Line>
          <s.Line>Ônibus:</s.Line>
          <s.Line>Faixa de preço:</s.Line>
          <s.Line>Redes sociais:</s.Line>
        </s.Content>
      </s.Card>
      <s.Card>
        <s.Header>
          <s.Img src={images.alfineteAzul} />
        </s.Header>
        <s.Content>
          <s.Line>TESTEEEEEEEEEEEEEE</s.Line>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            perferendis non blanditiis assumenda neque iusto nemo, earum
            deleniti
          </p>
        </s.Content>
      </s.Card>
    </>
  );
};
