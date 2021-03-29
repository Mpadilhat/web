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
  LoadingSkeleton,
} from "../../components";
import { listarEmpresas } from "../../services/empresa.service";
import { ToastsContainer, ToastsStore } from "react-toasts";

const Home = () => {
  const usuario = useSelector((state) => state.usuario.usuario);

  const [empresas, setEmpresas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [dados, setDados] = useState({});

  useEffect(() => {
    setLoading(true);
    listarEmpresas()
      .then((resp) => {
        setEmpty(false);
        setEmpresas(resp);
      })
      .catch((e) => {
        setEmpty(true);
        if (!e) ToastsStore.info("Erro ao buscar empresas :(");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <s.Body>
      <ToastsContainer store={ToastsStore} />
      <Header />

      <s.Container>
        <s.Title>Empresas cadastradas</s.Title>

        {loading ? (
          <s.Box className="home">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <LoadingSkeleton key={i} />
            ))}
          </s.Box>
        ) : empty ? (
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
                if (
                  !usuario.id ||
                  (usuario && usuario.id && usuario.id !== dados._id)
                ) {
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
        <Footer />
      </s.Container>
    </s.Body>
  );
};

export default Home;
