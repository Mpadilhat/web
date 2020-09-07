import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as s from "./styled-home";
import {
  Header,
  Card,
  CardEmpresas,
  ModalEmpresa,
  Footer,
} from "../../components";
import { empresa, empresas } from "../../components/mock/mock";
import { listarEmpresas } from "../../services/empresa.service";

const Home = () => {
  const usuario = useSelector((state) => state.usuario.usuario);

  //const [empresas, setEmpresas] = useState([]);
  //const [minhaEmpresa, setMinhaEmpresa] = useState();
  const [erro, setErro] = useState();

  const [openModal, setOpenModal] = useState(false);
  const [dados, setDados] = useState({});

  useEffect(() => {
    listarEmpresas()
      .then((resp) => {
        console.log("EMPRESAS: ", resp);
        //setEmpresa(resp);
        // if (usuario) {
        //   resp.map((emp) => {
        //     if (emp._id === usuario._id) setMinhaEmpresa(emp);
        //   });
        // }
      })
      .catch((e) => {
        setErro(e);
      });
  }, []);

  return (
    <s.Body>
      <Header />

      <s.Container>
        <s.Title>Empresas cadastradas</s.Title>
        <s.Box className="home">
          {usuario &&
            empresa.map((dados, index) => {
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
        <Footer />
      </s.Container>
    </s.Body>
  );
};

export default Home;
