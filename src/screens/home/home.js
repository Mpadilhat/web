import React from "react";
import * as s from "./styled-home";
import { Header, Card, CardEmpresas } from "../../components";
import { empresa, empresas } from "../../components/mock/mock";

const Home = () => {
  return (
    <s.Body>
      <Header />

      <s.Container>
        <s.Title>Empresas cadastradas</s.Title>
        <s.Box>
          {empresa.map((dados, index) => {
            return <Card dados={dados} key={index} />;
          })}
          {empresas.map((dados, index) => {
            return <CardEmpresas dados={dados} key={index} />;
          })}
        </s.Box>
      </s.Container>
    </s.Body>
  );
};

export default Home;
