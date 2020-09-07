import React from "react";
import Modal from "react-modal";
import * as s from "./styled-modal-excluir-conta";
Modal.setAppElement("#root");

export default ({ isOpen, closeModal, id }) => {
  const excluirConta = () => {
    // deleteAccount(id)
    //   .then((resp) => {})
    //   .catch((e) => {});
  };

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
      <s.Content>
        <s.Question>Tem certeza que deseja excluir sua conta?</s.Question>
        <s.Row>
          <s.Button onClick={closeModal}>Cancelar</s.Button>
          <s.Button red onClick={excluirConta}>
            Excluir conta
          </s.Button>
        </s.Row>
      </s.Content>
    </Modal>
  );
};
