import React, { useState } from "react";
import * as s from "./styled-home";
import { Header, Card, CardEmpresas, ModalEmpresa } from "../../components";
import { empresa, empresas } from "../../components/mock/mock";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [dados, setDados] = useState({});
  return (
    <s.Body>
      <Header />

      <s.Container>
        <s.Title>Empresas cadastradas</s.Title>
        <s.Box className="home">
          {empresa.map((dados, index) => {
            return (
              <Card
                dados={dados}
                key={index}
                onClick={() => {
                  setOpenModal(true);
                  setDados(dados);
                }}
              />
            );
          })}
          {empresas.map((dados, index) => {
            return (
              <CardEmpresas
                dados={dados}
                key={index}
                onClick={() => {
                  setOpenModal(true);
                  setDados(dados);
                }}
              />
            );
          })}
          {openModal && (
            <ModalEmpresa
              isOpen={openModal}
              closeModal={() => setOpenModal(false)}
              dados={dados}
            />
          )}
        </s.Box>
      </s.Container>
    </s.Body>
  );
};

export default Home;
