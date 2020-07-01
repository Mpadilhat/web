import React from "react";
import Modal from "react-modal";
import { icons } from "../../assets";
import * as s from "./styled-modal-senha";
Modal.setAppElement("#root");

export default ({ isOpen, closeModal, content }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      background: "#000",
      opacity: 0.9,
    },
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <s.DivSair>
        <s.Sair src={icons.sair} onClick={closeModal} />
      </s.DivSair>
      senha
      {content}
    </Modal>
  );
};
