import React, { useState } from "react";
import Modal from "react-modal";
import * as s from "./styled-modal-excluir-conta";
import { deletarUsuario, deletarEmpresa } from "../../services";
import Loader from "react-loader-spinner";
import { ToastsStore } from "react-toasts";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { theme } from "../../assets";
Modal.setAppElement("#root");

export default ({ isOpen, closeModal, id }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const excluirConta = () => {
    setLoading(true);
    deletarUsuario(id)
      .then(() => {
        deletarEmpresa(id)
          .then(() => {
            dispatch({ type: "USUARIO/SET_USUARIO", usuario: false });
            localStorage.removeItem("user");
            setLoading(false);
            ToastsStore.info("Conta excluída com sucesso!");
            history.push("/");
          })
          .catch(() => {
            deletarEmpresa(id);
          });
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
      backgroundColor: `${theme.light}`,
    },
    overlay: {
      backgroundColor: `${theme.dark}`,
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
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
