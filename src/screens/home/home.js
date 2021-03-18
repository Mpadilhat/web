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
import { empresa, 
  //empresas 
} from "../../components/mock/mock";
import { listarEmpresas } from "../../services/empresa.service";

const Home = () => {
  const usuario = useSelector((state) => state.usuario.usuario);

  const [empresas, setEmpresas] = useState([]);
  //const [minhaEmpresa, setMinhaEmpresa] = useState();
  const [empty, setEmpty] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [dados, setDados] = useState({});

  console.log("user", usuario);

  useEffect(() => {
    listarEmpresas()
      .then((resp) => {
        setEmpty(false);

        console.log("EMPRESAS: ", resp);
        setEmpresas(resp);
        // if (usuario) {
        //   resp.map((emp) => {
        //     if (emp._id === usuario._id) setMinhaEmpresa(emp);
        //   });
        // }
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

            {usuario && usuario._id && empresas.map((dados, index) => {
              if(usuario && usuario._id && usuario._id === dados._id){
                return (
                <Card
                dados={dados}
                key={index}
                onClick={() => {
                  setOpenModal(true);
                  setDados(dados);
                }}
              />
            )}})}

            {empresas.map((dados, index) => {
              if(usuario && usuario._id && usuario._id !== dados._id){
                return (
                <CardEmpresas
                dados={dados}
                key={index}
                onClick={() => {
                  setOpenModal(true);
                  setDados(dados);
                }}
              />
            )}})}
            
            

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
