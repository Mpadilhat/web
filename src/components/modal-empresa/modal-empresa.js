import React from "react";
import Modal from "react-modal";
import { icons } from "../../assets";
import * as s from "./styled-modal";
Modal.setAppElement("#root");

export default ({ isOpen, closeModal, dados }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <s.DivSair>
        <s.Sair src={icons.sair} onClick={closeModal} />
      </s.DivSair>
      <s.Content>
        <s.Line line>
          <s.Foto src={dados.foto} />
          <s.Head>
            <s.Name margin>{dados.empresa}</s.Name>
            <s.Subtitle size={16}>{dados.endereco}</s.Subtitle>
            <s.Text lineHeight>
              <strong>CNPJ:</strong> {dados.cnpj}
            </s.Text>
          </s.Head>
        </s.Line>
        <s.Column>
          <s.Question>Como posso entrar em contato? </s.Question>
          <s.Line>
            <s.Title>Celular:</s.Title> <s.P>{dados.contato}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>E-mail:</s.Title> <s.P>{dados.email}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>Redes sociais:</s.Title>
            <s.Link href={dados.redeSocial}>{dados.redeSocial}</s.Link>
          </s.Line>
          <s.Question />
          <s.Line>
            <s.Title>Faixa de preço:</s.Title> <s.P>{dados.faixaPreco}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>
              Zonas de atuação: <s.P>{dados.zonaAtuacao}</s.P>
            </s.Title>
          </s.Line>
          <s.Question />
          <s.Question>Tem opções de veículos?</s.Question>
          <s.Line>
            <s.Title>Total de vans:</s.Title> <s.P>{dados.vans.length}</s.P>
          </s.Line>
          {dados.vans.length !== 0 && (
            <s.Line>
              <s.Title>Vans: </s.Title>
              <s.P>
                {dados.vans[0]} , {dados.vans[1]}
              </s.P>
            </s.Line>
          )}

          <s.Line>
            <s.Title>Total de ônibus:</s.Title> <s.P>{dados.onibus.length}</s.P>
          </s.Line>
          {dados.onibus.length !== 0 && (
            <s.Line>
              <s.Title>Ônibus: </s.Title>
              <s.P>
                {dados.onibus[0]} , {dados.onibus[1]}
              </s.P>
            </s.Line>
          )}
        </s.Column>
      </s.Content>
    </Modal>
  );
};
