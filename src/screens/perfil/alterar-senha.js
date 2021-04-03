import React, { useState, useEffect } from "react";
import * as s from "./styled-perfil";
import { icons } from "../../assets";
import { BlackInputIcon } from "../../components";
import { validaSenha, alterarSenha } from "../../services";
import { ToastsStore } from "react-toasts";
import Loader from "react-loader-spinner";

const AlterarSenha = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [loadingSalvar, setLoadingSalvar] = useState(false);
  const [valido, setValido] = useState(false);
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [invalidaSenha, setInvalidaSenha] = useState(false);
  const [invalidaConfirmaSenha, setInvalidaConfirmaSenha] = useState(false);

  const validarSenha = () => {
    setLoading(true);
    validaSenha({ id, senha: senhaAtual })
      .then((resp) => {
        ToastsStore.success(resp);
        setValido(true);
      })
      .catch((e) => ToastsStore.error(e))
      .finally(() => setLoading(false));
  };

  const atualizarSenha = () => {
    setLoadingSalvar(true);
    alterarSenha({ id, senha: novaSenha })
      .then((resp) => {
        ToastsStore.success(resp);
        setValido(false);
        setSenhaAtual("");
        setNovaSenha("");
        setConfirmaSenha("");
      })
      .catch((e) => ToastsStore.error(e))
      .finally(() => setLoadingSalvar(false));
  };

  useEffect(() => {
    if (novaSenha !== "" && novaSenha.length < 5) setInvalidaSenha(true);
    else if (invalidaSenha) setInvalidaSenha(false);
  }, [invalidaSenha, novaSenha]);

  useEffect(() => {
    if (confirmaSenha !== "" && confirmaSenha.length < 5)
      setInvalidaConfirmaSenha(true);
    else if (invalidaConfirmaSenha) setInvalidaConfirmaSenha(false);
  }, [confirmaSenha, invalidaConfirmaSenha]);

  return (
    <s.DivSenha>
      <s.DivLabel
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <s.Label style={{ color: "white", fontSize: 25 }}>
          Alterar senha
        </s.Label>
        {!valido && (
          <s.Button
            onClick={() => validarSenha()}
            disabled={!senhaAtual || senhaAtual.length < 5}
          >
            {loading && (
              <Loader
                type="TailSpin"
                color="white"
                height={20}
                width={20}
                style={{ marginRight: 5 }}
              />
            )}
            Validar
          </s.Button>
        )}
      </s.DivLabel>

      {!valido && (
        <>
          <s.DivLabel>
            <s.Label>Digite a senha atual e clique em "Validar"</s.Label>
          </s.DivLabel>
          <BlackInputIcon
            size={"88%"}
            margin
            type={"password"}
            src={icons.lock}
            placeholder="Senha"
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
          />
        </>
      )}

      {valido && (
        <>
          <s.DivLabel>
            <s.Label>Nova senha:</s.Label>
          </s.DivLabel>
          <BlackInputIcon
            invalid={invalidaSenha}
            size={"88%"}
            margin
            type={"password"}
            src={icons.lock}
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <s.DivLabel>
            <s.Label>Confirmar senha:</s.Label>
          </s.DivLabel>
          <BlackInputIcon
            invalid={invalidaConfirmaSenha}
            size={"88%"}
            margin
            type={"password"}
            src={icons.lock}
            placeholder="Confirmar senha"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
          />
          <s.Button
            style={{ margin: "15px 0 0 0" }}
            disabled={
              !novaSenha ||
              !confirmaSenha ||
              novaSenha !== confirmaSenha ||
              invalidaSenha ||
              invalidaConfirmaSenha
            }
            onClick={() => atualizarSenha()}
          >
            {loadingSalvar && (
              <Loader
                type="TailSpin"
                color="white"
                height={20}
                width={20}
                style={{ marginRight: 5 }}
              />
            )}
            Confirmar e salvar
          </s.Button>
        </>
      )}
    </s.DivSenha>
  );
};

export default AlterarSenha;
