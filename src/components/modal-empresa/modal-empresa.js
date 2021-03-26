import React from "react";
import Modal from "react-modal";
import { icons } from "../../assets";
import * as s from "./styled-modal";
import {
  capitalizeFirstLetter,
  mascaraCNPJ,
  mascaraTelefone,
} from "../../utils";
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
      maxHeight: 500,
      maxWidth: "85%",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
  };
  console.log(dados);
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <s.DivSair>
        <s.Sair src={icons.sair} onClick={closeModal} />
      </s.DivSair>
      <s.Content>
        <s.Line line>
          <s.Foto src={dados.foto} />
          <s.Head>
            <s.Name margin>{capitalizeFirstLetter(dados.empresa)}</s.Name>
            <s.Subtitle size={16}>
              {capitalizeFirstLetter(dados.endereco[0])}, {dados.endereco[1]},{" "}
              {capitalizeFirstLetter(dados.endereco[2])},{" "}
              {capitalizeFirstLetter(dados.endereco[3])}
              {" - "}
              {capitalizeFirstLetter(dados.endereco[4])}{" "}
            </s.Subtitle>
            <s.Text lineHeight>
              <strong>CNPJ:</strong> {mascaraCNPJ(dados.cnpj)}
            </s.Text>
            <s.Text lineHeight>
              <strong>Data de fundação:</strong> {dados.dataFundacao}
            </s.Text>
          </s.Head>
        </s.Line>
        <s.Column>
          <s.Question>Como posso entrar em contato? </s.Question>
          <s.Line>
            <s.Title>Celular:</s.Title>{" "}
            <s.P>{mascaraTelefone(dados.contato)}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>E-mail:</s.Title> <s.P>{dados.email}</s.P>
          </s.Line>
          <s.Line>
            <s.Title>
              Redes sociais:
              <s.Link href={dados.redeSocial} target="_blank">
                {dados.redeSocial}
              </s.Link>
            </s.Title>
          </s.Line>
          <s.Question />
          <s.Line>
            <s.Title>Faixa de preço:</s.Title>{" "}
            <s.P>
              R${dados.faixaPreco[0]} - {dados.faixaPreco[1]}
            </s.P>
          </s.Line>
          <s.Line>
            <s.Title>
              Zonas de atuação:{" "}
              <s.P>{capitalizeFirstLetter(dados.zonasAtuacao)}</s.P>
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
              {dados.vans.map((van, i) => (
                <s.P key={i}>
                  {van}
                  {i < dados.vans.length - 1 && ", "}
                </s.P>
              ))}
            </s.Line>
          )}

          <s.Line>
            <s.Title>Total de ônibus:</s.Title> <s.P>{dados.onibus.length}</s.P>
          </s.Line>
          {dados.onibus.length !== 0 && (
            <s.Line>
              <s.Title>Ônibus: </s.Title>
              {dados.onibus.map((oni, i) => (
                <s.P key={i}>
                  {oni}
                  {i < dados.onibus.length - 1 && ", "}
                </s.P>
              ))}
            </s.Line>
          )}
        </s.Column>
      </s.Content>
    </Modal>
  );
};
