import React from "react";
import * as s from "./styled-home";
import { Header, Card } from "../../components";

const Home = () => {
  return (
    <s.Body>
      <Header />

      <s.Container>
        <s.Title>Empresas cadastradas</s.Title>
        <s.Box>
          <Card first />
        </s.Box>
      </s.Container>
    </s.Body>
  );
};

export default Home;
