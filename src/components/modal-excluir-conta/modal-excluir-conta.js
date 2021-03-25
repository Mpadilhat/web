import React, { useState } from "react";
import Modal from "react-modal";
import * as s from "./styled-modal-excluir-conta";
import { deletarUsuario, deletarEmpresa } from "../../services";
import Loader from "react-loader-spinner";

Modal.setAppElement("#root");

export default ({ isOpen, closeModal, id }) => {
  const [loading, setLoading] = useState(false);

  const excluirConta = (id) => {
    setLoading(true);
    deletarUsuario(id)
      .then(() => {
        setLoading(false);
      })
      .catch(() => deletarUsuario(id));
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
    <Modal
      isOpen={isOpen}
      onRequestClose={!loading && closeModal}
      style={customStyles}
    >
      <s.Content>
        <s.Question>Tem certeza que deseja excluir sua conta?</s.Question>
        <s.Row>
          <s.Button onClick={closeModal} disabled={loading}>
            Cancelar
          </s.Button>
          <s.Button red onClick={() => excluirConta()} disabled={loading}>
            {loading ? (
              <Loader type="TailSpin" color="white" height={20} width={20} />
            ) : (
              "Excluir conta"
            )}
          </s.Button>
        </s.Row>
      </s.Content>
    </Modal>
  );
};
