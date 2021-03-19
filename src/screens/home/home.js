import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as s from "./styled-home";
import {
  Header,
  Card,
  CardEmpresas,
  ModalEmpresa,
  Footer,
  Empty,
} from "../../components";
import { listarEmpresas } from "../../services/empresa.service";

const Home = () => {
  const usuario = useSelector((state) => state.usuario.usuario);

  const [empresas, setEmpresas] = useState([]);

  const [empty, setEmpty] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [dados, setDados] = useState({});

  useEffect(() => {
    listarEmpresas()
      .then((resp) => {
        setEmpty(false);

        setEmpresas(resp);
      })
      .catch((e) => {
        setEmpty(true);
      });
  }, []);

  return (
    <s.Body>
      <Header />

      <s.Container>
        <s.Title>Empresas cadastradas</s.Title>

        {empty ? (
          <s.Box className="home" empty>
            <Empty failed={empresas.length ? true : false} />
          </s.Box>
        ) : (
          <s.Box className="home">
            {usuario &&
              usuario.id &&
              empresas &&
              empresas.length > 0 &&
              empresas.map((dados, index) => {
                if (usuario && usuario.id && usuario.id === dados._id) {
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
                }
              })}

            {empresas &&
              empresas.length > 0 &&
              empresas.map((dados, index) => {
                if (usuario && usuario.id && usuario.id !== dados._id) {
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
                }
              })}

            {openModal && (
              <ModalEmpresa
                isOpen={openModal}
                closeModal={() => setOpenModal(false)}
                dados={dados}
              />
            )}
          </s.Box>
        )}
      </s.Container>
      <Footer />
    </s.Body>
  );
};

export default Home;
