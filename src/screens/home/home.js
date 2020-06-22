import React, { useState } from "react";
import * as s from "./styled-home";
import { Header, Card, CardEmpresas, Modal } from "../../components";
import { empresa, empresas } from "../../components/mock/mock";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <s.Body>
      <Header />

      <s.Container>
        <s.Title>Empresas cadastradas</s.Title>
        <s.Box>
          {empresa.map((dados, index) => {
            return (
              <Card
                dados={dados}
                key={index}
                onClick={() => setOpenModal(true)}
              />
            );
          })}
          {empresas.map((dados, index) => {
            return (
              <CardEmpresas
                dados={dados}
                key={index}
                onClick={() => setOpenModal(true)}
              />
            );
          })}
          {openModal && (
            <Modal isOpen={openModal} closeModal={() => setOpenModal(false)} />
          )}
        </s.Box>
      </s.Container>
    </s.Body>
  );
};

export default Home;
